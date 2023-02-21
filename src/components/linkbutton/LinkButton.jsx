import { Link } from 'react-router-dom';
import './linkbutton.css';

function LinkButton() {
    return (
        <>
            <Link to='About'><button data-aos="fade-up"  data-aos-offset="0" className='next-button'>Find out more</button></Link>
        </>
    )
}

export default LinkButton;