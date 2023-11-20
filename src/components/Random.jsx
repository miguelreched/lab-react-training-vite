 function Random(props){
    let randonNum = Math.floor(Math.random() * props.max) 
    
    return(
 <div>
  
  <h5>Random value between {props.min} and {props.max} = {randonNum}
  </h5>

</div>
)
}
export default Random