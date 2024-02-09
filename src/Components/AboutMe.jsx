import './AboutMe.css'


export default function AboutMe() {
    return (
        <div className = 'about-me'>
            <div className = 'myname'>
                <div className = 'first'> 
                    T A H A R I A 
                </div>
                <br/> 
                <div>
                    B E G U M
                </div>
            </div>
            <div className = 'links'>
                <div>
                    <a href = '/education'> Education </a> |
                </div>
                <div>
                    <a href = '/workhistory'> Work History </a> | 
                </div>
                <div>
                    <a href = '/skills'> Skills </a>
                </div>
            </div>
            
        </div>

       
    )
}