import React from 'react'
import skills from '../skills'

export const Skills = () => {
    return (
        <section name='skills' id="services">
            <h2>Skills</h2>
            <h3 className="text-orange subheader">my skills</h3>
            <div className="services-list">
                {
                    skills.map((skill) => (
                        <div key={skill} className="service">
                            <div className="content">
                                <h2>{skill}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
