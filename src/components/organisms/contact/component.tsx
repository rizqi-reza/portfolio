import * as emailjs from 'emailjs-com';
import ISection, { ISocialLink, ISubSection } from 'interface/isection';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
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
      <Container>
        <div className="contact-content">
          <Row>
            <Col md={{ offset: 1, span: 5 }} sm={6}>
              <div className="single-contact-box">
                <div className="contact-form">
                  <Form>
                    <Row>
                      <Col sm={6} xs={12}>
                        <Form.Group>
                          <Form.Control
                            id="name"
                            type="text"
                            placeholder="Name*"
                            name="name"
                            aria-label="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6} xs={12}>
                        <Form.Group>
                          <Form.Control
                            id="email"
                            type="email"
                            placeholder="Email*"
                            name="email"
                            aria-label="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            aria-label="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            as="textarea"
                            rows={8}
                            id="comment"
                            type="textarea"
                            placeholder="Message"
                            name="comment"
                            aria-label="comment"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Button
                          className="single-contact-btn"
                          type="submit"
                          disabled={loading}
                          onClick={handleSubmit}
                        >
                          {loading ? 'Loading...' : 'Submit'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={{ offset: 1, span: 5 }} sm={6}>
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
                          {item.title.toLowerCase() === 'website' ? (
                            <p>
                              <a href={item.description} aria-label={`${item.title}-link`}>
                                {item.description}
                              </a>
                            </p>
                          ) : (
                            <p>
                              <a
                                href={`mailto:${item.description}`}
                                aria-label={`${item.title}-link`}
                              >
                                {item.description}
                              </a>
                            </p>
                          )}
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

export default ContactComponent;
