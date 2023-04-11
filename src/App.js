import React from "react";
import Form from "./components/form";
import "./styles/App.css"

class App extends React.Component{


render(){

  return(
    <div className="main">
      <header>
          <h1 id="Main-title">CV CREATER</h1>
      </header>
      <div className="Form-preview-container">
      <Form/>
      </div>
      

    </div>
  )

}


}


export default App