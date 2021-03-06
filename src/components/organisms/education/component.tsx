import ISection, { ISubSection } from 'interface/isection';
import { Markup } from 'interweave';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
  dataSource: ISection;
}

export const EducationComponent = (props: IProps) => {
  const { dataSource } = props;
  const totalColumn = dataSource.subSections ? dataSource.subSections.length : 0;
  return (
    <section id={dataSource.key} className="education">
      <div className="section-heading text-center">
        <h2>{dataSource.title}</h2>
      </div>
      <Container>
        <div className="education-horizontal-timeline">
          {dataSource.subSections && (
            <Row>
              {dataSource.subSections.map((item: ISubSection, index: number) => (
                <Col sm={12 / totalColumn} key={`${item.title}-${index}`}>
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>{item.title}</h2>
                      <h3>
                        <Markup content={item.subTitle} />
                      </h3>
                    </div>
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true" />
                      <span className="single-timeline-horizontal" />
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">{item.heading}</h4>
                        <h5>{item.subHeading}</h5>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};

export default EducationComponent;
