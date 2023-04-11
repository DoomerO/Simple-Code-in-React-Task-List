import { useContext, useState } from "react";
import ModalContext from "../context/modalContext";
import "./Modal.css";

export default function Modal() {
    const {openModal, setOpen} = useContext(ModalContext);
    const [nameTask, setName] = useState("");
    const {tasks, setTasks} = useContext(ModalContext);
    let id = 0;
    function close() {
        setOpen(false);
    }

    function add() {
        if (nameTask != "") {
            setTasks(() => tasks.concat(nameTask))
        }
        console.log(tasks)
    }

    return(
        <>
            <div className="background">
                <div className="container">
                    <div className="closeBtn">
                        <button onClick={close}>X</button>
                    </div>
                    <div className="title">
                        <h2>Incluir Tarefas</h2>
                    </div>
                    <div className="body">
                        <p>O que deseja incluir em suas tarefas?</p>
                        <input type="text" onChange={e => setName(e.target.value)} placeholder="Digite aqui..."></input>
                    </div>
                    <div className="footer">
                        <button onClick={add}>Incluir</button>
                    </div>
                </div>
            </div>
        </>
    )
}