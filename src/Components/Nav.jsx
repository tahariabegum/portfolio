import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav () {
    return (
        <div className = 'navbar'>
           
            <Link to = '/'> 
                <div className = 'links'> Home </div> 
            </Link>

            <Link to = '/aboutme'> 
                <div className = 'links'>  About Me </div>
            </Link>

            <Link to = '/projects'> 
                <div className = 'links'> Projects </div> 
            </Link>
        </div>
    )
}