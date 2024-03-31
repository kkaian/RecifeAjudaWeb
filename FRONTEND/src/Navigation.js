import React from "react";
import "./App.css"; // Importe o arquivo CSS
import Form from "./Form"; // Importe o componente Form

function Navigation() {
  const handleVisualizarClick = () => {
    // Adicione seu código a ser executado quando o botão for clicado
    console.log("Visualizar Cadastro button clicked");
  };

  return (
    <div className="navigation">
      <img src="logo.png" alt="Image" className="logo" />
      <div className="mensagem-welcome">Bem-vindo!</div>
      <div className="contas-registradas">Acesse as contas registradas</div>      
      <button className="ver-cadastro" onClick={handleVisualizarClick}>
        Visualizar Cadastros
      </button>
      <div>
        <a href="#" className="recuperar-senha">Esqueci minha senha</a>
      </div>
      <Form /> {/* Renderize o componente Form aqui */}
    </div>
  );
}

export default Navigation;