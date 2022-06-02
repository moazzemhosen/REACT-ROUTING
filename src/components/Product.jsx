import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [p, setP] = useState({})
  if (!id) {
     navigate("/nodata");
  }

useEffect(() => {
  if (id) {
    async function fetchData() {
      let res = await fetch(`http://localhost:3004/data/${id}`);
      let data = await res.json();

      setP(data);
    }
    fetchData();
  } 
}, [id]);
  return (

    <div> ID:{id}
      <div>Name:-{p.name} Price:-{p.price}</div>
    </div>
  )
}

export default Product