import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>We cannot find the page you asked for</p>
            <Link to="/">Home Page</Link>
        </div>
    )
}

export default NotFound;