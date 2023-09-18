import { Link } from "react-router-dom";

const Header = () => {

    
    return ( 
    <div className="main-header">
        <div className="logo">Blogs Basement</div>
        <nav>
            <ol>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </ol>
        </nav>
    </div>
     );
}
 
export default Header;