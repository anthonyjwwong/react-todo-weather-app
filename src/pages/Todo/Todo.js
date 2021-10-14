import React, { useState, useEffect } from 'react'
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import Note from '../../components/Note/Note';
import Alert from '../../components/Alert/Alert';
import { useHistory } from 'react-router-dom';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return [];
    }
}

function Todo() {
    const [todo, setTodo] = useState("")
    const [list, setList] = useState(getLocalStorage());
    const [alert, setAlert] = useState({ 
        show:false, 
        msg: '', 
        type: ''
    })

    let history = useHistory();

    function handleHome() {
        history.push("/");
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {id: new Date().getTime().toString(), todo}
        
        if(todo.length === 0) {
            handleAlert(true, "fail", "Please enter a valid todo")
        }
       
        if (todo.length > 0 && list.length === 0) {
            setList([newItem])
            console.log(list)
        } else if (todo.length > 0 && list.length > 0) {
            setList([
                ...list,
                newItem
            ])
            console.log(list)
        }
        setTodo("");
    }

    const handleAlert = (show=false, type="", msg="") => {
        setAlert({show, type, msg})
    }

    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }

    useEffect(()=> {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <div className="todo">
            <div className="todo_list">
                {alert.show && <Alert {...alert} removeAlert={handleAlert} />}
                <form className="todo_form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={todo} 
              
                        onChange={(e) => setTodo(e.target.value)}   
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>                
                </form>

                <div className="todo_note">
                    {list.map((item, index) => {
                        const {todo, id} = item;
                        return <Note 
                            id={id}
                            note={todo} 
                            key={id} 
                            removeItem={removeItem}    
                        />
                    })}
                
                </div>
                <button className="todo_home_button" onClick={handleHome}>
                    Home
                </button>
            </div>
                        
        </div>
    )
}

export default Todo
