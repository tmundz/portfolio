"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "lang. Tools",
    id: "lang. tools",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Rust</li>
        <li>Python</li>
        <li>Java</li>
        <li>Go</li>
        <li>Bash</li>
        <li>SQL</li>
        <li>Next.js/React</li>
      </ul>
    ),
  },
  {
    title: "dev. Tools",
    id: "dev. tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>Docker</li>
        <li>GDB</li>
        <li>Visual Studio</li>
        <li>Arm Cortex MCUs</li>
        <li>Hyper-V/KVM</li>
        <li>Arduino/ESP32</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Debugging</li>
        <li>Unit Testing</li>
        <li>Algorithm Design</li>
        <li>Problem Solving</li>
        <li>Documenting</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><p>BSc. in Computing Science | Grant MacEwan University, Edmonton, AB</p></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
    const [tab, setTab] = useState("tools");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="images/about-image.png" alt="" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    I am a software developer interested in embedded systems, full-stack development, and systems programming. 
                    My expertise revolves around crafting efficient low-level programs, 
                    and I take immense joy in building applications that users find both valuable and enjoyable.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("lang. tools")}
                            active={tab === "lang. tools"}
                        >
                            {" "}
                            Lang. Tools{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("dev. tools")}
                            active={tab === "dev. tools"}
                        >
                            {" "}
                            Dev. Tools{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
