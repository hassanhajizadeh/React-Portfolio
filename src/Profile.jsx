import React from "react";
import profile_img from "../src/assets/images/profile2-2.jpg";

const Profile = () => {
    return (
        <header className="hero">
            <div className="wrapper">
                <div className="middle">
                    <div className="border border-vertical">
                        <img
                            className="profile-img"
                            src={profile_img}
                            width="300px"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <hr />
            <h1>
                Hello , I'm Hassan ,<br />a Front-End
                <br /> Developer
            </h1>
            <section className="about-me" id="about">
                <hr />
                <hr />
                <h2>About Me</h2>
                <section id="about">
                    <p>
                        I’m Hassan, a passionate front-end developer from Tehran
                        with a degree in Computer Science (GPA: 3.8/4.0). I
                        specialize in building dynamic, responsive web apps
                        using HTML, CSS, Tailwind, JavaScript, and React. I’ve
                        completed several projects, showcased in the Projects
                        section and on <a
                            href="https://github.com/hassanhajizadeh"
                            target="_blank"
                        >
                            my_GitHub
                        </a>
                        .
                    </p>
                    <p>
                        I'm also experienced with Git, Python, C++, NumPy, and
                        Pandas, and currently expanding my skills with
                        TypeScript, Next.js, and Zustand. I love learning and
                        building innovative web experiences.
                    </p>
                    <p>Let’s <a href="#contact">connect</a> and collaborate!</p>
                </section>
            </section>
        </header>
    );
};

export default Profile;
