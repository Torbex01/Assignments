import BlogPost from "../../component/BlogPost/Blogpost"
import "./Home.css"
import "../../component/BlogPost/Blogpost.css"


const Home = ()=>{
    return(
       <div>
            <h1>WELCOME TO MY BLOG </h1>
             <div className="PostList">
            
                 <BlogPost title= "National Grid Collapse"
                      author= "Ugo P. Onyeka"
                      content= "Electricity consumers have decried the repeated collapse of the national grid, which happened again on Saturday. They described it as an embarrassment to the nation. Sunday PUNCH reports that the national grid collapsed around 8.16am on Saturday, the third time in one week, with its attendant blackout across the nation. "
                      date= "October 16 2024"
                 />

                 <BlogPost blogClass= "blogTwo"
                    title= "VDM to Appear in Court "
                      author= "Babatnde P. Folorunsho"
                      content= "The Lagos High Court in Ikeja on Tuesday ordered social media influencer, Martins Otse, also known as Verydarkman, to bring down the defamatory video and comments published on Sept 24th against Senior Advocate of Nigeria, Femi Falana and his son Folarin, popularly known as Falz."
                      date= "October 18 2024"
                 />

                <BlogPost blogClass= "blogThree"
                     title= "Fuel Price drop as Dangote Refinery begin distribution"
                      author= "James K. Williams"
                      content= "The Dangote Petroleum Refinery and the Nigerian National Petroleum Company Limited gave divergent views over the price of Premium Motor Spirit, popularly called petrol, produced and pumped out on Sunday by Dangote Refinery. While both oil firms have different accounts of the price of PMS dispensed by Dangote on Sunday, independent oil marketers say they are still awaiting the price of the commodity from the sole off-taker of the product NNPC."
                      date= "October 18 2024"
                 />

                <BlogPost 
                     title= "Building Collapse in Lagos"
                      author= "Kabir L. Abdul"
                      content= "A building has collapsed in Nigeria’s megacity, Lagos, once every two weeks on average so far this year. Whereas the commercial cost can be calculated, a figure can never be put on the value of the lives lost underneath the rubble. The gaps among the buildings, replaced by piles of debris, represent a failure of governance as well as giving rise to allegations of contractors trying to cut corners to save money"
                      date= "July 6 2024"
                 />
            </div>
       </div>
    )
  }
  
  export default Home
  