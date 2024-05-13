import React from 'react';
import style from "./ProjectSection.module.scss";
import SectionImg from '../../assets/img/pcHeader.jpg';
import flowerTest from '../../assets/img/flowertest.jpg';
import flower02 from '../../assets/img/flower02.jpg';
import CoffeeJames from '../../assets/img/Jamesimg.png';


export function ProjectSection() {
  // Defining an array of image URLs
  const imageUrls = [SectionImg, flowerTest, flower02, CoffeeJames];

// Defining arrays of names and descriptions
const names = ["Name 1", "Name 2", "Name 3", "Coffee By James"];
const descriptions = ["Description text 1", "Description text 2", "Description text 3", "First project. Online Coffee Store, with latest design updates overseen by the owner to enable seamless self-management of the webpage."];

return (
  <div className={style.galleryContainer}>
    <div className={style.imageGrid}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className={style.gridItem}>
          <img id="projects" src={imageUrl} alt={`Image ${index + 1}`} className={style.image} />
          <div className={style.overlay}>
            <div>
              <h2 className={style.overlayText}>{names[index]}</h2>
              <p className={style.descText}>{descriptions[index]}</p>
              {index === 3 && <a href="#" className={style.seeMoreLink}>Visit Coffee By James</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
