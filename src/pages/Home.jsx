import React from "react";
import Hero from "../Components/Hero";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
import ContactCards from "../Components/Contact";
import Education from "../Components/Education";
import GitHubLeetCodeWidget from "../Components/GitHubLeetCodeWidget";
function Home() {
    return(
        <div>
            <Hero/>
            <Project/>
            <Skills/>
            <Education/>
            <GitHubLeetCodeWidget/>
            <ContactCards/>
        </div>
    )
}
export default Home;