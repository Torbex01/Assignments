import "./Header.css"
import logo from "../../assets/svg/logo.svg"
const Header = () =>{
    return(
        <div className="Header">
            <div className="leftHeader">
                <img src={logo} alt="no image" />
                
                <select>
                        <option value="">Features</option>
                </select>
                <select>
                        <option value="">Company</option>
                </select>
                    <a href="">Careers</a>
                    <a href="">About</a>
                
            </div>

            <div className="rightHeader">
                <button id="login">Login</button>
                <button id="register">Register</button>
            </div>
        </div>
    )
}
export default Header