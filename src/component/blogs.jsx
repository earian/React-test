const blogs = ({ title, blogs }) => {
    return ( 
        <>
        <h2>{ title }</h2>
        {blogs.map((post)=>{ return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                </div>
            ) })}
        </>
     );
}
 
export default blogs;