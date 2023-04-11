import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ModalContext from './context/modalContext';

export default function RoutesApp() {
    const [openModal, setOpen] = useState<boolean>(false);
    const [tasks, setTasks] = useState([]);

    return (
        <BrowserRouter>
            <ModalContext.Provider value={{openModal, setOpen, tasks, setTasks}}>
                <Routes>
                    <Route path="/" element={<App/>}/>
                </Routes>
            </ModalContext.Provider>
        </BrowserRouter>
    )
}
