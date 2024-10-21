
const Products = (Props)=>{
    return(
        <div className={`ProductsCard ${Props.cardClass}`}>
            <div className="imgSpace">
            <img src={Props.image} alt="productImage" />
            </div>
            <h2>{Props.name}</h2>
            <p>{Props.describe}</p>
            <h3>{Props.price}</h3>
          

        </div>
    )
}
export default Products