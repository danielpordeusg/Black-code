import React, { useState, useEffect }from 'react';
import '../styles/TelaPrincipal.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

let isDisabledNote = true;
let isDisabledTask = true;
let isDisabledList = true;
let isDisabledLink = true;

let notesArray = [];
let taskArray = [];
let listArray = [];
let linkArray = [];
let user = {};

function TelaPrincipal() {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [task, setTask] = useState('')
  const [list, setList] = useState('')
  const [link, setLink] = useState('')
  const [linkTitle, setLinkTitle] = useState('')

  useEffect(() => {
    if(title && notes) {
      isDisabledNote = false;
    }
  }, [title, notes])

  useEffect(() => {
    if(task) {
      isDisabledTask = false;
    }
  }, [task])

  useEffect(() => {
    if(list) {
      isDisabledList = false;
    }
  }, [list])

  useEffect(() => {
    if(link && linkTitle) {
      isDisabledLink = false;
    }
  }, [link, linkTitle])

  useEffect(() => {
    if(localStorage.getItem('note')) {
      notesArray = JSON.parse(localStorage.getItem('note'));
    } else {
      notesArray = [];
    }
    if(localStorage.getItem('tasks')) {
      taskArray = JSON.parse(localStorage.getItem('tasks'));
    } else {
      taskArray = [];
    }
    if(localStorage.getItem('lists')) {
      listArray = JSON.parse(localStorage.getItem('lists'));
    } else {
      listArray = [];
    }
    if(localStorage.getItem('links')) {
      linkArray = JSON.parse(localStorage.getItem('links'));
    } else {
      linkArray = [];
    }
    user = JSON.parse(localStorage.getItem('user'))
  },[])

  function addNoteClick() {
    const objeto = {title, notes}
    notesArray.push(objeto)
    const titles = JSON.stringify(notesArray)
    localStorage.setItem('note', titles)
    setTitle('')
    setNotes('')
  }

  function addTaskClick() {
    taskArray.push(task)
    const taskString = JSON.stringify(taskArray)
    localStorage.setItem('tasks', taskString)
    setTask('')
  }

  function addListClick() {
    listArray.push(list)
    const listString = JSON.stringify(listArray)
    localStorage.setItem('lists', listString)
    setList('')
  }

  function addLinkClick() {
    const objeto = {link, linkTitle}
    linkArray.push(objeto)
    const linkString = JSON.stringify(linkArray)
    localStorage.setItem('links', linkString)
    setLink('')
    setLinkTitle('')
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
              <Link
              to="/perfil"
              > 
              <FaUserCircle/> 
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
      id="add-things"
      >
        <h1
        className="tittle"
        >
          O que você quer adicionar ?
        </h1>
        <div
        className="grid"
        >
          <div
          className="add-note"
          >
            <h3
            className="title-add"
            >
              Anotações de texto:
            </h3>
            <input 
            value={ title }
            type="text"
            className="input-note"
            placeholder="Titulo"
            onChange={ (event) => setTitle(event.target.value)}
            />
            <textarea
            value={ notes }
            placeholder="Anotações"
            onChange={ (event) => setNotes(event.target.value)}
            />
            <button
            className="btn-add-note"
            type="button"
            disabled={ isDisabledNote }
            onClick={ addNoteClick }
            >
              Adicionar
            </button>
          </div>
          <div
          className="add-task"
          >
            <h3
            className="title-add"
            >
              CheckList:
            </h3>
            <input
            value={ task }
            type="text"
            className="add-task"
            placeholder="Nome da tarefa"
            onChange={(event) => setTask(event.target.value)}
            />
            <button
            className="btn-add-task"
            type="button"
            onClick={ addTaskClick }
            disabled={ isDisabledTask }
            >
              Adicionar
            </button>
          </div>
          <div
          className="add-ordered-list"
          >
            <h3
            className="title-add"
            >
              Lista numerada:
            </h3>
            <input
            value={ list }
            type="text"
            className="input-list"
            placeholder="Nome da tarefa"
            onChange={(event) => setList(event.target.value) }
            />
            <button
            className="btn-add-task"
            type="button"
            onClick={ addListClick }
            disabled={ isDisabledList }
            >
              Adicionar
            </button>
          </div>
          <div
          className="add-link"
          >
            <h3
            className="title-add"
            >
              Link:
            </h3>
            <input
            value={ link }
            type="text"
            className="input-link"
            placeholder="Link"
            onChange={(event) => setLink(event.target.value) }
            />
            <input
            value={ linkTitle }
            type="text"
            className="input-link"
            placeholder="Titulo"
            onChange={(event) => setLinkTitle(event.target.value) }
            />
            <button
            className="btn-add-task"
            type="button"
            onClick={ addLinkClick }
            disabled={ isDisabledLink }
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="title"> o que você adicionou: </h1>
        <div className="grid">
          <div className="addNote">
            <h3 className="titleAdd"> Anotações de texto </h3>
            {notesArray.map((note) => (
              <div key={note.title}>
                <h4> { note.title }</h4>
                <p> { note.notes } </p>
              </div>
            ))}
          </div>
          <div className="addTask">
            <h3 className="titleAdd"> CheckList </h3>
            <div
            className="tasks"
            >
              {taskArray.map((task) => (
                  <label key={task}>
                    <input
                    type="checkbox"
                    name={task}
                    />
                    {task}
                  </label>
              ))}
            </div>
          </div>
          <div className="addList">
            <h3 className="titleAdd"> Lista numerada </h3>
            <ol>
              {listArray.map((list) => (
                <li key={list}>
                  {list}
                </li>
              ))}
            </ol>
          </div>
          <div className="addLink">
            <h3 className="titleAdd"> Links: </h3>
            {linkArray.map((link) => (
              <a
              key={link.linkTitle}
              href={link.link}
              >
                {link.linkTitle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TelaPrincipal;
