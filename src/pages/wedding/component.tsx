import { Fragment } from 'react';
import React from 'react';
import Favicon from 'react-favicon';
import Image from 'react-webp-image';

export const WeddingPageComponent = (props: any) => {
  return (
    <Fragment>
      <Favicon url="https://drive.google.com/uc?export=view&id=1HFtSQHgkxGnq6iD3d5Q2ggoc8KwJOQco" />
      <div className="wedding-container">
        <div className="row">
          <div className="col-md-6 left-panel wedding-background">
            <div className="wedding-box">
              <h1 className="wedding-subtitle">Wedding Invitation</h1>
              <h1 className="wedding-title">
                Fitri <span className="wedding-and">&amp;</span> Rizqi
              </h1>
            </div>
            <div className="wedding-box">
              <Image
                src="https://res.cloudinary.com/rizqireza/image/upload/v1611598421/Portofolio/Wedding/bg-image_vionle.svg"
                alt="cover_invitation"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-md-6 right-panel">
            <div className="title">
              <p className="wedding-mute-text">
                “Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran
                Allah" <br />
                (Qs. Az-Zariyat : 49)
              </p>
            </div>
            <br />
            <div className="wedding-section ">
              <div className="couples">
                <h1 className="wedding-subtitle">Mempelai</h1>
                <span className="wedding-and">&amp;</span>
                <div className="col-sm-6">
                  <div className="wedding-gallery">
                    <Image
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611508039/Portofolio/Wedding/fitri.jpg"
                      alt="pp_fitri"
                    />
                  </div>
                  <div>
                    <h1 className="wedding-name">Fitri Febriana</h1>
                    <p className="wedding-mute-text">
                      Putri ke-2 dari <br />
                      Bapak Satimin dan Ibu Lamiyem
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="wedding-gallery">
                    <Image
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611596646/Portofolio/Wedding/rizqi.jpg"
                      alt="pp_rizqi"
                    />
                  </div>
                  <div>
                    <h1 className="wedding-name">Rizqi Reza Valhevi</h1>
                    <p className="wedding-mute-text">
                      Putra ke-7 dari <br />
                      Alm. Bapak H. Saiful Amin dan Almh. Ibu Hj. Umi Nurrokhmah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wedding-section gallery">
              <h1 className="wedding-subtitle">Galeri</h1>
              <div className="row">
                <div className="col-sm-6">
                  <div className="wedding-gallery masonry">
                    <img
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611598634/Portofolio/Wedding/Gallery/fitri_rizqi_1-3_tzprxp.jpg"
                      alt=""
                    />
                  </div>
                  <div className="wedding-gallery masonry">
                    <img
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611598640/Portofolio/Wedding/Gallery/fitri_rizqi-13_vuuzzc.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="wedding-gallery masonry">
                    <img
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611598655/Portofolio/Wedding/Gallery/fitri_rizqi-21_xti7pw.jpg"
                      alt=""
                    />
                  </div>
                  <div className="wedding-gallery masonry">
                    <img
                      src="https://res.cloudinary.com/rizqireza/image/upload/v1611598649/Portofolio/Wedding/Gallery/fitri_rizqi-17_f4ecy7.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="wedding-section story">
              <h1 className="wedding-subtitle">Kisah Kami</h1>
              <p className="p_kisah">
                <b>Jadi,</b>
                <br />
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="wedding-section ceremony">
                  <h1 className="wedding-subtitle">Akad Nikah</h1>
                  <p className="wedding-mute-text">Kamis, 17 Juni 2021</p>
                  <p className="wedding-mute-text">09:00 WIB</p>
                  <p className="wedding-mute-text">Kediaman Mempelai Wanita</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="wedding-section reception">
                  <h1 className="wedding-subtitle">Resepsi Nikah</h1>
                  <p className="wedding-mute-text">Minggu, 27 Juni 2021</p>
                  <p className="wedding-mute-text">09:00 WIB</p>
                  <p className="wedding-mute-text">Saung Rawa Lele</p>
                </div>
              </div>
            </div>
            <div className="wedding-section maps">
              <h1 className="wedding-subtitle">Lokasi Resepsi</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.819024310843!2d106.70089811529954!3d-6.154987662043638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8147d3a779d%3A0x1f5212d96ffa9acd!2sSMA%20IT%20ALMAKA!5e0!3m2!1sen!2sid!4v1611601818823!5m2!1sen!2sid"
                width="100%"
                height="400"
                aria-hidden="false"
                style={{ border: 'none' }}
              ></iframe>
            </div>
            <div className="wedding-section countdown">
              <h1 className="wedding-subtitle">Datang ya!</h1>
              <div className="timer-wrapper">
                <span>
                  <div className="timers">
                    <h2>00</h2> <div>Hari</div>
                  </div>
                  <div className="timers">
                    <h2>00</h2> <div>Jam</div>
                  </div>
                  <div className="timers">
                    <h2>00</h2> <div>Menit</div>
                  </div>
                  <div className="timers">
                    <h2>00</h2> <div>Detik</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="wedding-section thank">
              <h1 className="wedding-subtitle">Terima Kasih!</h1>
            </div>
            <div className="wedding-section footer">
              <p className="wedding-mute-text">
                Made with <i className="fa fa-heart" aria-hidden="true" /> by @rizqirezz
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WeddingPageComponent;
