import ISection, { ISubSection } from 'interface/isection';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface IProps {
  dataSource: ISection;
}

export const SkillsComponent = (props: IProps) => {
  const { dataSource } = props;
  const source = dataSource.subSections ? dataSource.subSections : undefined;
  return (
    <section id={dataSource.key} className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>{dataSource.title}</h2>
        </div>
        <Container>
          <div className="single-skill-content">
            <Row>
              {source?.map((item: ISubSection, index: number) => (
                <Col lg={3} md={6} key={`data-${index}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.url}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                    <Card.Body style={{ textAlign: 'center' }}>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default SkillsComponent;
