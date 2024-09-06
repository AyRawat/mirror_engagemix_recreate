import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex space-x-4 bg-white p-2 rounded-[20px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="border-transparent rounded-[20px]"
              variant="outline"
            >
              Products <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Product 1</DropdownMenuItem>
            <DropdownMenuItem>Product 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="border-transparent rounded-[20px]" variant="outline">
          Pricing
        </Button>
        <Button className="border-transparent rounded-[20px]" variant="outline">
          FAQs
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="border-transparent rounded-[20px]"
              variant="outline"
            >
              Resources <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Resource 1</DropdownMenuItem>
            <DropdownMenuItem>Resource 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        style={{
          background:
            "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
          border: "transparent",
          borderRadius: "10px",
        }}
        className="text-white"
        variant="outline"
        onClick={() => navigate("/app")}
      >
        Create project
      </Button>
    </nav>
  );
};

export default Navbar;
