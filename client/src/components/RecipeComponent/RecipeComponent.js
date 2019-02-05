import React from "react";



function RecipeComponent(props) {

console.log(props)




return (
    <div>
    <li> {props.recipe}</li>
    </div>
   )
} 



export default RecipeComponent;