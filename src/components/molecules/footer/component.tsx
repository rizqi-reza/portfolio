import React from 'react';

export const FooterComponent = (props: any) => {
  return (
    <footer id="footer-copyright" className="footer-copyright">
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <p>
            &copy; copyright Rizqi Reza Valhevi. design and developed by <a href="#">rizqi-reza</a>
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <i className="fa fa-angle-up " id="scroll-top" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
