import ISection, { ISocialLink, ISubSection } from 'interface/isection';
import React from 'react';

interface IProps {
  dataSource: ISection;
}

export const ContactComponent = (props: IProps) => {
  const { dataSource } = props;
  return (
    <section id={dataSource.key} className="contact">
      <div className="section-heading text-center">
        <h2>{dataSource.title}</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name*"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email*"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={8}
                            id="comment"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <a className="contact-btn" href="#" role="button">
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>{dataSource.heading}</h3>
                    <p>{dataSource.description}</p>
                  </div>
                  {dataSource.subSections && (
                    <div className="contact-add-info">
                      {dataSource.subSections.map((item: ISubSection, index: number) => (
                        <div className="single-contact-add-info" key={`${item.title}-${index}`}>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {dataSource.socialLinks && (
                  <div className="hm-foot-icon">
                    <ul>
                      {dataSource.socialLinks.map((item: ISocialLink, index: number) => (
                        <li key={`contact-social-${index}`}>
                          <a href={item.url}>
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
    </section>
  );
};

export default ContactComponent;
