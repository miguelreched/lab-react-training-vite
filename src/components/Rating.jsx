function Rating(props){
    if (props.children < 1){
        return <h4>☆☆☆☆☆</h4>
    }
    if (props.children > 1 && props.children <2){
        return <h4>★☆☆☆☆</h4>
    }
    if (props.children > 2 && props.children <3){
        return <h4>★★☆☆☆</h4>
    }
    if (props.children > 3 && props.children <4){
        return <h4>★★★☆☆</h4>
    }
    if (props.children > 4 && props.children <5){
        return <h4>★★★★☆</h4>
    }
    if (props.children > 5){
        return <h4>★★★★★</h4>
    }
    
}
export default Rating