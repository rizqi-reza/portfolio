import ISection, { ISubSection } from 'interface/isection';
import React from 'react';

interface IProps {
  dataSource: ISection;
}

export const SkillsComponent = (props: IProps) => {
  const { dataSource } = props;
  const source = dataSource.subSections ? dataSource.subSections : undefined;
  const totalData = source ? source.length : 0;
  const dataFirst = source ? source.slice(0, totalData / 2) : [];
  const dataSecond = source ? source.slice(totalData / 2) : [];
  const data = [dataFirst, dataSecond];
  return (
    <section id={dataSource.key} className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>{dataSource.title}</h2>
        </div>
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            {data.map((mainItem: any, index: number) => (
              <div className="col-md-6" key={`data-${index}`}>
                <div className="single-skill-content">
                  {mainItem &&
                    mainItem.map((item: ISubSection, index: number) => (
                      <div className="barWrapper" key={`${item.title}-${index}`}>
                        <span className="progressText">{item.title}</span>
                        <div className="single-progress-txt">
                          <div className="progress ">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={item.value}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                          <h3>{item.value}%</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
