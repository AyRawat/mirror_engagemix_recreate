interface BannerProps {
  bannerSvg: string;
}

const Banner: React.FC<BannerProps> = ({ bannerSvg }) => (
  <div className="mb-8 w-[100%]">
    <img src={bannerSvg} alt="Banner" className="w-full h-fit" />
  </div>
);

export default Banner;
