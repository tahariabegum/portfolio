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
                    <div className = 'content-container'>
                        <img src = {booknook} className = 'booknook-pic' />
                        <div className = 'title-cont'>
                            <div className = 'booknook-name'>
                                B O O K 
                                
                            </div>
                            <div className = 'booknook-name'>
                                N O O K 
                            </div> 
                        </div>
                    </div>
                    
                    <p className = 'book-ptag'> 
                        Third project for PerScholas utilizing MERN stack and Google Book API  
                    </p>
                    </a>
                </div>
            </div>
        </div>
    )
}