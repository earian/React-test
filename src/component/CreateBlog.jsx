import { useState } from "react";

const CreateBlog = () => {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [author, setAuthor] = useState('Walter White');


    return (
        <div className="create-blog-main-cont">
            <h3>Create your blog here</h3>
            <form className="create-blog-form-cont">
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
                </select>
            </form>
            <button>Add Your Post</button>
        </div>
    )
}

export default CreateBlog;