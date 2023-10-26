import "./image.css";

export const ResponsiveImage = ({ imgUrl, altText }) => {
  return <img src={imgUrl} alt={altText} className="responsive-img" />;
};

export const RoundImage = ({ imgUrl, altText }) => {
  return <img src={imgUrl} alt={altText} className="round-img" />;
};
