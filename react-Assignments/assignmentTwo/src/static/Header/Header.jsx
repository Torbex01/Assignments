import headerLogo from "../../assets/svg/headerLogo.svg"
import "./Header.css"
const Header = ()=>{
    return(
        <div className="HeaderContainer">
            <img src={headerLogo} alt="Logo" />
            <section className="navs">
                <nav>Tools</nav>
                <nav className="go">Go Pro</nav>
                <nav>Sign in</nav>
                <button>Sign up</button>
            </section>
        </div>
    )
}
export default Header