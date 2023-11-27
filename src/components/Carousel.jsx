import { useState } from "react";
function Carousel(props) {
  const [carouselImage, setCarouselImage] = useState(0);

  const despImage = () => {
    setCarouselImage(carouselImage + 1);
  };

  const antImage = () => {
    setCarouselImage(carouselImage - 1);
  };

  return (
    <div>
      <img src={props.images[carouselImage]} />
      <button onClick={antImage}>Prev</button>
      <button onClick={despImage}>Next</button>
    </div>
  );
}

export default Carousel;
