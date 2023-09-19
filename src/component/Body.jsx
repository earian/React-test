import { useState , useEffect} from 'react';
import Blogs from './blogs';
import useFetch from './useFetch';
import AuthorsList from './AuthorsList';


const Body = () => {

    const [filter, setFilter] = useState(null);
    let { data: blogs, isPending , error } = useFetch('http://localhost:8000/blogs');
    
    const filterBlogs = (e) => {
        let currentAuthor = e.target.dataset.author;
        let authorsParagraph = document.querySelectorAll('.authors-cont p');
        if(filter == currentAuthor) {
            authorsParagraph.forEach(p => p.style.backgroundColor = 'transparent');
            setFilter(null);
            return
        }
        authorsParagraph.forEach(p => p.style.backgroundColor = 'transparent');
        e.target.style.backgroundColor = 'rgb(26, 88, 110)';
        setFilter(currentAuthor);
    };

    return ( 
        <div className="main-container">
            {error && <div className='pending-div'>{ error }</div>}
            {isPending && <div className='pending-div'>Loading the content... :\</div>}
            {blogs && <Blogs title="Latest Posts" blogs={ blogs.slice(blogs.length - 5) } />}
            {<AuthorsList data={ { blogs } } handleFilter={ filterBlogs } />}
            {filter && <Blogs title={`${filter}'s Exclusive !`} blogs={ blogs.filter(post => post.author === filter) } />}
        </div>
     );
}
 
export default Body;