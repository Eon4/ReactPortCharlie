import style from "./ProjectSection.module.scss";
import UnderTheMoon from '../../assets/img/projectImages/UnderTheMoon.png';
import NewsPage from '../../assets/img/projectImages/NewsPage.png';
import ElApp from '../../assets/img/projectImages/Elprisen02.png';
import WallyWood from '../../assets/img/projectImages/WallyWood.png';
import WeatherApp from '../../assets/img/projectImages/weatherApp.png';
import CoffeeJames from '../../assets/img/Jamesimg.png';
import cbjVid from '../../assets/Media/CBJ01Vid.mp4';
import { useRef, useEffect } from 'react';


export function ProjectSection() {
    const videoRef = useRef(null);

    // Set playback rate when the component mounts
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; 
        }
    }, []);

    // Defining an array of image URLs and corresponding links
    const items = [
      { url: cbjVid, link: "https://www.coffeebyjames.dk/", type: 'video' },
      { url: WeatherApp, link: "https://github.com/Eon4/weather-app-test", type: 'image' },
      { url: UnderTheMoon, link: "https://github.com/Eon4/UnderTheMoon/tree/main/UnderTheMoonProject/src", type: 'image' },
      { url: WallyWood, link: "https://github.com/Eon4/WallyWoodProject/tree/main/wood/src", type: 'image' },
      { url: ElApp, link: "https://github.com/Eon4/ElpriserNu", type: 'image' },
      { url: NewsPage, link: "hhttps://github.com/Eon4/INGN-Project/tree/main/ingnProject/src", type: 'image' },
  ];

  // Defining arrays of names and descriptions
  const names = [
      "Coffee By James", 
      "Project Weather App", 
      "Project Under The Moon", 
      "Project WallyWood", 
      "Project Elprisen.nu", 
      "Project INGN News Page"
  ];

  const descriptions = [
    "Online Coffee Store, selling ground coffee and tools for coffee lovers. Crafted using HTML, CSS, and JS, with specific modifications made by the owner to simplify product design for personal ease.",
    "Weather app project created with HTML, CSS, and JS. Utilizes API calls from openweathermap.org.",
    "Under The Moon project for a hair salon. Single-page application created in React.",
    "Wallywood is an online shop for movie posters, where customers can browse and find posters from a categorized list. Crafted using React, Express, and MySQL as the database.",
    "App displaying current electricity prices. Created with HTML, CSS, and JS. Utilizes API calls from www.elprisenligenu.dk.",
    "A simple news webpage crafted in React, using a headless CMS with HyGraph. Users can sort news by categories. Includes admin login for updating and deleting news articles."
];


  return (
    <div className={style.galleryContainer}>
        <div id='projects' className={style.imageGrid}>
            {items.map((item, index) => (
                <div key={index} className={style.gridItem}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.type === 'image' ? (
                            <img src={item.url} alt={names[index]} className={style.image} />
                        ) : (
                            <video ref={videoRef} src={item.url} autoPlay loop muted className={style.image}>
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </a>
                    <div className={style.overlay}>
                        <div>
                            <h2 className={style.overlayText}>{names[index]}</h2>
                            <p className={style.descText}>{descriptions[index]}</p>
                            <a href={item.link} className={style.seeMoreLink} target="_blank" rel="noopener noreferrer">
                                {names[index] === "Coffee By James" ? "Visit Coffee By James" : "See project on GitHub"}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}