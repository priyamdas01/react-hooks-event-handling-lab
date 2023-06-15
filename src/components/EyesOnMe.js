// Code EyesOnMe Component Here



// Code EyesOnMe Component Here
function onBlurHandler(event){
    console.log("Hey! Eyes on me!")
}

function EyesOnMe(){
    return (
        <button onFocus={event=>console.log("Good!")} onBlur={onBlurHandler}>Eyes on me</button>
    );
}

export default EyesOnMe;
