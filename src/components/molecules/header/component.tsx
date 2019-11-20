import React from 'react';
import { INavigation } from 'interface/ipage';

interface IProps {
  title: string;
  dataSource: INavigation[];
}

export const HeaderComponent = (props: IProps) => {
  const { title, dataSource } = props;
  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="#section-1">
                {title}
              </a>
            </div>

            {dataSource && (
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li className="smooth-menu active"></li>
                  {dataSource.map((item: INavigation, index: number) => (
                    <li className="smooth-menu" key={`menu-${index}`}>
                      <a href={`#${item.url}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="clearfix"></div>
    </header>
  );
};

export default HeaderComponent;
