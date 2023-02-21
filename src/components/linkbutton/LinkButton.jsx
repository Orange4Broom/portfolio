import { Link } from 'react-router-dom';
import './linkbutton.css';

function LinkButton() {
    return (
        <>
            <button data-aos="fade-up"  data-aos-offset="0" className='next-button'><Link to='About'>Find out more</Link></button>
        </>
    )
}

export default LinkButton;