import Products from "../../components/Products/Products"
import './Home.css'
import "../../components/Products/Products.css"
import turkeyImg from "../../assets/jpg/turkey.jpg"
import sausageImg from "../../assets/jpg/sausage.jpg"
import chickenImg from "../../assets/jpg/chicken.jpg"
import orangeImg from "../../assets/jpg/orange.jpg"
import cheeseburger from "../../assets/jpg/cheeseburger.jpg"
import pieImg from "../../assets/jpg/pie.jpg"

const Home = ()=>{
    return(
       <div>
             <div className="ProductList">
           
                 <section className="rows">
                 <Products cardClass= "cardOne"
                    image= {turkeyImg}
                     name= "Fried Turkey" 
                      price= "$5.00"
                      describe= "Sweet and spicy fried Turkey"
                />

                 <Products 
                     image= {sausageImg}
                     name= "Sausage rolls" 
                      price= "$2.50"
                      describe= "Tasty suasage rolls"
                />

                <Products 
                     image= {chickenImg}
                     cardClass= "cardOne"
                     name= "Chicken and chips" 
                      price= "$10.00"
                      describe= "Tasty chicken and crispy chips"
                />
                 </section>

                 <section className="rows">
                 <Products
                     image= {orangeImg}
                     cardClass= "cardOne"
                     name= "Orange Juice" 
                      price= "$3.50"
                      describe= "Freshly squeezed orange juice"
                />

                 <Products 
                     image= {cheeseburger}
                     name= "CheeseBurger" 
                      price= "$4.00"
                      describe= "Rich,cheese filled burgers"
                />

                <Products
                    image= {pieImg}
                    cardClass= "cardOne"
                     name= "Chicken Pie" 
                      price= "$5.00"
                      describe= "Hot baked chicken filled pie"
                />
                 </section>
             </div>
       </div>
    )
}
export default Home