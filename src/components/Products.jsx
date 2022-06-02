import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([])
  
  useEffect( () => {
   
    async function fetchData() {
     let res = await fetch("http://localhost:3004/data");
     let data = await res.json();
    
     setProducts(data); 
    }
    fetchData();
  }, []);
  return (
    <div>
      Products:
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <Link to={`/products/${p.id}`}> {p.name}</Link>
          </div>
        ))}
      </div>
      <Outlet/>
    </div>
  );
};

export default Products;
