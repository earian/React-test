import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [author, setAuthor] = useState('Walter White');
    let [isPending, setIsPending] = useState(false);
    const historyHook = useHistory();
    
    function handleSubmit(e){
        e.preventDefault();
        const blog = { title , content , author };
        setIsPending(true);
        
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blog),
        }).then(res => {
            setIsPending(false);
            setTitle('');
            setContent('');
            setAuthor('Walter White');
            historyHook.push('/');
        })
    }

    return (
        <div className="create-blog-main-cont">
            <h3>Create Your Blog Post Here</h3>
            <form className="create-blog-form-cont" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Content:</label>
                <textarea
                required
                rows='20'
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Walter White">Walter White</option>
                    <option value="Walter Isaacson">Walter Isaacson</option>
                    <option value="Ben Franklin">Ben Franklin</option>
                    <option value="Arian">Arian</option>
                    <option value="Albert Camus">Albert Camus</option>
                    <option value="Victor Hugo">Victor Hugo</option>
                    <option value="Nassim Taleb">Nassim Taleb</option>
                </select>
                {!isPending && <input type="submit" value="Sumbit" />}
                {isPending && <input type="submit" value="Sumbiting..." disabled/>}

            </form>
            
        </div>
    )
}

export default CreateBlog;