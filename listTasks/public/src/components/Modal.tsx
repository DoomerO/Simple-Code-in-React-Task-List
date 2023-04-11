import { useContext, useState } from "react";
import ModalContext from "../context/modalContext";

export default function Modal() {
    const {openModal, setOpen} = useContext(ModalContext);
    const [nameTask, setName] = useState("");
    const {tasks, setTasks} = useContext(ModalContext);

    function close() {
        setOpen(false);
    }

    function add() {
        setTasks((task : null) => tasks.concat(nameTask))
        console.log(tasks)
    }

    return(
        <>
            <div className="BackGround">
                <div className="Container">
                    <div className="closeBtn">
                            <button onClick={close}>X</button>
                    </div>
                    <div className="Title">
                        <h2>Incluir Tarefas</h2>
                    </div>
                    <div className="Body">
                        <p>Corpo do Modal</p>
                        <input type="text" onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="Footer">
                        <button onClick={close} id="cancelBtn">Cancelar</button>
                        <button onClick={add}>Incluir</button>
                    </div>
                </div>
            </div>
        </>
    )
}