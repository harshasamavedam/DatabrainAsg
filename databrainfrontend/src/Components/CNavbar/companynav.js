import { FaUserCheck, FaUserAltSlash } from "react-icons/fa";
import Userlogdetails from '../Context/Context'
import {Link} from 'react-router-dom'
import './navstyle.css'
function Cnav(){
   return  <Userlogdetails.Consumer>
        { value=>{
            const {islogin}=value
    return <nav className='bac'>
        <img src='https://www.logolynx.com/images/logolynx/12/129bd9d828ff3ecebc4c5b681cd93802.jpeg' className='log'/>
        <Link to='Home'>Home</Link>
        <Link to='products'>Products</Link>
        {islogin?
        <div>
            <p>Hello</p><FaUserCheck className="Shared"/></div>:<FaUserAltSlash className='notshared'/>}
        </nav>
}}</Userlogdetails.Consumer>
}

export default Cnav