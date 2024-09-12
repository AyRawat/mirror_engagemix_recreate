import { Card, CardContent } from "@/components/ui/card";
import BannerSVG from "@/assets/Dashboard/Banner.svg";

const Banner = () => (
  <Card className="bg-[#e8eeff] mb-8">
    <CardContent className="flex justify-between items-center p-0 rounded-xl">
      <div className="rounded-2xl w-[100%]">
        <img src={BannerSVG} alt="Banner" className="w-full h-fit" />
      </div>
    </CardContent>
  </Card>
);

export default Banner;
