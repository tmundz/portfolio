"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Rust</li>
          <li>C</li>
          <li>Python</li>
          <li>Golang</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Grant MacEwan University, Canada</li>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "tools",
      content: (
        <ul className="list-disc pl-2">
          <li>Git</li>
          <li>Linux</li>
          <li>OpenCV</li>
          <li>Docker</li>
          <li>Testing</li>
          <li>Debugging</li>
        </ul>
      ),
    },
  ];
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <div>
          <Image src="/images/about-image.png" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a Software Developer passionate about low-level development,
            including but not limited to systems, embedded systems, and driver
            development. I'm also interested in full-stack development while
            focusing on optimization and security. My extensive skill set
            encompasses languages like C, Rust, Python, Golang, SQL, Java, C#,
            JavaScript, as well as proficiency in technologies like OpenCV,
            HTML, CSS, and Git. I understand the significance of debugging and
            unit testing in the software development process. I'm a
            self-motivated, quick learner, always ready to expand my skill set.
            As a team player, I'm eager to collaborate on creating and working
            on excellent new tools and applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab == "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
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
