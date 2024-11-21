import { useState, useEffect } from "react";
import { ProductCard } from "./components";

function App() {
  const [Loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .finally(() => setLoading(false));
  }, []); 

  return (
    <div>
      {Loading && <div>Loading...</div>}
      <div class = "product-list">
        {products.map((product) => 
          <ProductCard key={product.id} data={product} />
        )}
      </div>
    </div>
  );
}

export default App;
