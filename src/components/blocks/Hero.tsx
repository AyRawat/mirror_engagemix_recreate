import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="text-left max-w-2xl">
      <h1 className="text-6xl font-bold mb-4">
        Track Keywords, Generate Responses, Boost Sales
      </h1>
      <p className="text-xl mb-6">
        We help you grow sales by mentioning your business when your keywords
        are mentioned
      </p>
      <Button
        style={{
          background:
            "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
          border: "transparent",
          borderRadius: "20px",
        }}
        className="text-white"
        variant="outline"
      >
        Create project
      </Button>
    </div>
  );
};

export default Hero;
