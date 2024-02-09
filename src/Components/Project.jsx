import './Project.css'

import booknook from './booknook.png'

export default function Project () {
    return (
        <div>
            <div className = 'project'> 
                P R O J E C T S  
            </div>
            <div>
                <div className = 'booknook-cont'>
                    <a href = '/booknook'> 
                    <img src = {booknook} className = 'booknook-pic' />
                    
                        <div className = 'booknook'>
                            B O O K 
                        </div>
                        <div className = 'booknook'>
                            N O O K 
                        </div>
                    </a>
                    <p> Third project for PerScholas utilizing MERN stack and Google Book API  </p>
                </div>
            </div>
        </div>
    )
}