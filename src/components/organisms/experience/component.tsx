import ISection, { ISubSection } from 'interface/isection';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
  dataSource: ISection;
}

export const ExperienceComponent = (props: IProps) => {
  const { dataSource } = props;
  return (
    <section id={dataSource.key} className="experience">
      <div className="section-heading text-center">
        <h2>{dataSource.title}</h2>
      </div>
      <Container>
        <div className="experience-content">
          <div className="main-timeline">
            {dataSource.subSections && (
              <ul>
                {dataSource.subSections.map((item: ISubSection, index: number) => {
                  if (index % 2 === 0) {
                    return (
                      <li key={`${item.title}-${index}`}>
                        <div className="single-timeline-box fix">
                          <Row>
                            <Col md={5}>
                              <div className="experience-time text-right">
                                <h2>{item.title}</h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </Col>
                            <Col md={{ offset: 1, span: 5 }}>
                              <div className="timeline">
                                <div className="timeline-content">
                                  <h4 className="title">
                                    <span>
                                      <i className="fa fa-circle" aria-hidden="true" />
                                    </span>
                                    {item.heading}
                                  </h4>
                                  <h5>{item.subHeading}</h5>
                                  <p className="description">{item.description}</p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li key={`${item.title}-${index}`}>
                        <div className="single-timeline-box fix">
                          <Row>
                            <Col md={{ offset: 1, span: 5 }} className="experience-time-responsive">
                              <div className="experience-time">
                                <h2>
                                  <span>
                                    <i className="fa fa-circle" aria-hidden="true" />
                                  </span>
                                  {item.title}
                                </h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </Col>
                            <Col md={5}>
                              <div className="timeline">
                                <div className="timeline-content text-right">
                                  <h4 className="title">{item.heading}</h4>
                                  <h5>{item.subHeading}</h5>
                                  <p className="description">{item.description}</p>
                                </div>
                              </div>
                            </Col>
                            <Col md={{ offset: 1, span: 5 }} className="experience-time-main">
                              <div className="experience-time">
                                <h2>
                                  <span>
                                    <i className="fa fa-circle" aria-hidden="true" />
                                  </span>
                                  {item.title}
                                </h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceComponent;
