import ISection from 'interface/isection';
import { Markup } from 'interweave';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { isSupportWebp } from 'utils/webp';

interface IProps {
  dataSource: ISection;
}

export const MainBannerComponent = (props: IProps) => {
  const { dataSource } = props;
  const image = dataSource?.image ? dataSource?.image[0] : undefined;
  const bannerImage = image ? (isSupportWebp() ? image.webpUrl : image.url) : '';
  return (
    <section
      id={dataSource.key}
      className="welcome-hero"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <div className="header-text">
              <h2>
                <Markup content={dataSource.heading} />
              </h2>
              <p>{dataSource.description}</p>
              <a
                href={dataSource.mainLink}
                download={true}
                className="btn-download"
                aria-label="download-link"
                rel="noreferrer"
              >
                download resume
              </a>
              <br />
              <div data-in="fadeInDown" data-out="fadeOutUp">
                <a
                  href="#section-2"
                  className="btn-scroll-down smooth-menu"
                  aria-label="scroll-down"
                >
                  <i className="fas fa-chevron-down" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainBannerComponent;
