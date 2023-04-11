import ModalContext from '../context/modalContext';
import {useContext} from 'react';
import "./Task.css";
interface typeTask {
    name : string,
}

function Task(props : typeTask) {
    const {tasks, setTasks} = useContext(ModalContext);

    function removeSelf(){
        var index = tasks.indexOf(props.name);
        if (index !== -1) {
            tasks.splice(index, 1);
            console.log(tasks)
        }
        setTasks(() => tasks.concat())
    }

    return (
        <div className="taskBody">
            <div className="taskBox">{props.name}</div>
            <button onClick={removeSelf}>Concluir</button>
        </div>
    );
}

export default Task;