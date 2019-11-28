import bannerImage from 'assets/images/banner/main-banner.jpg';
import ISection from 'interface/isection';
import { Markup } from 'interweave';
import React from 'react';

interface IProps {
  dataSource: ISection;
}

export const MainBannerComponent = (props: IProps) => {
  const { dataSource } = props;
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
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text smooth-menu">
              <h2>
                <Markup content={dataSource.heading} />
              </h2>
              <p>{dataSource.description}</p>
              <a href={dataSource.mainLink} download={true} className="btn-download">
                download resume
              </a>
              <br />
              <ul data-in="fadeInDown" data-out="fadeOutUp">
                <li className="smooth-menu">
                  <a href="#section-2" className="btn-scroll-down">
                    <i className="fas fa-chevron-down" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBannerComponent;
