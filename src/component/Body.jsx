import { useState , useEffect} from 'react';
import Blogs from './blogs';
import useFetch from './useFetch';


const Body = () => {
    // let posts = [
    //     {title: "what is Chemistry by the way?", content: 'some content and dummy text' , author: 'Walter White', id: 1},
    //     {title: 'on marlon brando not steve jobs !', content: 'some content and dummy text' , author: 'Walter Isaacson', id: 2},
    //     {title: 'how to fool anyone', content: 'some content and dummy text' , author: 'Ben Franklin', id: 3},
    //     {title: 'How to make a living', content: 'Some special content and exclusive!' , author: 'Walter White', id: 4},
    
    // ];
    
    // function handleDelete(id) {
    //     let newPosts = blogs.filter((post)=> post.id !== id );
    //     setData(newPosts);
    // }

    let { data: blogs, isPending , error } = useFetch('http://localhost:8000/blogs');
    

    return ( 
        <div className="main-container">
            {error && <div className='pending-div'>{ error }</div>}
            {isPending && <div className='pending-div'>Loading the content... :\</div>}
            {blogs && <Blogs title="All the posts" blogs={ blogs } />}
            {blogs && <Blogs title="walter's Exclusive!" blogs={ blogs.filter(post => post.author === 'Walter White') } />}
        </div>
     );
}
 
export default Body;