import React, { useState } from 'react';
import { Container } from './style';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {

  const history = useHistory();

  const [ data, setData ] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const convertData = JSON.stringify(data);
    localStorage.setItem("email", convertData);
  }

  const next = () => {
    if(data != "") {
      history.push('/products');
    }
  }

  return(
    <Container>
      <section>
        <div className="card-container">
          <form onSubmit={handleSubmit}>
            <h1>S'inscrire pour acheter</h1>
            <label>Adresse Courriel:</label>
            <input value={data} onChange={ e => setData(e.target.value)} type="email" required />
            <button type="submit">S'inscrire</button>
            <button onClick={next}>Suivant</button>
          </form>
        </div>
      </section>
    </Container>
  )
}

export default Home;