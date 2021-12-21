import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

let isDisabled = true;

function Login() {
  const [email, setEmail ] = useState('');
  const [name, setName ] = useState('');
  const history = useNavigate()
  
  function handleClick() {
    const descripition = ''
    const objeto = { email, name, descripition };
    const string = JSON.stringify(objeto)
    localStorage.setItem('user', string)
    history('/telaprincipal')
  }
  useEffect(() => {
    if(name && email) {
      isDisabled= false;
    }
  }, [email, name])

  return(
    <>
      <header>
        <h1>Notes & Tasks</h1>
      </header>
      <div>
        <h1>Bem-vindo!</h1>
        <h2>Faça Login para continuar</h2>
        <form>
          <input
          className="email"
          type="email"
          value={ email }
          placeholder="Email"
          onChange={ (event) => setEmail(event.target.value) }
          />
          <input
          className="nome"
          type="text"
          value={ name }
          placeholder="Nome"
          onChange={ (event) => setName(event.target.value )}
          />
          <button
          className="btn-entrar"
          disabled={ isDisabled }
          type="button"
          onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
      <div className="copy">
        <p>&copy; 2021 Notes & Tasks - Todos os direitos reservados</p>
      </div>
    </>
  )
}

export default Login;
