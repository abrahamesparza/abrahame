'use client';
import styles from './components.module.css';
import { useState, useEffect } from 'react';

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
        console.log('data', filteredData)
    }

    const filterData = (repos) => {
        const filtered = [];
        const nameMapping = {
            'blog-app': 'Journal',
            'discover-literature': 'Literature Explorer',
            'Quote-Generator': 'Inspirational Quotes'
        }
        repos.filter(repo => {
            if (nameMapping[repo.name]) {
                filtered.push({
                    name: nameMapping[repo.name],
                    description: repo.description,
                    url: repo.html_url,
                })
            }
        })
        return filtered;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectInfo}>
                {projects.map((repo, index) => (
                    <div className={styles.projectDetails} key={index}>
                        <p className={styles.projectName}>{repo.name}</p>
                        <p className={styles.projectDescription}>{repo.description}</p>
                    </div>
                ))}
            </div>
            <h1>Video/gif of project here</h1>
        </div>
    )
}