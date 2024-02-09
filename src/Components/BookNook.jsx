import './ProjectsLink.css'

export default function BookNook() {
    return ( 
        <div>
            <div className = 'booknook-title'>

                <div className = 'booknook'>
                    B O O K 
                </div>
                            
                <div className = 'booknook'>
                    N O O K 
                </div>

            </div>
            <div className = 'booknook-container'>
                <div className = 'booknook-content'>
                    <p className = 'booknook-content'>
                        The Book Nook was my third and final project for PerScholas, which was a combination of everything I learned during the course. 
                        The requirements for the third project was to utilize MERN stack to build a webpage. 
                        Utilizing the foundation laid by my second project, I enhanced and expanded the capabilities by integrating the MERN stack.  
                    </p>
                </div>

                <div className = 'idea-cont'>
                    <div className = 'subtitles'>
                        <div> T H E </div> <div > I D E A </div>
                    </div>
                    <p> 
                        My love and passion for reading and wanting to journal my literary journey gave me the idea to create BookNook. 
                        Given the opportunity to create any webpage I jumped at the idea of creating a platform that would allow me to design a blog documenting the books I have read.
                        This project not only aligns with my personal interests but also showcases the skills and knowledge I have acquired over the course of this program. 
                    </p>
                </div>

                <div className = 'tech-cont'>
                    <div className = 'subtitles'>
                        <div> T E C H N O L O G I E S </div> <div> U S E D </div>
                    </div>
                        <p> 
                            This webpage is created using React.js for frontend
                            <br/>
                            Node.js and Express.js were used for the backend
                            <br/>
                            The Google Book API is used to fetch books by title, author or ISBN 
                            <br/>
                            Data is stored in MongoDB with Mongoose database
                        </p>
                    
                </div>

                <div className = 'booknook-button'>  
                    <a href = 'https://booknook-frontend.onrender.com/profile'> Check Out the Book Nook </a> 
                </div>
            </div>
        </div>
    )
}