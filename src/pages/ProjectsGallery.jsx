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
        // Use the navigate function to navigate to the project page with the dynamic project id
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
            <div className="row" style={{ display: 'flex' }}>
                {projects.map(project => {
                    const image = new URL(project.image, import.meta.url).href;
                    return (
                        <Link  to={`/projects/${project.id}`} state={{project}} key={project.id} className="col-md-6 mb-6" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Project img={image} technologies={project.technologies} cardTitle={project.cardTitle}/>
                        </Link>
                    )
                })}
            </div>
        </div>
        <Footer />
        </>
    );
}