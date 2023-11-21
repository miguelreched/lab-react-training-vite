function Carousel(images) {

      const [carouselImage, setCarouselImage] = useState(0);
    
      const despImage = () => {
        setCarouselImage()
      };
    
      const antImage = () => {
        setCarouselImage()

        );
      };
    

      
    

    

  return (
    <div>
    <img
      src={carouselImage}


    />
    <button onClick={antImage}>Prev</button>
    <button onClick={despImage}>Next</button>
  </div>
);

}

export default Carousel