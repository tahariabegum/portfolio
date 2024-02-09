import './AboutMeLinks.css'

import perscholas from './perscholas.jpeg'
import wsu from './wsu.png'

export default function Education () {
    return (
        <div className = 'education-cont'> 
            <div className = 'education'> E D U C A T I O N </div>

            <div className = 'perscholas-cont'>
                <img className = 'edu-img' src = {perscholas} />
                    <div className = 'perscholas-edu'>
                        <h4 className = 'school-name'> P E R S C H O L A S </h4>
                        <p className = 'date'> October 2023 - February 2024 </p>
                        <p> Software Engineering </p>
                    </div>
            </div>

            <div className = 'wsu-cont'> 
                <img className = 'edu-img' src = {wsu}  />
                    <div className = 'wsu-edu'>
                        <div className = 'wsu-name'>
                            <h4 className = 'school-name'> W A Y N E </h4>
                            <h4 className = 'school-name'> S T A T E </h4>
                            <h4 className = 'school-name'> U N I V E R S I T Y </h4>
                        </div>
                        <p className = 'date'> August 2015 - December 2020 </p>
                        <p> Bachelors of Science in Public Health </p>
                    </div>
            </div>
        </div>
    )
}