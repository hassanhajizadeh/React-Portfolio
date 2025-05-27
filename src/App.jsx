import React, { useState } from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Modal from "./Modal";
import ResumeChoice from "./ResumeChoice";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            {isModalOpen && (
                <Modal
                    setIsModalOpen={setIsModalOpen}
                    component={<ResumeChoice />}
                />
            )}
            <Profile />
            <Skills />
            <Projects />
            <Contact setIsModalOpen={setIsModalOpen} />
            <Copyright />
        </>
    );
};

export default App;
