"use client";
import React, { useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const AboutSection = () => {
    const  [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
                <Image src="/images/about-image.png" alt="Image" width={500} height={500} />
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                      I'm a Software Developer passionate about low-level development, including but not limited to
                      systems, embedded systems, and driver development. I'm also interested in full-stack development while focusing on optimization and security.
                      My extensive skill set encompasses languages like C, Rust, Python, Golang, SQL, Java, C#, JavaScript,
                      as well as proficiency in technologies like OpenCV, HTML, CSS, and Git.
                      I understand the significance of debugging and unit testing in the software development process.
                      I'm a self-motivated, quick learner, always ready to expand my skill set. 
                      As a team player, I'm eager to collaborate on creating and working on excellent new tools and applications.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>
                            Skills 
                        </TabButton>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
                            Skills
                        </span>
                        <span>Education</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
