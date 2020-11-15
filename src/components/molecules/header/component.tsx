import { INavigation } from 'interface/ipage';
import React from 'react';

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
                <i className="fa fa-bars" />
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
                  <li className="smooth-menu active" />
                  {dataSource.map((item: INavigation, index: number) => (
                    <li className="smooth-menu" key={`menu-${index}`}>
                      <a href={`#${item.url}`} aria-label={`${item.title}-link`}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="clearfix" />
    </header>
  );
};

export default HeaderComponent;
