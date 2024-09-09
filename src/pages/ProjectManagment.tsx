import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Calendar, Download } from "lucide-react";
import FilterButton from "@/components/Custom/FilterButton";
import ProjectCard from "@/components/blocks/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProjectManagement() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/social-media-results");
  };

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
      <div className="flex justify-between items-center mb-3">
        <Tabs defaultValue="active" className="w-[600px] text-left">
          <TabsList>
            <TabsTrigger value="active" className="flex-1">
              Active
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex-1">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex space-x-2">
          <FilterButton>
            <Filter className="mr-2 h-4 w-4" />
            All platforms
          </FilterButton>
          <FilterButton>
            <Calendar className="mr-2 h-4 w-4" />
            Last 24 hours
          </FilterButton>
          <FilterButton>
            <Download className="mr-2 h-4 w-4" />
            Import/export
          </FilterButton>
        </div>
      </div>
      <ScrollArea className="border border-gray-300 rounded-lg max-w-[73rem] w-[73rem]">
        <div className="max-h-72 w-full p-3">
          {[...Array(5)].map((_, index) => (
            <ProjectCard key={index} onClick={handleCardClick} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
