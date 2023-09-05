import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateAuthor =  (props) => {

    const [newAuthor,setNewAuthor] = useState("")

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/authors/",{
            name : newAuthor
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setNewAuthor("")
            navigate('/');
        })
    }



    return(

        <div>
            <form onSubmit={submitHandler}>
                <label>Add new author</label> <br/>
                <input 
                onChange={(e)=> setNewAuthor(e.target.value)}
                type="text"  />
                <input type="submit" />
            </form>
        </div>

    )
}

export default CreateAuthor