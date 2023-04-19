import "./style/header.css"


const Header = ({firstName, lastName, title})=>{


        return (
            <div className="header">
                <h1>{firstName + " " + lastName}</h1>
                <h2>{title}</h2>
            </div>
        );
   
}

export default Header;