import React from "react";
import "./style/descriptionPreview.css"
const DescriptionPreview =({description})=>{


   
    return(
        <div className="DescriptionPreview">
         
          <p className="description">
            {description}
          </p>
        </div>
    )
}



export default DescriptionPreview