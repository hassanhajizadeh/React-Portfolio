import React from 'react'
import Item from './Item'
import { projects_data } from './projects-data'
const Projects = () => {
  return (
    <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className="project-list">
            {projects_data.map((project_data)=>{
                return <Item {...project_data} key={project_data.id}></Item>
            })}
        </div>
        <h4>To see more projects, check out <a href="https://github.com/hassanhajizadeh">my Github</a>.</h4>
        <hr />
        <hr />
    </section>
  )
}

export default Projects