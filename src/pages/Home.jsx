import React from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import ContactCards from "../components/Contact";
import Education from "../components/Education";
import GitHubLeetCodeWidget from "../components/GitHubLeetCodeWidget";
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