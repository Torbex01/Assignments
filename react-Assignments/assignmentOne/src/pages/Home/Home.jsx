import Header from "../../component/Header/Header"
import Footer from "../../component/Footer/Footer"
import "./Home.css"
import hero from "../../assets/png/image-hero-desktop.png"
import databiz from "../../assets/svg/client-databiz.svg"
import audiophile from "../../assets/svg/client-audiophile.svg"
import meet from "../../assets/svg/client-meet.svg"
import maker from "../../assets/svg/client-maker.svg"
const Home = () =>{
    return (
        <div id="HomePage">
            <Header/>
            <div id="hero">
                <div id="heroLeft">
                    <h1>Make <br />remote work</h1>
                    <p>Get your team in sync, no matter your location. <br />
                        Streamline processes, create team rituals, and <br />
                        watch productivity soar.
                    </p>
                    <button id="learnMore">Learn more</button>
                   
                    <div id="littleImages">
                        <img src={databiz} alt="databiz" />
                        <img src={audiophile} alt="audiophile" />
                        <img src={meet} alt="meet" />
                        <img src={maker} alt="maker" />
                    </div>
                </div>
                <div id="heroRight">
                    <img className="hero-img" src= {hero} alt="hero-image" />
                </div>
            </div>
            
        </div>
    )
}
export default Home