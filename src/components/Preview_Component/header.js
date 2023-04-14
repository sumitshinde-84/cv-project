import React from "react";
import "./style/header.css"

class Header extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const { firstName, lastName, title } = this.props;
        return (
            <div className="header">
                <h1>{firstName + " " + lastName}</h1>
                <h2>{title}</h2>
            </div>
        );
    }
}

export default Header;