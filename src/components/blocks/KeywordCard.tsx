import KeywordReplyCard from "@/assets/KeywordReplyCard.svg";

const KeywordCard = () => {
  return (
    <div className="relative w-80 h-96 m-4 ml-6">
      <img
        src={KeywordReplyCard}
        alt="Keyword Reply Card"
        className="absolute top-10 w-full h-full transform  origin-top-left"
      />
    </div>
  );
};

export default KeywordCard;
