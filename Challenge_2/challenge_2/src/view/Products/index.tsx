import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  price: string;
}

const Products: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    const productStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Product-${index}`, productStore)
  }

  return(
    <Container>
      <section>
        { data.map( (product, index) => (
          <div className="product-content" key={product.id} >
            <img src={product.photo} alt={product.name} width="300" height="auto" />
            <h4>{product.name}</h4>
            <h6>{product.price}</h6>
            <button onClick={ () => handleCart(index) } >Acheter</button>
          </div>
        ))}
      </section>
    </Container>
  )
}

export default Products;