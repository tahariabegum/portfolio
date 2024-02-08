import profilePic from './profilepic.jpg'
import {useNavigate} from 'react-router-dom'
import resume from './Taharia.pdf'
import './Home.css'


export default function Home () {
    
    const navigate = useNavigate()

    return (
        <div className = 'home-page'>
            <img src = {profilePic} alt = '' />

            <div className = 'intro-content'>
                <h3 className='intro'> Hi, I'm Taharia Begum! </h3>
                
                <p> I am an aspiring full-stack developer. </p>
                
                <div className = 'buttons'> 
                    <button className = 'home-buttons'>
                        <a href = 'https://www.linkedin.com/in/taharia-begum/'> LinkedIn  </a>
                    </button>
                    <button className = 'home-buttons'> 
                        <a href = 'https://github.com/tahariabegum'> GitHub </a>
                    </button>
                    <button className = 'home-buttons'> 
                        <a href = {resume}> Resume </a>
                    </button>
                </div> 
            </div>
        </div>
    )
}