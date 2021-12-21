import React, { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Perfil.css';

let user = {};

function Perfil() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [descripition, setDescription] = useState('')
  const history = useNavigate()
  
  useEffect(() => {
    user = JSON.parse(localStorage.getItem('user'))
  },[])

  function handleClick() {
    const objeto = { email, name, descripition };
    const string = JSON.stringify(objeto)
    localStorage.setItem('user', string)
    history('/perfil')
  }

  return(
    <>
      <header>
        <nav>
          <ul>
            <li className="logo">Notes & Tasks</li>
            <li className="email">{ user && user.email } </li>
            <li className="nome">{ user && user.name }</li>
            <li
            className="profile"
            >
            </li>
          </ul>
        </nav>
      </header>
      <h1
      className="page-title"
      > Informações do perfil </h1>
      <div
      id="profile"
      > 
        <div
        className="grid"
        >
          <div
          className="icon"
          >
            <FaUserCircle
            size="130px"
            color="222"
            />
            <h3
            id="desc-user"
            >
              {user && user.descripition}</h3>
          </div>
          <div
          className="infos"
          >
            <h3
            id="email-user"
            >
              {user && user.email}
            </h3>
            <h3
            id="nome-user"
            >
              {user && user.name}
            </h3>
            <Link
            to="/"
            >
            <button
            className="btn-exit"
            > 
            Sair
            </button>
             </Link>
          </div>
          <div
          className="change"
          >
            <h2>Mudar configurações </h2>
            <form>
              <input
              placeholder="Mudar nome de usuario"
              type="text"
              value={ name }
              className="config1"
              onChange={ (event) =>  setName(event.target.value)}
              />
              <br/>
              <input
              placeholder="Mudar email de usuario"
              type="text"
              value={ email }
              className="config2"
              onChange={ (event) =>  setEmail(event.target.value)}
              />
              <br/>
              <input
              placeholder="Adicionar descrição ao perfil"
              type="text"
              value={ descripition }
              className="config3"
              onChange={ (event) =>  setDescription(event.target.value)}
              />
              <br/>
              <buton
              type="button"
              onClick={ handleClick }
              >
                Mudar configurações
              </buton>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Perfil;