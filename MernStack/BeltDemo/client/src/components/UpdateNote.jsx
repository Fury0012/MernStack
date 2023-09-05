import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateNote = () => {
    const { id } = useParams();
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/notes/${id}`)
            .then((res) => {
                const note = res.data;
                setTitle(note.Title);
                setContent(note.Content);
                setIsImportant(note.isImportant);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const updatedNote = {
            Title,
            Content,
            isImportant,
        };

        axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                Title: <input type="text" onChange={(e) => setTitle(e.target.value)} value={Title} /> <br /> <br />
                Content: <textarea onChange={(e) => setContent(e.target.value)} value={Content}></textarea> <br /> <br />
                isImportant:
                <input type="checkbox" onChange={(e) => setIsImportant(e.target.checked)} checked={isImportant} /> <br /> <br />
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateNote;
