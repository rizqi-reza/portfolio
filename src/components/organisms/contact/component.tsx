// tslint:disable: jsx-no-lambda
import * as emailjs from 'emailjs-com';
import ISection, { ISocialLink, ISubSection } from 'interface/isection';
import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';

interface IProps {
  dataSource: ISection;
}

export const ContactComponent = (props: IProps) => {
  const { dataSource } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_email: email,
      from_name: name,
      message_html: message,
      subject,
    };
    const templateID = 'template_TILnWElP';
    const userID = 'user_SLv6yXZ8hip8WVe30qqin';

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    promise.then(() => {
      emailjs.send('gmail', templateID, templateParams, userID);
      resetForm();
      setLoading(false);
      alert('Your email has successfully delivered!');
    });
  };

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
                  <Form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <Input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name*"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email*"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <Input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            name="subject"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <Input
                            type="textarea"
                            className="form-control"
                            rows={8}
                            id="comment"
                            placeholder="Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <Button
                          className="single-contact-btn"
                          type="submit"
                          disabled={loading}
                          onClick={handleSubmit}
                        >
                          {loading ? 'Loading...' : 'Submit'}
                        </Button>
                      </div>
                    </div>
                  </Form>
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
