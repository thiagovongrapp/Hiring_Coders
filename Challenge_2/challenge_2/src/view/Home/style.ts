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

      .card-container{
          max-width: 400px;
          margin: 0 auto;
          text-align: center;
      }

      .card-container label{
          text-align: center;
          padding: 20px;
          display: block;
      }

      .card-container h1{
          font-size: 30px;
          color: #000;
          margin-bottom: 20px;
      }

      .card-container input, .card-container emailarea{
          width: 100%;
          padding: 6px 10px;
          border: 1px solid #ddd;
          box-sizing: border-box;
          display-block;
      }

      .card-container button{
          background: #f1356d;
          color: #fff;
          width: 100px;
          border: 0;
          margin: 8px;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
      }

  }
`