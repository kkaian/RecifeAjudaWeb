import React from "react";
import { view, text, image } from "react";
import './Registrations.css';

export default function Registrations() {

  const row = [
    {
      nome : "NOME",
      datadenascimento : "DATA DE NASCIMENTO",
      cpf : "CPF",
      telefone : "TELEFONE",
      email : "E-MAIL",
      senha : "SENHA",
      cep : "CEP"
  
  
    }
  ]
  
  return (
    <view className="container">

      <img src="logo.png" alt="Image" className="logo" />

      <text className="title">CADASTROS REALIZADOS</text>

    </view>
  );
}
