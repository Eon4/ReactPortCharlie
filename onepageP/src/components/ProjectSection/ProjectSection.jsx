import React from 'react';
import style from "./ProjectSection.module.scss";
import UnderTheMoon from '../../assets/img/projectImages/UnderTheMoon.png';
import NewsPage from '../../assets/img/projectImages/NewsPage.png';
import ElApp from '../../assets/img/projectImages/Elprisen02.png';
import WallyWood from '../../assets/img/projectImages/WallyWood.png';
import WeatherApp from '../../assets/img/projectImages/weatherApp.png';
import CoffeeJames from '../../assets/img/Jamesimg.png';


export function ProjectSection() {
    // Defining an array of image URLs and corresponding links
    const images = [
      { url: WeatherApp, link: "https://example.com/weather-app" },
      { url: UnderTheMoon, link: "https://example.com/under-the-moon" },
      { url: WallyWood, link: "https://example.com/wally-wood" },
      { url: ElApp, link: "https://example.com/el-app" },
      { url: NewsPage, link: "https://example.com/news-page" },
      { url: CoffeeJames, link: "https://example.com/coffee-by-james" }
    ];
  
    // Defining arrays of names and descriptions
    const names = ["Project Weather App", "Project Under The Moon", "Project WallyWood", "Project Elprisen.nu", "Project INGN News Page", "Coffee By James"];
    const descriptions = [
      "Weather app project created with HTML, CSS and JS. Works with an API call from www.elprisenligenu.dk",
      "Description text 2",
      "Description text 3",
      "Description text 4",
      "Description text 5",
      "First project. Online Coffee Store, with latest design updates by the owner to enable seamless self-management of the webpage."
    ];
  
    return (
        <div className={style.galleryContainer}>
          <div className={style.imageGrid}>
            {images.map((image, index) => (
              <div key={index} className={style.gridItem}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img src={image.url} alt={names[index]} className={style.image} />
                </a>
                <div className={style.overlay}>
                  <div>
                    <h2 className={style.overlayText}>{names[index]}</h2>
                    <p className={style.descText}>{descriptions[index]}</p>
                    <a href={image.link} className={style.seeMoreLink} target="_blank" rel="noopener noreferrer">
                      Visit {names[index]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  