import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks/DispatchHook";
import { RootState } from "@/store/store";
import { api } from "@/apis";
import { ProjectDto, AnalyticsDto, Source } from "@/apis/types";
import { useAuth } from "@/contexts/auth/AuthContext";
import StatsComponent from "@/components/common/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";
import Banner from "@/components/common/Banner";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import CustomSheet from "@/components/Custom/CustomSheet";
import SocialMedia from "@/components/social-media/SocialMedia";
import Analytics from "@/components/Custom/Analytics/Analytics";
import DashboardBanner from "@/assets/Dashboard/Banner.svg";
import InviteMemberModal from "@/components/project/InviteMember";
import {
  setAccountData,
  setProductData,
  setKeywords,
  setSearchConfig,
  setProjectName,
  setProjectDescription,
} from "@/store/formSlice";

export default function Dashboard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const { user } = useAuth();
  const dispatch = useDispatch();

  // Redux state for form data
  const productData = useSelector((state: RootState) => state.form.productData);
  const projectName = useSelector((state: RootState) => state.form.projectName);
  const projectDescription = useSelector(
    (state: RootState) => state.form.projectDescription
  );
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const searchConfig = useSelector(
    (state: RootState) => state.form.searchConfig
  );
  const queryClient = useQueryClient();

  // React Query for data fetching
  const { data: projects, isLoading: isProjectsLoading } = useQuery<
    ProjectDto[]
  >({
    queryKey: ["projects"],
    queryFn: () => api.projects.getAll(),
  });

  const { data: analyticsData } = useQuery<AnalyticsDto>({
    queryKey: ["analytics"],
    queryFn: () => api.projects.getAnalytics(),
  });

  const handleInviteClick = () => {
    setInviteModalOpen(true);
  };

  const handleCloseModal = () => {
    setInviteModalOpen(false);
  };

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  const handleResetForms = () => {
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
    setIsLoading(true);
    setLoadingText(getTextForStep(currentStep));

    setTimeout(async () => {
      if (currentStep === 3) {
        const companyData = {
          domain: productData.companyDomain,
          description: productData.companyDescription,
          name: productData.companyName,
        };

        try {
          const createdCompany = await api.company.create(companyData);
          console.log("Created Company", createdCompany);
          const projectData = {
            companyId: createdCompany.id,
            name: projectName,
            description: projectDescription,
            keywords: keywordsData,
            sources: searchConfig.platforms.map(
              (str) => str.toLowerCase() as Source
            ),
          };

          const createdProject = await api.projects.create(projectData);
          console.log("Created Project", createdProject);

          queryClient.invalidateQueries({ queryKey: ["projects"] });
          queryClient.invalidateQueries({ queryKey: ["analytics"] });

          setIsSheetOpen(false);
        } catch (error) {
          console.error("Failed to create company or project:", error);
        }
      } else {
        setCurrentStep(currentStep + 1);
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleBackStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseSheet = () => {
    setCurrentStep(1);
    handleResetForms();
    setIsSheetOpen(false);
  };

  const getTextForStep = (step: number): string => {
    const texts = [
      "Analysing your website information to be able to suggest key themes and keywords...",
      "Generating your project...",
      "Generating results based on your search...",
    ];
    return texts[step - 1] || "Processing...";
  };

  const stats = analyticsData
    ? [
        { label: "Projects", value: analyticsData.projects.toString() },
        { label: "Keywords Tracked", value: analyticsData.keywords.toString() },
        { label: "Mentions", value: analyticsData.posts?.toString() || "0" },
        { label: "Leads", value: analyticsData.leads.toString() },
        { label: "Link Clicks", value: analyticsData.clicks.toString() },
        { label: "Impressions", value: analyticsData.impressions.toString() },
      ]
    : [
        { label: "Projects", value: projects?.length.toString() || "0" },
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
              onInviteClick={handleInviteClick}
            />
            <StatsComponent stats={stats} />
            {!isProjectsLoading && projects && (
              <ProjectManagement isProjectsSection={true} projects={projects} />
            )}
          </>
        );
      default:
        return (
          <>
            <Header
              title={`Welcome, ${user?.name || "User"}.`}
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
              onInviteClick={handleInviteClick}
            />
            <Banner bannerSvg={DashboardBanner} />
            <StatsComponent stats={stats} />
            {!isProjectsLoading && projects && (
              <ProjectManagement
                isProjectsSection={false}
                projects={projects}
                handleNewProject={handleNewProjectClick}
              />
            )}
          </>
        );
    }
  };

  return (
    <div className="h-screen flex justify-center pt-5 pb-6">
      <div className="grid grid-cols-[296px_1fr] gap-8 w-full max-w-[1920px]">
        <Sidebar onNavClick={setActiveSection} activeSection={activeSection} />
        <main className="overflow-hidden pr-8">{renderContent()}</main>
      </div>
      <CustomSheet
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
        onReset={handleResetForms}
        component={null}
        step={currentStep}
        onNext={handleNextStep}
        onBack={handleBackStep}
        isLoading={isLoading}
        loadingText={loadingText}
      />
      {isInviteModalOpen && (
        <InviteMemberModal
          onClose={handleCloseModal}
          companyDomain={user?.company?.domain || ""}
        />
      )}
    </div>
  );
}
