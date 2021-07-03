import { useState } from "react";
import {useHistory } from 'react-router-dom'


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authour, setAuthour] = useState('Emmanuel');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, authour}
        
        setIsLoading(true);

        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added successfully');
            setIsLoading(false);
            history.push('/');
        })
        
    }
    return (
        <div className="content create">
            <h2>Add a New Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog authour:</label>
        <select
          value={authour}
          onChange={(e) => setAuthour(e.target.value)}
        >
          <option value="mario">Emmanuel</option>
          <option value="yoshi">Kachi</option>
        </select>
            {!isLoading && <button>Add Blog</button>}
            {isLoading && <button disabled>Adiing Blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;