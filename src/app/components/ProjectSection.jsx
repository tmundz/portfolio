"use client";
import react, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectData = [
  {
    id: 1,
    title: "Chess Bot",
    desc: "A chess bot that allows human players to engage in a unique, hands-on chess experience. In this setup, players move physical chess pieces, while the bot responds by using motors to place a magnet on its pieces, facilitating its chosen moves.",
    image: "/images/chess.png",
    giturl: "https://github.com/tmundz/KingGizzard",
    tag: ["All", "Robots"],
    prevurl: "/",
  },
  {
    id: 2,
    title: "CPU Task Scheduling",
    desc: "This project aims to implement a concurrent multilevel feedback queue scheduler, utilizing a concurrent AVL tree as the backbone data structure. Each AVL tree node holds a priority rank, and the tree efficiently manages tasks, which can be individual tasks or a doubly linked lists of tasks with the same priority. The scheduler provides dynamic task management, priority-based scheduling, and preemption, making it suitable for real-time systems and operating environments where tasks with varying priorities need to be efficiently executed. The concurrent nature of the AVL tree ensures thread safety and enables parallel scheduling of tasks across different priority levels. IN DEVELOPMENT!!!",
    image: "/images/test.png",
    giturl: "https://github.com/tmundz/task-scheduler",
    tag: ["All", "Sys"],
    prevurl: "/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const hadnleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag),
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={hadnleTagChange}
          name="All"
          isSelected={tag == "All"}
        />
        <ProjectTag
          onClick={hadnleTagChange}
          name="Sys"
          isSelected={tag == "Sys"}
        />
        <ProjectTag
          onClick={hadnleTagChange}
          name="Robots"
          isSelected={tag == "Robots"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.desc}
            img={project.image}
            gitUrl={project.giturl}
            previewUrl={project.prevurl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
