import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Header from "../components/Header";
import Project from "../components/Project";
import IMAGES from "../assets/img/Images";
import '../styles/ProjectsGallery.css';
import Footer from "../components/Footer";

export default function ProjectsGallery() {
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        navigate(`/projects/${project.id}`, { state: (project)});
      };

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await fetch('projects.json');
            const data = await response.json();
            setProjects(data);
          } catch (error) {
            console.error('Error fetching projects:', error);
          }
        };
    
        fetchProjects();
      }, []);

    return (
        <>
        <Header showImg={true} />
        <div className="container projects-gallery">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {projects.map(project => {
                    const image = new URL(project.image, import.meta.url).href;
                    return (
                      <div className="col mb-4" key={project.id}>
                        <Link to={`/projects/${project.id}`} state={{project}}>
                            <Project img={image} technologies={project.technologies} cardTitle={project.cardTitle}/>
                        </Link>
                      </div>
                    )
                })}
            </div>
        </div>
        <Footer />
        </>
    );
}