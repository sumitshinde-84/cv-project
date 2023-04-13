import React from "react";
import "./style/descriptionPreview.css"
class DescriptionPreview extends React.Component{

    constructor(props){
        super()
    }


render(){
    const {description} =this.props
    return(
        <div className="DescriptionPreview">
         
          <p className="description">
            {description}
          </p>
        </div>
    )


}

}

export default DescriptionPreview