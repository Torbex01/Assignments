import ProfileCard from "../../component/ProfileCard/ProfileCard"
import tobiImg from "../../assets/jpg/tobiImg.jpg"
import samsonImg from "../../assets/jpg/samsonImg.jpg"
import toyinImg from "../../assets/jpg/toyinImg.jpg"
import "../../component/ProfileCard/ProfileCard.css"
import "./Home.css"

const Home = ()=>{
    return(
     <div>
         <div className="cardsContainer">
             <ProfileCard name= "Oluwatobi P. Awonuga"
                    age= "27"
                    location= "Ikorodu"
                    image= {tobiImg}
        
             />
             
             <ProfileCard theme="lightTheme"
                     name= "Samson O. Salau"
                    age= "35"
                    location= "Odogunyan"
                    image= {samsonImg}
        
             />

            <ProfileCard theme="darkTheme"
                     name= "Toyin M. Awojobi"
                    age= "30"
                    location= "Lagos"
                    image= {toyinImg}
        
             />
         </div>
     </div>
    )
  }
  
  export default Home
  