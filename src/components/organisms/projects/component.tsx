import ISection, { IImage } from 'interface/isection';
import React from 'react';

interface IProps {
  dataSource: ISection;
}

export const ProjectsComponent = (props: IProps) => {
  const { dataSource } = props;
  const totalData = dataSource.image ? dataSource.image.length : 0;
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
              {dataSource.image && (
                <div className="row">
                  {dataSource.image.map((image: IImage, index: number) => (
                    <div className={`col-sm-${12 / totalData}`} key={`${image.title}-${index}`}>
                      <div className="item">
                        <img src={image.url} alt={image.imageAlt} />
                        <div className="isotope-overlay">
                          <a href="#">{image.title}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
