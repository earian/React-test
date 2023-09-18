import { Link } from 'react-router-dom';

const blogs = ({ title, blogs }) => {
    return ( 
        <>
        <h2>{ title }</h2>
        {blogs.map((post)=>{ return (
                <div key={post.id}>
                    <Link to={`/blogs/${post.id}`}><h2>{post.title}</h2></Link>
                    <p>Written by {post.author}</p>
                </div>
            ) })}
        </>
     );
}
 
export default blogs;