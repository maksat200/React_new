import "./index1.css" ; 
export function ProductCard(props) { 
    const {image , category , title , price} = props.data ; 
    return (
    <div className="product-card">    
        <img width = {200} src = {image} alt="" />
        <div class = "category">{category}</div>
        <h4>{title}</h4>
        <div class= 'price'><b>${price}</b>  <button>Add Card</button> </div>
        
    </div> 
    );
}