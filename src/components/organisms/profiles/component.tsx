import ISection from "interface/isection";
import React from "react";

interface IProps {
  sectionID?: number;
  dataSource: ISection;
  title?: string;
}

export const ProfilesComponent = (props: IProps) => {
  // const { sectionID, dataSource, title } = props;
  return (
    <section id="profiles" className="profiles">
      <div className="profiles-details">
        <div className="section-heading text-center">
          <h2>profiles</h2>
        </div>
        <div className="container">
          <div className="profiles-content">
            <div className="row">
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-themeforest"></i>
                    </a>
                    <div className="profile-icon-name">themeforest</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-themeforest"></i>
                      </a>
                      <div className="profile-icon-name">themeforest</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-dribbble"></i>
                    </a>
                    <div className="profile-icon-name">dribbble</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-dribbble"></i>
                      </a>
                      <div className="profile-icon-name">dribbble</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-behance-logo"></i>
                    </a>
                    <div className="profile-icon-name">behance</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-behance-logo"></i>
                      </a>
                      <div className="profile-icon-name">behance</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile profile-no-border">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-github-logo"></i>
                    </a>
                    <div className="profile-icon-name">github</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-github-logo"></i>
                      </a>
                      <div className="profile-icon-name">github</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-border"></div>
            <div className="row">
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-flickr-website-logo-silhouette"></i>
                    </a>
                    <div className="profile-icon-name">flickR</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-flickr-website-logo-silhouette"></i>
                      </a>
                      <div className="profile-icon-name">flickR</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-smug"></i>
                    </a>
                    <div className="profile-icon-name">smungMung</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-smug"></i>
                      </a>
                      <div className="profile-icon-name">smungMung</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-squarespace-logo"></i>
                    </a>
                    <div className="profile-icon-name">squareSpace</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-squarespace-logo"></i>
                      </a>
                      <div className="profile-icon-name">squareSpace</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="single-profile profile-no-border">
                  <div className="profile-txt">
                    <a href="">
                      <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i>
                    </a>
                    <div className="profile-icon-name">bitBucket</div>
                  </div>
                  <div className="single-profile-overlay">
                    <div className="profile-txt">
                      <a href="">
                        <i className="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i>
                      </a>
                      <div className="profile-icon-name">bitBucket</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesComponent;
