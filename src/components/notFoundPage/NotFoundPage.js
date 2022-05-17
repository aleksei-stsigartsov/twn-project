import './notFoundPage.css';
import { Link } from 'react-router-dom';


function NotFoundPage() {
    return (
        <div className='inl-center'>
            <h1>This page doesn't exists</h1>
            <Link to='/'>Go Home</Link>
        </div>
    );

}
export default NotFoundPage;