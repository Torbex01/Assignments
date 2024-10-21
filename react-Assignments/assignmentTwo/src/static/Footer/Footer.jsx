import './Footer.css'
import twitter from '../../assets/png/twitter.png'
import facebook from '../../assets/png/facebook.png'
import pinterest from '../../assets/png/pinterest-logo.png'
import prohunt from '../../assets/png/producthunt.png'
import insta from '../../assets/png/instagram.png'

const Footer = ()=>{
    return(
        <div className="FooterContainer">
          <div className="Footer">
           <main>
                <h2>Tools</h2>
                <ul>Generate your palettes</ul>
                <ul>Explore popular palettes</ul>
                <ul>Extract palette from image</ul>
                <ul>Contrast checker</ul>
                <ul>Preview palettes on designs</ul>
                <ul>Recolor your own design</ul>
                <ul>Color picker</ul>
                <ul>Browse free fonts</ul>
           </main>

           <main>
                <h2>More</h2>
                <ul>List of colors</ul>
                <ul>Browse gradients</ul>
                <ul>Create a gradient</ul>
                <ul>Make a gradient palette</ul>
                <ul>Image converter</ul>
                <ul>Create a collage</ul>
                <ul>Font Generator</ul>
           </main>

           <main>
                <h2>Jobs</h2>
                <ul>Find your next job</ul>
                <ul>Post a job</ul>
            
                <h2>Apps</h2>
                <ul>iOS App</ul>
                <ul>Android App</ul>
                <ul>Figma Plugin</ul>
                <ul>Adobe Extension</ul>
                <ul>Chrome Extension</ul>
                <ul>Instagram Page</ul>
           </main>

           <main>
                 <h2>Company</h2>
                 <ul>Pricing</ul>
                 <ul>License</ul>
                 <ul>Terms of service</ul>
                 <ul>Privacy policy</ul>
                 <ul>Cookie policy</ul>
                 <ul>Manage cookies</ul>
                 <ul>Help center</ul>
                 <ul>Advertise</ul>
                 <ul>Affiliate</ul>
                 <ul>Contact</ul>
            </main> 
        </div>


        <div className="social">
          <p>
               &copy; Coolors by <span>Fabrizio Bianchi</span>. From a creative
               to all the others
          </p>
          <section className="icons">
               <img src={twitter} alt="twitter" />
               <img src={facebook} alt="facebook" />
               <img src={pinterest} alt="pinterest" />
               <img src={insta} alt="insta" />
               <img src={prohunt} alt="producthunt" />
          </section>
        </div>
        </div>
    )
}
export default Footer