function IdCard(props){

    return( 
    <div>
    <h3>{props.lastName}</h3>
    <h3>{props.firstName}</h3>
    <h4>{props.gender}</h4>
    <h4>{props.height}</h4>
    <h4>{props.birth.toDateString()}</h4>
    <img src={props.picture}/>
    </div>
 
    )
}

export default IdCard