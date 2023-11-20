function Greetings(props){



   if (props.lang === "de"){
    return (<p>"hallo"</p> )
   }else if (props.lang === "en"){
    return ( <p>"hello"</p> )
   }else if (props.lang === "es"){
    return ( <p>"hola"</p> )
   }else if (props.lang === "fr"){
    return ( <p>"bonjour"</p> )
   }
   return(
       <div>
        <h3>{greet}</h3>

        </div>
    )
    
}

export default Greetings