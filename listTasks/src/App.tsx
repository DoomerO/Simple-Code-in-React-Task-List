import { useContext, useEffect } from 'react'
import ModalContext from './context/modalContext';
import Modal from './components/Modal';
import Task from './components/Task';


function App() {

  const { openModal, setOpen } = useContext(ModalContext);
  const {tasks, setTasks} = useContext(ModalContext);
  const listTasks = tasks.map((task: string, index: null) => 
      <Task name={task} key={index}></Task>
  );

  return (
    <div className="App">
      <div className="main">
        <header>
          <h1>Gerenciador de Tarefas</h1>
        </header>
        <section className='bodyMain'>
          <p>
            Adicione tarefas clicando no botão e abrindo o popup de criação de tarefa.
          </p>
          <div id="btnDiv">
            <button id="addButton" onClick={()=>{setOpen(true);}}>Adicionar Tarefa</button>
          </div>
        </section>
      </div>
      <div className="Tasks">
        {listTasks}
      </div>
      {openModal && <Modal/>}
    </div>
  )
}

export default App
