import React, { useState } from 'react';
import "../App.css";
import { withRouter } from 'react-router-dom';
import api from '../services/api'

const Form = (props) => {
  const history = props.history;
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    cpf: '',
    phone: '',
    email: '',
    password: '',
    cep: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post('/users', form);
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: 'black' }}>Crie sua conta agora mesmo</h1>
      <hr style={{ background: 'linear-gradient(to right, #51ccde, #0a5bb3)', height: '5px', width: '70%', margin: '20px auto', border: 'none' }} />
      <h2 style={{ color: '#ffbd59' }}>Preencha com suas informações</h2>
      <div>
        <label htmlFor="name" className="form-label">
          
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="NOME COMPLETO"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="birthDate" className="form-label">
          
        </label>
        <input
          type="text"
          name="birthDate"
          value={form.birthDate}
          onChange={handleInputChange}
          placeholder="DATA DE NASCIMENTO"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', color: '#757575' , fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="cpf" className="form-label">
          
        </label>
        <input
          type="text"
          name="cpf"
          value={form.cpf}
          onChange={handleInputChange}
          placeholder="CPF"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          
        </label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          placeholder="TELEFONE"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          
        </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="E-MAIL"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="password" className="form-label">
          
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="SENHA"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <div>
        <label htmlFor="cep" className="form-label">
          
        </label>
        <input
          type="text"
          name="cep"
          value={form.cep}
          onChange={handleInputChange}
          placeholder="CEP"
          style={{ marginBottom: '10px', backgroundColor: '#d9d9d9', fontSize: '20px', fontWeight: 'bold', width: '475px', padding: '10px', borderRadius: '2px', border: '1px solid #ccc', textAlign: 'left' }}
        />
      </div>

      <button type="submit" className="confirm-button">
        Confirmar
      </button>
    </form>
  );
};

export default Form;