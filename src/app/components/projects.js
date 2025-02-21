'use client';
import styles from './components.module.css';
import { useState, useEffect } from 'react';
import VideoPlayer from './video.js';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [found, setFound] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);
    
    const fetchProjects = async () => {
        const url = 'https://api.github.com/users/abrahamesparza/repos';
        const response = await fetch(url);
        const data = await response.json();

        if (!data) {
            setFound(false);
        }

        const filteredData = filterData(data);
        setProjects(filteredData);
        setFound(true);
    }

    const filterData = (repos) => {
        const filtered = [];
        const nameMapping = {
            'blog-app': 'Journal',
        }
        //sloppy atm since i took out two older repos
        //will refactor later to only show one repo
        //however, i am working on a new project so may
        //keep this to include that repo as soon as it's done.
        repos.filter(repo => {
            if (nameMapping[repo.name]) {
                filtered.push({
                    name: `${nameMapping[repo.name]}, Full-Stack Software Engineer`,
                    description: repo.description + ' A powerful and feature-rich full-stack blogging application, designed for seamless user interactions, content creation, and community building.',
                    url: repo.html_url,
                    videoSrc: `/videos/${nameMapping[repo.name]}.mp4`
                })
            }
        });
        filtered.push({
            name: 'Winnie, Backend Engineer',
            description: 'A quick look at the work I did at Winnie, focusing on how we captured and processed child care center data. It walks through the state data sources we pulled from, shows dev tools in action, and highlights the specific elements I targeted to extract key information with scrapers I automated to run monthly.',
            videoSrc: '/videos/Winnie.mp4'
        })
        return filtered;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectInfo}>
                {projects.map((repo, index) => (
                    <div className={styles.projectDetails} key={index}>
                        <div>
                            <h3 className={styles.projectName}>{repo.name}</h3>
                            <p className={styles.projectDescription}>{repo.description}</p>
                        </div>
                        <div>
                            <VideoPlayer videoSrc={repo.videoSrc}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}