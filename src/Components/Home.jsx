import profilePic from './profilepic.jpg'
import {useNavigate} from 'react-router-dom'
import './Home.css'


export default function Home () {
    
    const navigate = useNavigate()

    return (
        <div className = 'home-page'>
            <img src = {profilePic} alt = '' />
            <div className='intro'> Hi! I'm Taharia Begum! </div>
    
            <p> I am an aspiring full-stack developer. </p>

            <br/>
            
            <div className = 'buttons'> 
                <button className = 'home-buttons'>
                    <a href = 'https://www.linkedin.com/in/taharia-begum/'> LinkedIn  </a>
                </button>
                <button className = 'home-buttons'> GitHub </button>
                <button className = 'home-buttons'> Resume </button>
            </div> 
        </div>
    )
}