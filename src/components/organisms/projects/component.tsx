import ISection, { IImage } from 'interface/isection';
import Image from 'react-webp-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
  dataSource: ISection;
}

export const ProjectsComponent = (props: IProps) => {
  const { dataSource } = props;

  const card = (image: IImage, index: number) => (
    <Col sm={6} key={`${image.title}-${index}`}>
      <div className="item">
        <Image src={image.url} webp={image.webpUrl} alt={image.imageAlt} />
        <div className="isotope-overlay">
          <a href="#" aria-label="project-link">
            {image.title}
          </a>
          <p>{image.subTitle}</p>
        </div>
      </div>
    </Col>
  );

  const chunkProjects = (size: number, source: IImage[]) => {
    let data = [...source];
    let result: IImage[][] = [];

    while (data.length) {
      result.push(data.splice(0, size));
    }
    return result;
  };

  return (
    <section id={dataSource.key} className="projects">
      <div className="projects-details">
        <div className="section-heading text-center">
          <h2>{dataSource.title}</h2>
        </div>
        <Container>
          <div className="projects-content">
            <div className="isotope">
              <Container>
                {dataSource.image &&
                  chunkProjects(2, dataSource?.image)?.map((images: IImage[], index: number) => {
                    return (
                      <Row key={index}>{images?.map((image, index) => card(image, index))}</Row>
                    );
                  })}
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProjectsComponent;
