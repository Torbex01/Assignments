import disney from '../../assets/png/disneyLogo.png'
import apple from '../../assets/png/appleLogo.png'
import dreamwork from '../../assets/png/dreamworkLogo.png'
import wb from '../../assets/png/wbLogo.png'
import netflix from '../../assets/png/netflixLogo.png'
import windows from '../../assets/png/window.png'
import pin from '../../assets/png/pinLogo.png'
import carton from '../../assets/png/cartonLogo.png'
import hasbro from '../../assets/png/hasbroLogo.png'
import spiral from '../../assets/png/spiralLogo.png'
import ea from '../../assets/png/eaLogo.png'
import "./Companies.css"
const Companies = ()=>{
    return(
        <div className="Companies">
            <h2>Used by 5+ million designers and by top companies</h2>
            <div className="topImages">
                <img src={disney} alt="disney" />
                <img src={dreamwork} alt="dreamwork" />
                <img src={wb} alt="wb" />
                <img src={netflix} alt="Netflix" />
                <img src={pin} alt="pin" />
                <img src={carton} alt=" carton" />
                <img src={hasbro} alt="hasbro" />
                <img src={spiral} alt="spiral" />
                <img src={ea} alt="EA" />
                <img src={apple} alt="apple" />
                
            </div>
            <img src={windows} alt="Windows" />
        </div>
    )
}
export default Companies