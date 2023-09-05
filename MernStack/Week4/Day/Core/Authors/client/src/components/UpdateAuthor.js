import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

const UpdateAuthor =  (props) => {

    const [newAuthor,setNewAuthor] = useState("")
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch the author's current information when the component mounts
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then((res) => {
                setNewAuthor(res.data.name); // Set the input field with the current author name
            })
            .catch((error) => {
                console.error("Error fetching author:", error);
            });
    }, [id]);






    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/api/authors/${id}`, {
            name: newAuthor
        })
        .then((res) => {
            
            console.log(res);
            console.log(res.data);
            navigate('/');
            
        })
        .catch((error) => {
            console.error("Error updating author:", error);
        });

        
    }   



    return(

        <div>
            <form onSubmit={submitHandler}>
                <label>Update </label> <br/>
                <input 
                onChange={(e)=> setNewAuthor(e.target.value)}
                type="text"
                value={newAuthor}  />
                <input type="submit" value="update" />
            </form>
        </div>

    )
}

export default UpdateAuthor