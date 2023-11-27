function BoxColor(props){


    return(
<div style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}}>               
r={props.r}
g={props.g}
b={props.b}


</div>
    )
}
export default BoxColor