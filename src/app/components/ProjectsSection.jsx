"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chess-Bot",
    description: "Experience the future of chess with our physical chessboard equipped with OpenCV technology. Make your move, and watch as the board autonomously responds, seamlessly moving the corresponding chess piece. This innovative blend of traditional gameplay and advanced computer vision creates a captivating and interactive chess experience.",
    image: "images/projects/chess.png",
    tag: ["All", "Robotics"],
    gitUrl: "https://github.com/tmundz/KingGizzard",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Multi-Level Feedback Queue Scheduler",
    description: "Develop a comprehensive task scheduler in Rust featuring a multilevel feedback queue system, concurrent AVL tree, and doubly linked list, all built from the ground up.",
    image: "images/projects/cpu.jpg",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/tmundz/task-scheduler",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Shell Application",
    description: "This is a school project and sadly I cannot showcase the source code publically. Developed in C, this straightforward shell application empowers users to navigate the file system effortlessly, execute commands, and harness essential features like piping, foreground and background processes, and redirection.",
    image: "images/projects/shell.jpg",
    tag: ["All", "Systems"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "I'm following a tutorial to construct a finance dashboard using the MERN stack and TypeScript. This project is a foundation for my upcoming project, an expense tracker. The dashboard is currently being developed, marking a key step in my ongoing learning journey.",
    image: "images/projects/finance.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tmundz/Finance",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Systems"
          isSelected={tag === "Systems"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Robotics"
          isSelected={tag === "Robotics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
