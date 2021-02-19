import { INavigation } from 'interface/ipage';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

interface IProps {
  title: string;
  dataSource: INavigation[];
}

export const HeaderComponent = (props: IProps) => {
  const { title, dataSource } = props;

  return (
    <header className="top-area">
      <div className="header-area">
        <Navbar bg="light" expand="md" fixed="top" className="bootsnav no-background">
          <Container>
            <Navbar.Toggle aria-controls="navbar-menu" />
            <Navbar.Brand href="#section-1">{title}</Navbar.Brand>
            {dataSource && (
              <Navbar.Collapse id="navbar-menu" className="menu-ui-design">
                <Scrollspy
                  componentTag="div"
                  items={[
                    'section-1',
                    'section-2',
                    'section-3',
                    'section-4',
                    'section-5',
                    'section-6',
                    'section-7',
                  ]}
                  currentClassName="active"
                  className="ml-auto navbar-nav"
                  offset={-100}
                >
                  <Nav.Link className="smooth-menu" href="#section-1" style={{ display: 'none' }}>
                    Home
                  </Nav.Link>
                  {dataSource.map((item: INavigation, index: number) => (
                    <Nav.Link
                      key={`menu-${index}`}
                      className="smooth-menu"
                      href={`#${item.url}`}
                      aria-label={`${item.title}-link`}
                    >
                      {item.title}
                    </Nav.Link>
                  ))}
                </Scrollspy>
              </Navbar.Collapse>
            )}
          </Container>
        </Navbar>
      </div>
      <div className="clearfix" />
    </header>
  );
};

export default HeaderComponent;
