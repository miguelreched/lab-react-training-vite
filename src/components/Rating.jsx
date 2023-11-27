function Rating({children}){
    // const {children} = props.children; lo que pasa internamente
      let roundNumber = Math.round(children);
      let rate;
    if (roundNumber === 0) {
      rate = "☆☆☆☆☆";
    } else if (roundNumber === 1) {
      rate = "★☆☆☆☆";
    } else if (roundNumber === 2) {
      rate = "★★☆☆☆";
    } else if (roundNumber === 3) {
      rate = "★★★☆☆";
    } else if (roundNumber === 4) {
      rate = "★★★★☆";
    } else if (roundNumber >= 5) {
      rate = "★★★★★";
    } 
      return(
          <div>{rate}</div>
      )
  }
  export default Rating;