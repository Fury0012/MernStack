import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateNote = () => {

    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(true)

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(Title,Content,isImportant)
        const objToBeSent = {
            Title,
            Content,
            isImportant
        }
        axios.post("http://localhost:5000/api/notes", objToBeSent)
        .then(res=> {
            navigate("/")

        })
    }




    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                title : <input type="string" onChange={(e)=>{setTitle(e.target.value)}}  value={Title} /> <br /> <br /> 
                Content  <textarea type="string" onChange={(e)=>{setContent(e.target.value)}}  value={Content}></textarea> <br /> <br />
                isImportant : 
                <input type="checkbox" onChange={(e)=> { setIsImportant(e.target.checked)}} /> <br /> <br />
                <button>create</button>
            </form>
        </div>
    )
}


export default CreateNote