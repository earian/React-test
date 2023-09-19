import { Link } from 'react-router-dom';

const blogs = ({ title, blogs }) => {
    let revBlogs = [];
    blogs.forEach(blog => revBlogs.unshift(blog))
    return ( 
        <>
        <h2>{ title }</h2>
        {revBlogs.map((post)=>{ return (
                <div key={post.id}>
                    <Link to={`/blogs/${post.id}`}><h2>{post.title}</h2></Link>
                    <p>Written by {post.author}</p>
                </div>
            ) })}
        </>
     );
}
 
export default blogs;