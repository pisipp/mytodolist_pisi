
import React, {useState} from "react";
import "./style.css";

const Form = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <>
        <div className="container">
        <label className="form_label">
          제목
          <input 
          className='add_form' 
          type="text"
          value={title}
          onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label label className="form_label">
          내용
          <input 
          className='add_form' 
          type="text" 
          value={desc}
          onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </label>
        <button
         className='add_btn'
         onClick={() => {
            if(title !== "" && desc !== ""){
              addTodo(title, desc);
              setTitle("");
              setDesc("");
          }}}
          >
          추가
        </button>
      </div>
      </>
    );
}

export default Form;