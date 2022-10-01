import styled from 'styled-components'

//BLOCO DE LISTA DE PETS
export const DivLista = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 95vh;
  background-color: #99FCD6;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Trebuchet MS';
`
//BLOCO DE CADASTRO, APARECE QUANDO ADICIONA AS INFO DO PET
export const DivCadastro = styled.div`
  background-color: #69C5F9;
  color: #000;
  border: 10px solid #878787;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.50);
  padding: 20px;
  text-align: center;
  font-weight: bold;
  width: 50vh;
  height: 30vw;
  margin: 10px;
  .nome {
    font-size: 2em
  }
`
export const DivForm = styled.div`
  text-align: center;

  input {
    width: 80%;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #000;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.50);
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    font-weight: bold;
    padding-left: 7px;
  }
  
  button {
    margin-top: 15px;
    background-color: #878787;
    color: #FFF;
    font-weight: bold;
    padding: 10px 15px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.50);
  }
  
  button:hover {
    background-color: #69C5F9;
  }

  textarea {
    width: 83%;
    border: 1px solid #000;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.50);
    margin-top: 20px;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    font-weight: bold;
    padding-left: 7px;
  }
`
export const DivTitle = styled.div`
  text-align: center;
  font-size: 1em;
  `
