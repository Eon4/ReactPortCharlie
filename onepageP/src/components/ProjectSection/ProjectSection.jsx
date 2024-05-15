import style from "./ProjectSection.module.scss";
import UnderTheMoon from '../../assets/img/projectImages/UnderTheMoon.png';
import NewsPage from '../../assets/img/projectImages/NewsPage.png';
import ElApp from '../../assets/img/projectImages/Elprisen02.png';
import WallyWood from '../../assets/img/projectImages/WallyWood.png';
import WeatherApp from '../../assets/img/projectImages/weatherApp.png';
import CoffeeJames from '../../assets/img/Jamesimg.png';
import cbjVid from '../../assets/Media/cbjVid.mp4';
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
      { url: cbjVid, link: "https://example.com/coffee-by-james", type: 'video' },
      { url: WeatherApp, link: "https://example.com/weather-app", type: 'image' },
      { url: UnderTheMoon, link: "https://example.com/under-the-moon", type: 'image' },
      { url: WallyWood, link: "https://example.com/wally-wood", type: 'image' },
      { url: ElApp, link: "https://example.com/el-app", type: 'image' },
      { url: NewsPage, link: "https://example.com/news-page", type: 'image' },
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
      "First project. Online Coffee Store, with latest design updates by the owner to enable seamless self-management of the webpage.",
      "Weather app project created with HTML, CSS and JS. Works with API call from",
      "Description text 2",
      "Description text 3",
      "App showing prices for current electricity prices. Created with HTML, CSS and JS. Works with API call from www.elprisenligenu.dk",
      "Description text 5"
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