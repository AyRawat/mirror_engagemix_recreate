import { Card, CardContent } from "@/components/ui/card";

const Banner = () => (
  <Card className="bg-[#e8eeff] mb-8">
    <CardContent className="p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          Track Keywords, Generate Responses, Boost Sales
        </h2>
        <p className="text-gray-600">
          We help you grow sales by mentioning your business when your keywords
          are mentioned
        </p>
      </div>
      <div className="flex-shrink-0 ml-4">
        <img
          src="/placeholder.svg?height=100&width=200"
          alt="Social media posts"
          className="w-48 h-24 object-cover rounded-md"
        />
      </div>
    </CardContent>
  </Card>
);

export default Banner;
