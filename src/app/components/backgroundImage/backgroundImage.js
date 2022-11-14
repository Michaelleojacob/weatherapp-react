import useImagePreloader from "../../hooks/usePreloadImages";

const BackgroundImage = ({ condition }) => {
  const imagesLoaded = useImagePreloader([
    `${process.env.PUBLIC_URL}/assets/images/Clear.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Clouds.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Drizzle.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Fog.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Haze.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Rain.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Snow.jpg`,
    `${process.env.PUBLIC_URL}/assets/images/Thunderstorm.jpg`,
    `${process.env.PUBLIC_URL}/assets/icons/Clear.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Clouds.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Drizzle.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Fog.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Haze.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Rain.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Snow.png`,
    `${process.env.PUBLIC_URL}/assets/icons/Thunderstorm.png`,
  ]);
  return (
    <div
      className="app-background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${condition}.jpg)`,
      }}
    ></div>
  );
};

export default BackgroundImage;
