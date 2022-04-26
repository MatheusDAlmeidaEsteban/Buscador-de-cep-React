import {useState} from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';
import api from './service/api';
function App() {
  const[input, setInput] = useState('');
  const[cep,setCep] = useState({});
  
  async function handleSearch(){
    // 01001000/json/
    if(input ===""){
      alert("Preencha algum Cep!")
      return
    }
    try{
      const response = await api.get(input+"/json");
      setCep(response.data);
      setInput("");
     

    }catch{
      alert("Ops, um erro aconteceu!");
      setInput("");
    }

  }

  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="containerInput">
         <input type='text'placeholder=" Digite seu Cep"value={input} onChange={(e)=> setInput(e.target.value)}></input> 
         <button className="inputSearch" onClick = {handleSearch}><FiSearch size={25} color="#000" ></FiSearch></button>
        </div>

        <main className="main">
          <h2>Cep:{cep.cep}</h2>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>UF: {cep.uf}</span>

        </main>
    </div>
  );
}

export default App;
