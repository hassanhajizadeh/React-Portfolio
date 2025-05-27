import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Item = ({ name, desc , demo_url,github_url='https://github.com/hassanhajizadeh'}) => {
  return (
    <div className="border border-horizontal">
      <div className="item">
        <h2>{name}</h2>
        <div className="desc">
          <p>{desc}</p>
          <div className="icons">
            <a href={github_url}><FontAwesomeIcon icon={faGithub} size="2xl" className='github'/></a>
            {demo_url&&<a href={demo_url}>
                <div className="demo">
                    Demo
                </div>
            </a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
