import "./Hero.css"
import heroImage from "../../assets/png/heroImage.jpg"
import productRank from "../../assets/svg/productRank.svg"

const Hero = ()=>{
    return(
        <div className="HeroContainer">
            <main className="heroLeft">
                <div className="h1-box">
                <h1>
                    The superfast color palletes generator!
                </h1>
                </div>

                <p>
                    Create the perfect palette or get inspired by <br />
                    thousands of beautiful color schemes.
                </p>

                <button>
                    Start the generator!
                </button>
                <button id="btnE">Explore trending palettes</button>
                <img src={productRank} alt="productRank" />
            </main>

            <main className="heroRight">
                <img src={heroImage} alt="heroImage" />
            </main>
        </div>
    )
}
export default Hero