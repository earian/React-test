import { useState , useEffect} from 'react';
import Blogs from './blogs';


const Body = () => {
    // let posts = [
    //     {title: "what is Chemistry by the way?", content: 'some content and dummy text' , author: 'Walter White', id: 1},
    //     {title: 'on marlon brando not steve jobs !', content: 'some content and dummy text' , author: 'Walter Isaacson', id: 2},
    //     {title: 'how to fool anyone', content: 'some content and dummy text' , author: 'Ben Franklin', id: 3},
    //     {title: 'How to make a living', content: 'Some special content and exclusive!' , author: 'Walter White', id: 4},
    
    // ];
    let [blogs, setPosts] = useState(null);
    let [isPending , setIsPending] = useState(true);
    let [error , setError] = useState(null);

    function handleDelete(id) {
        let newPosts = blogs.filter((post)=> post.id !== id );
        setPosts(newPosts);
    }

    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(res.ok) return res.json()
                else throw Error(`Couldn't fetch the data right now`)
            })
            .then(data => {
                setPosts(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
        }, 3000);
        
    }, [])
    

    return ( 
        <div className="main-container">
            {error && <div className='pending-div'>{ error }</div>}
            {isPending && <div className='pending-div'>Loading the content... :\</div>}
            {blogs && <Blogs title="All the posts" blogs={ blogs } handleDelete={ handleDelete } />}
            {blogs && <Blogs title="walter's Exclusive!" blogs={ blogs.filter(post => post.author === 'Walter White') } handleDelete={ handleDelete } />}
        </div>
     );
}
 
export default Body;