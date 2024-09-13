// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks/DispatchHook";
import { fetchProjects } from "@/store/projectsSlice";
import { RootState } from "@/store/store";
import StatsComponent from "@/components/Custom/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";
import { api } from "@/apis";
import { Source } from "@/apis/types";
import { useAuth } from "@/contexts/auth/AuthContext";
import Banner from "@/components/Custom/Banner";
import Header from "@/components/Custom/Header";
import Sidebar from "@/components/blocks/Sidebar";
import CustomSheet from "@/components/Custom/CustomSheet";
import SocialMedia from "@/components/Custom/SocialMedia";
import Analytics from "@/components/Custom/Analytics/Analytics";
import DashboardBanner from "@/assets/Dashboard/Banner.svg";
import {
  setAccountData,
  setProductData,
  setKeywords,
  setSearchConfig,
  setProjectName,
  setProjectDescription,
} from "@/store/formSlice"; // Ensure this import is correct

export default function Dashboard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [currentStep, setCurrentStep] = useState(1); // Add currentStep state
  const [analyticsData, setAnalyticsData] = useState(null); // Add state for analytics data
  const dispatch = useDispatch();
  const productData = useSelector((state: RootState) => state.form.productData);
  const projects = useSelector((state: RootState) => state.projects.projects);
  const projectsStatus = useSelector(
    (state: RootState) => state.projects.status
  );
  const projectName = useSelector((state: RootState) => state.form.projectName); // Select projectName from Redux store
  const projectDescription = useSelector(
    (state: RootState) => state.form.projectDescription
  ); // Select projectDescription from Redux store
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const searchConfig = useSelector(
    (state: RootState) => state.form.searchConfig
  );
  const { user } = useAuth();

  useEffect(() => {
    if (projectsStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  useEffect(() => {
    fetchAnalyticsData();
  }, [activeSection]);

  const fetchAnalyticsData = async () => {
    try {
      const data = await api.projects.getAnalytics();

      setAnalyticsData(data);
    } catch (error) {
      console.error("Failed to fetch analytics data:", error);
    }
  };

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  const handleResetForms = (event: React.FormEvent) => {
    event?.preventDefault();
    dispatch(
      setAccountData({ email: "", password: "", firstName: "", lastName: "" })
    );
    dispatch(
      setProductData({
        companyName: "",
        companyDomain: "",
        companyDescription: "",
      })
    );
    dispatch(setKeywords([]));
    dispatch(setSearchConfig({ platforms: [] }));
    dispatch(setProjectName(""));
    dispatch(setProjectDescription(""));
  };

  const handleNextStep = async () => {
    if (currentStep === 3) {
      // Collect all data and make the API call

      const companyData = {
        domain: productData.companyDomain,
        description: productData.companyDescription,
        name: productData.companyName,
      };

      try {
        // Create the company first
        const createdCompany = await api.company.create(companyData);
        console.log("Created Company", createdCompany);

        // Use the created company ID to create the project
        const projectData = {
          companyId: createdCompany.id, // Use company ID from the created company
          name: projectName, // Use projectName from Redux store
          description: projectDescription,
          keywords: keywordsData,
          sources: searchConfig.platforms.map(
            (str) => str.toLowerCase() as Source
          ),
        };

        const createdProject = await api.projects.create(projectData);
        console.log("Created Project", createdProject);

        // Fetch the updated projects list
        dispatch(fetchProjects());

        // Close the sheet
        setIsSheetOpen(false);
      } catch (error) {
        console.error("Failed to create company or project:", error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseSheet = () => {
    setCurrentStep(1); // Reset step to 1
    handleResetForms(); // Call the reset function
    setIsSheetOpen(false); // Close the sheet
  };

  const stats = analyticsData
    ? [
        { label: "Projects", value: analyticsData?.projects.toString() || "0" },
        {
          label: "Keywords Tracked",
          value: analyticsData?.keywords.toString() || "0",
        },
        {
          label: "Mentions",
          value: analyticsData?.mentions?.toString() || "0",
        },
        { label: "Leads", value: analyticsData?.leads.toString() || "0" },
        {
          label: "Link Clicks",
          value: analyticsData?.clicks.toString() || "0",
        },
        {
          label: "Impressions",
          value: analyticsData?.impressions.toString() || "0",
        },
      ]
    : [
        { label: "Projects", value: projects.length.toString() },
        { label: "Keywords Tracked", value: "0" },
        { label: "Mentions", value: "0" },
        { label: "Leads", value: "0" },
        { label: "Link Clicks", value: "0" },
        { label: "Impressions", value: "0" },
      ];

  const renderContent = () => {
    switch (activeSection) {
      case "analytics":
        return <Analytics />;
      case "social-media":
        return <SocialMedia />;
      case "projects":
        return (
          <>
            <Header
              title={`Welcome, ${user?.name || "User"}.`}
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <StatsComponent stats={stats} />
            <ProjectManagement isProjectsSection={true} projects={projects} />
          </>
        );
      default:
        return (
          <>
            <Header
              title={`Welcome, ${user?.name || "User"}.`}
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <Banner bannerSvg={DashboardBanner} />
            <StatsComponent stats={stats} />
            <ProjectManagement isProjectsSection={false} projects={projects} />
          </>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 h-[96vh] w-[1712px]">
      <Sidebar onNavClick={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-8 max-w-7xl mx-auto overflow-hidden">
        {renderContent()}
      </main>
      <CustomSheet
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
        onReset={handleResetForms} // Pass the reset function
        component={null} // Ensure no component is passed
        step={currentStep} // Pass the current step
        onNext={handleNextStep} // Pass the next step handler
        onBack={handleBackStep} // Pass the back step handler
      />
    </div>
  );
}
