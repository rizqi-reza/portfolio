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
                <Col md={3} key={`data-${index}`}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.url}
                      style={{ padding: 20, paddingTop: 10, paddingBottom: 0, maxHeight: 110 }}
                    />
                    <Card.Body>
                      <Card.Text style={{ textAlign: 'center' }}>{item.description}</Card.Text>
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

// <div className="barWrapper" key={`${item.title}-${index}`}>
//   <span className="progressText">{item.title}</span>
//   <div className="single-progress-txt">
//     <div className="progress ">
//       <div
//         className="progress-bar"
//         role="progressbar"
//         aria-valuenow={item.value}
//         aria-valuemin={0}
//         aria-valuemax={100}
//       />
//     </div>
//     <h3>{item.value}%</h3>
//   </div>
// </div>

export default SkillsComponent;
