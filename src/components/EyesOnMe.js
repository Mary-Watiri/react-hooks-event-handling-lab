import React from "react";

// Code EyesOnMe Component Here

function EyesOnMe(){
    function handleBlur(event){
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={() => console.log("Good!")} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;