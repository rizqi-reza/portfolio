import React from 'react';
import ISection from 'interface/isection';
import { Markup } from 'interweave';
import bannerImage from 'assets/images/banner/main-banner.jpg';

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                <Markup content={dataSource.heading} />
              </h2>
              <p>{dataSource.description}</p>
              <a href={dataSource.mainLink} download className="btn-download">
                download resume
              </a>
              <br></br>
              <a href={dataSource.mainLink} className="btn-scroll-down">
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBannerComponent;
