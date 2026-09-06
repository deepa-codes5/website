import { Link } from "react-router-dom";
import logo from "./images/logo2.jpg"

function Nav() {
    return (
        <nav className="nav">
           <img src={logo} alt="food" style={{width:"120px",height:"120px"}}/>
             <Link to="/"><h3>Findfood</h3></Link>
             <Link to="/menu"><h3 >Menu </h3></Link>
             <h3>Find Resturant</h3>
            <Link to ="/contact us"> <h3>contact us</h3></Link>
            <Link to ="/sign in"><h3>sign in</h3></Link>
              <div className="navbutton">
               <Link to="/login"> <button>login</button></Link>
              </div>
        </nav>
    )
}
export default Nav;