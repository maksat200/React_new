import { ProductCard } from "./components";
const products = [
  {

    id: 0 , 
    name: "Product 1" ,
    category: "Category 1" , 
    price:200 , 
    img: "https://s7d1.scene7.com/is/image/dish/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1?$ProductBase$&fmt=webp-alpha"

  },
  {
    id: 1 , 
    name: "Product 2" ,
    category: "Category 1" , 
    price:300 , 
    img: "https://s7d1.scene7.com/is/image/dish/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1?$ProductBase$&fmt=webp-alpha"

  }


]
function App() {
  return (
    <div>
      {
        products.map((product) => 
        <ProductCard data  ={product} />
      )
      }
    </div>
  );
}

export default App;
