import ISection, { ISocialLink, ISubSection } from 'interface/isection';
import Image from 'react-webp-image';
import React from 'react';

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
      <br />
      <br />
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="single-about-txt">
                <h3>{dataSource.heading}</h3>
                <p>{dataSource.description}</p>
                {dataSource.subSections && (
                  <div className="row">
                    {dataSource.subSections.map((item: ISubSection, index: number) => (
                      <div className="col-sm-6" key={`${item.title}-${index}`}>
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
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5 col-xs-12">
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
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default AboutComponent;
