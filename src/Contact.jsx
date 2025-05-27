import React from 'react'

const Contact = ({setIsModalOpen}) => {
  return (
    <section className='contact' id='contact'>
        <h2>Contact</h2>
        <div className="contact-container">
            <div className="contact-list">
                <p><b>Tel :</b> <a href="tel:+989901372750">09901372750</a></p>
                <p><b>Email :</b> <a href="mailto:hhajizadeh44@gmail.com">hhajizadeh44@gmail.com</a></p>
                <p><b>Github :</b> <a href="https://github.com/hassanhajizadeh">My Github</a></p>
                <p><b>Address :</b> Tehran, Tehran, Iran</p>
            </div>
            <div className="resume-container">
                <div className="wrapper">
                    <div className="middle">
                        <div className="border border-horizontal">
                            <div className="resume">
                                <div onClick={()=>{setIsModalOpen(true)}}>Download Resume</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact