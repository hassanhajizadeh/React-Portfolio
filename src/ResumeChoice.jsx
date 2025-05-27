import React from 'react'

const ResumeChoice = () => {
  return (
    <div className='resume-choice'>
        <div className="msg">Choose the resume version you want to download</div>
        <div className="options">
            <a href="Resume - front end - English.pdf">English Resume</a>
            <a href="Resume - Front End - Persian.pdf">Persian Resume</a>
        </div>
    </div>
  )
}

export default ResumeChoice