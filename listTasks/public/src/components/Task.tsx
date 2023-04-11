import ModalContext from '../context/modalContext';
import {useContext} from 'react';

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
    }

    return (
        <div>{props.name} <button onClick={removeSelf}>X</button></div>
    );
}

export default Task;