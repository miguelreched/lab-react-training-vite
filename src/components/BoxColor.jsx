function BoxColor(props){
    let randonNum1 = Math.floor(Math.random() * 255)
    let randonNum2 = Math.floor(Math.random() * 255)
    let randonNum3 = Math.floor(Math.random() * 255)
    return(
<div>
r={randonNum1}
g={randonNum2}
b={randonNum3}


</div>
    )
}

export default BoxColor