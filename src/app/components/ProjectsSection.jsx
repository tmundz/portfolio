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
    title: "Practice Kernel",
    description: "I'm currently engaged in a project derived from a Udemy course focused on crafting a simple multithreaded kernel. This endeavour, implemented in both C and ASM, serves as a hands-on learning experience, providing a comprehensive understanding of kernel intricacies.",
    image: "images/projects/shell.jpg",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/tmundz/kernel_practice",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Linear Algebra ToolKit",
    description: "I'm developing a Linear Algebra ToolKit using C++. I am using this to create common Matrix methods such as subtracting, adding, and determinants.",
    image: "images/projects/matrix.jpg",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/tmundz/lat",
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
