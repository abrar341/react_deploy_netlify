import React from 'react'
import projects from '../projects'

export const Projects = () => {
    return (
        <section name='projects' id="why">
            <h2>Projects</h2>
            <h3 className="text-orange subheader">my works</h3>
            <div className="reasons center">
                {
                    projects.map((project) => (
                        <div key={project.name} className="reason">
                            <div className="number">01</div>
                            <h3>{project.name}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor enim in maiores nobis!
                                Aliquam blanditiis facilis illum iushref laborum magnam nostrum tempora temporibus? Autem consequuntur
                                iure porro. Aspernatur, explicabo.</p>
                            <h4 className=" text-orange project_detail">Features</h4>
                            {
                                project.features.map((feature) => (
                                    <h5 key={feature}>{feature}</h5>
                                ))
                            }
                            <h4 className="text-orange project_detail">Tech Used</h4>
                            {
                                project.techs.map((tech) => (
                                    <h5 key={tech}>{tech}</h5>
                                ))
                            }

                            <a href="noopener noreferrer" target="_blank" className="btn btn-live">live demo</a>
                            <a href="noopener noreferrer" target="_blank" className="btn btn-live">Source Code</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
