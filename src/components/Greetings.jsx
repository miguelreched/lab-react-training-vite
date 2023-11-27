function Greetings(props){

   if (props.lang === "de"){
    return (<p>"hallo" {props.children}</p> )
   }else if (props.lang === "en"){
    return ( <p>"hello" {props.children}</p> )
   }else if (props.lang === "es"){
    return ( <p>"hola" {props.children}</p> )
   }else if (props.lang === "fr"){
    return ( <p>"bonjour" {props.children}</p> )
   }
   return(
       <div>
        <h3>{greet}</h3>

        </div>
    )
    
}

export default Greetings