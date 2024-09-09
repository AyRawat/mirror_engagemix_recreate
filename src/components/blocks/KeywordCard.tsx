import BrandNameCard from "@/assets/BrandNameCard.svg";
import KeywordReplyCard from "@/assets/KeywordReplyCard.svg";
import CustomBackground from "@/assets//Background/CustomBackground.svg";

const KeywordCard = () => {
  return (
    <div className="relative w-80 h-96 m-4 ml-6">
      <img
        src={KeywordReplyCard}
        alt="Keyword Reply Card"
        className="absolute top-10 w-full h-full transform  origin-top-left"
      />
      {/* <img
        src={BrandNameCard}
        alt="Brand Name Card"
        className="absolute top-10 left-10 w-full h-full transform rotate-[1.5deg] origin-top-left"
      /> */}
    </div>
  );
};

export default KeywordCard;
