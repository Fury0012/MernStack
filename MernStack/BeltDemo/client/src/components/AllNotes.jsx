import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const AllNotes = () => {
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/notes")
            .then(res => {
                console.log(res.data)
                setAllNotes(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const justDelete = (noteId) => {
        axios.delete(`http://localhost:5000/api/notes/${noteId}`);
        
        const filteredNotes = allNotes.filter((eachNote) => {
            if (eachNote._id === noteId) {
                return false;
            } else {
                return true;
            }
        });
        setAllNotes(filteredNotes);
    };

    return (
        <div>
            {allNotes.map((oneNote) => {
                return (
                    <div 
                    className="note"
                    style={{backgroundColor:'#F6A405', width:'30%', textAlign:'center', border:'solid', marginBottom:'10px'}}
                    key={oneNote._id}>
                        <h3>
                            {oneNote.isImportant ? "📌" : "Not Complete"} {oneNote.Title}
                        </h3>
                        <p style={{ wordWrap: "break-word" }}>{oneNote.Content}</p>
                        <h3>{oneNote.isImportant}</h3>
                        <h3>{oneNote.createdAt}</h3>
                        <Link to={`notes/${oneNote._id}/edit`}>Edit</Link>&nbsp;&nbsp;&nbsp;
                        <button
                            onClick={() => justDelete(oneNote._id)}
                            className="btn btn-danger"  
                            style={{ boxShadow: '7px 2px 3px black', border: 'solid 1px' }} 
                        >Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default AllNotes;
