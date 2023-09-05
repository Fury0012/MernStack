    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom';
    import { useParams } from 'react-router-dom';

    const Authors = (props) => {
    const [authors, setAuthors] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/authors')
        .then((response) => {
            console.log('Response Data:', response.data);
            setAuthors(response.data);
        })
        .catch((err) => {
            console.log('Error:', err);
        });
    }, []);


        const deleteAuthor = (id) => {
                {
            axios
                .delete(`http://localhost:5000/api/authors/${id}`)
                .then((res) => {
                console.log('Author deleted:', res.data);
                // Remove the deleted author from the local state
                setAuthors(authors.filter((author) => author._id !== id));
                })
                .catch((error) => {
                console.error('Error deleting author:', error);
                });
            }
        };

    return (
        <div>
            <Link to="/create">Create new author</Link>
        <table>
            <thead>
            <tr>
                <th>Author</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {authors.map((author, index) => (
                <tr key={index}>
                <td>{author.name}</td>
                <td>
                    <Link to={`/authors/update/${author._id}`}>📝</Link>
                    <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        
        </div>
    );
    };

    export default Authors;
