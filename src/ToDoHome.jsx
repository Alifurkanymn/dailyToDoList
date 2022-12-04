import React, { useState } from 'react'
import FilledButton from './components/FilledButton'
import Input from './components/Input'
import ToDoItem from './components/ToDoItem'
import Checkbox from './components/Checkbox'
import './style/ToDoHome.scss'


function ToDoHome() {
    const[item,setItem] = useState({
        todo:"",    
    });
    const[list, setList] = useState([]);
    const[checkboxLength,setCheckboxLength]=useState(0)


    // Funcions

    const onFormSubmit = ((e) =>{
        e.preventDefault();
        if(item.todo !== ""){
            setList([...list, item])
        }
        document.getElementById("toDoInput").value="";
        setItem({...item, todo: ""});
    });
    const clearAll = () =>{
        setList([]);
    }

    const handleCheck = (e) =>{
        const target = e.target.checked
        if(target === true){
            setCheckboxLength(checkboxLength => checkboxLength + 1);
            e.target.nextSibling.children[0].className = "drawnText";
        }else{
            setCheckboxLength(checkboxLength => checkboxLength - 1);
            e.target.nextSibling.children[0].className = "";
        }
    }

    const handleText = (e) =>{
        var element = e.target.parentElement.parentElement.children[0].checked
        if(element === true){
            e.target.parentElement.parentElement.children[0].checked = false;
            setCheckboxLength(checkboxLength => checkboxLength - 1);
            e.target.className = ""
        }else{
            e.target.parentElement.parentElement.children[0].checked = true;
            setCheckboxLength(checkboxLength => checkboxLength + 1);
            e.target.className = "drawnText"
        }
    }



  return (
    <div className="Home__Content">
        <div className="Home__Content-toDo">
        <h1>Daily To Do List</h1>
            <form className="input__content" onSubmit={onFormSubmit}>
                <Input placeholder="Add new list item" onInput={e => setItem({...item, todo: e.target.value})}/>
                <FilledButton width="100px" height="50px" content="Add" />
            </form>
            <div className="Home__Content-toDoItems">
                {
                    list.map((item, key)=>{
                        return(
                            <div key={key} className="toDoItem__content"> 
                                <Checkbox onPress={handleCheck}/>
                                <ToDoItem onPress={handleText} content={item.todo} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="Home__Content-footer">
            <p>{checkboxLength ? checkboxLength : 0 } Item Selected</p>
            <button onClick={clearAll}>Clear All</button>
        </div>
    </div>
  )
}

export default ToDoHome