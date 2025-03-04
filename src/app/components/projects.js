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
        
        const videos = await fetchProjectVideos() || [];
        const filteredData = filterData(data, videos);
        setProjects(filteredData);
        setFound(true);
    };

    const fetchProjectVideos = async () => {
        const response = await fetch('/api/professional-videos');
        const data = await response.json();
        console.log('Data in fetchProjectVideos:', data)
        return data.message;
    }

    const filterData = (repos, videos) => {
        const filtered = [];
        let winnieUrl = '';
        let journalUrl = '';

        for (let video of videos) {
            if (video.key === 'winnie') {
                winnieUrl = video.url || '';
            } else if (video.key === 'journal') {
                journalUrl = video.url || '';
            }
        };

        const repoMapping = {
            'blog-app': 'Journal'
        }

        repos.filter(repo => {
            if (repoMapping[repo.name]) {
                filtered.push({
                    name: `${repoMapping[repo.name]}, Full-Stack Software Engineer`,
                    description: repo.description + ' A powerful and feature-rich full-stack blogging application, designed for seamless user interactions, and community building.',
                    url: repo.html_url,
                    videoSrc: journalUrl,
                    link: 'https://journal-mvp-a5bfc416f691.herokuapp.com/'
                })
            }
        });
        filtered.push({
            name: 'Winnie, Backend Engineer',
            description: 'A quick look at some work I did at Winnie, focusing on how we captured and processed child care center data. It walks through the state data sources we pulled from, shows dev tools in action, and highlights the specific elements I targeted to extract key information with scrapers I automated to run monthly.',
            videoSrc: winnieUrl,
            link: 'https://winnie.com/'
        })
        return filtered;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectInfo}>
                {projects.map((repo, index) => (
                    <div className={styles.projectDetails} key={index}>
                        <div>
                            <h3 className={styles.projectName}><a className={styles.repoNameLink} target='_blank' href={repo.link}>{repo.name}</a></h3>
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