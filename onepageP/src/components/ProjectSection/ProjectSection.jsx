import React from 'react';
import style from "./ProjectSection.module.scss";
import SectionImg from '../../assets/img/pcHeader.jpg';
import flowerTest from '../../assets/img/flowertest.jpg';
import flower02 from '../../assets/img/flower02.jpg';
import flower03 from '../../assets/img/flower03.jpg';


export function ProjectSection() {
  // Defining an array of image URLs
  const imageUrls = [SectionImg, flowerTest, flower02, flower03];

  return (
      <div className={style.galleryContainer}>
          <div className={style.imageGrid}>
              {imageUrls.map((imageUrl, index) => (
                  <div key={index} className={style.gridItem}>
                      <img src={imageUrl} alt={`Image ${index + 1}`} className={style.image} />
                      <div className={style.overlay}>
                          <div>
                              <h2 className={style.overlayText}>Name</h2>
                              <p className={style.descText}>Description text</p>
                              {index === 3 && <a href="#" className={style.seeMoreLink}>Visit Coffee By James</a>}

                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};
