import ISection, { ISubSection } from 'interface/isection';
import React from 'react';

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
      <div className="container">
        <div className="experience-content">
          <br />
          <br />
          <br />
          <div className="main-timeline">
            {dataSource.subSections && (
              <ul>
                {dataSource.subSections.map((item: ISubSection, index: number) => {
                  if (index % 2 === 0) {
                    return (
                      <li key={`${item.title}-${index}`}>
                        <div className="single-timeline-box fix">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="experience-time text-right">
                                <h2>{item.title}</h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </div>
                            <div className="col-md-offset-1 col-md-5">
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
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    return (
                      <li key={`${item.title}-${index}`}>
                        <div className="single-timeline-box fix">
                          <div className="row">
                            <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                              <div className="experience-time">
                                <h2>
                                  <span>
                                    <i className="fa fa-circle" aria-hidden="true" />
                                  </span>
                                  {item.title}
                                </h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="timeline">
                                <div className="timeline-content text-right">
                                  <h4 className="title">{item.heading}</h4>
                                  <h5>{item.subHeading}</h5>
                                  <p className="description">{item.description}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-offset-1 col-md-5 experience-time-main">
                              <div className="experience-time">
                                <h2>
                                  <span>
                                    <i className="fa fa-circle" aria-hidden="true" />
                                  </span>
                                  {item.title}
                                </h2>
                                <h3>{item.subTitle}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </div>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
