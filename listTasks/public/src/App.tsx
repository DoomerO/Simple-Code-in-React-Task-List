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
       <p>App Tasks Version WEB </p>
      <button onClick={()=>{setOpen(true);}}>Abrir modal</button>
      {openModal && <Modal/>}
      {listTasks}
    </div>
  )
}

export default App
