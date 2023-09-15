const blogs = ({ title, blogs , handleDelete }) => {
    return ( 
        <>
        <h2>{ title }</h2>
        {blogs.map((post)=>{ return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <button onClick={ () => handleDelete(post.id) }>Delete</button>
                </div>
            ) })}
        </>
     );
}
 
export default blogs;