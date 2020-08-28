import ISection, { IImage } from 'interface/isection';
import React from 'react';

interface IProps {
  dataSource: ISection;
}

export const ProjectsComponent = (props: IProps) => {
  const { dataSource } = props;

  const card = (image: IImage, index: number) => (
    <div className="col-sm-6" key={`${image.title}-${index}`}>
      <div className="item">
        <img src={image.url} alt={image.imageAlt} />
        <div className="isotope-overlay">
          <a href="#">{image.title}</a>
          <p>{image.subTitle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id={dataSource.key} className="projects">
      <div className="projects-details">
        <div className="section-heading text-center">
          <h2>{dataSource.title}</h2>
        </div>
        <div className="container">
          <br />
          <br />
          <br />
          <div className="projects-content">
            <div className="isotope">
              {dataSource.image &&
                dataSource.image?.map((image: IImage, index: number) => {
                  if ((index + 1) % 2 == 0) {
                    return (
                      <div className="row" key={`${image.title}-${index}`}>
                        {card(image, index)}
                      </div>
                    );
                  } else {
                    return card(image, index);
                  }
                })}
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
