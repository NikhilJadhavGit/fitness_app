import Brand from '../customComponents/brand/brand';
import './navbar.css'
import brand from '../../assets/661baee0692ba43565d10bbc_Black.svg'
import Navtools from '../customComponents/navtools/navtools';

const Navbar =  ()=>{
    return (
        <container className="components-navbar-container">
            <Brand image={brand}/>
            <Navtools/>
        </container>
    );
}

export default Navbar;