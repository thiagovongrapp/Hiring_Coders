import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section {
      height: 100vh;
      width: 100%;
      background: #E6E6FA;
      display: flex;
      align-items: center;

      .product-content{
          display: grid;
          text-align: center;
          height: 300px;
          background: #fff;
          margin: 105px;
          border-radius: 12px;
          padding: 12px;
      }
  }
`