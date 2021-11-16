import { INavigation } from 'interface/ipage';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                <Nav className="ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                  {dataSource.map((item: INavigation, index: number) => (
                    <Nav.Link
                      className="smooth-menu"
                      key={`menu-${index}`}
                      href={`#${item.url}`}
                      aria-label={`${item.title}-link`}
                    >
                      {item.title}
                    </Nav.Link>
                  ))}
                </Nav>
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
