import ISection, { ISocialLink, ISubSection } from 'interface/isection';
import Image from 'react-webp-image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
  dataSource: ISection;
}

export const AboutComponent = (props: IProps) => {
  const { dataSource } = props;
  const profileImage = dataSource?.image ? dataSource?.image[0]?.url : '';
  const profileImageWebp = dataSource?.image ? dataSource?.image[0]?.webpUrl : '';
  return (
    <section id={dataSource.key} className="about">
      <div className="section-heading text-center">
        <h2>{dataSource.title}</h2>
      </div>
      <Container>
        <div className="about-content">
          <Row>
            <Col sm={6} xs={12}>
              <div className="single-about-txt">
                <h3>{dataSource.heading}</h3>
                <p>{dataSource.description}</p>
                {dataSource.subSections && (
                  <Row>
                    {dataSource.subSections.map((item: ISubSection, index: number) => (
                      <Col sm={6} key={`${item.title}-${index}`}>
                        <div className="single-about-add-info">
                          <h3>{item.title}</h3>
                          {item.title.toLowerCase() === 'website' ? (
                            <p>
                              <a href={item.description} aria-label={`${item.title}-link`}>
                                {item.description}
                              </a>
                            </p>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </Col>
            <Col sm={{ offset: 1, span: 5 }} xs={12}>
              <div className="single-about-img">
                <Image
                  src={profileImage}
                  webp={profileImageWebp}
                  alt="profile_image"
                  width="100%"
                  height="100%"
                />
                {dataSource.socialLinks && (
                  <div className="about-list-icon">
                    <ul>
                      {dataSource.socialLinks.map((item: ISocialLink, index: number) => (
                        <li key={`about-social-${index}`}>
                          <a href={item.url} aria-label={`${item.url}-link`}>
                            <i className={item.icon} aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutComponent;
