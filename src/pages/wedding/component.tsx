import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import Favicon from 'react-favicon';
import Image from 'react-webp-image';

export const WeddingPageComponent = (props: any) => {
  const weddingDate = '06/27/2021 09:00:00';
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    const countdownDate = new Date(weddingDate).getTime();
    if (countdownDate) {
      // Get the current time
      const currentTime = new Date().getTime();

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime;

      // Calculate days, hours, minutes and seconds remaining
      let days: any = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours: any = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes: any = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds: any = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // For visual appeal, add a zero to each number that's only one digit
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      // Set the state to each new time
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

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
                    <h2>{state.days || '00'}</h2> <div>Hari</div>
                  </div>
                  <div className="timers">
                    <h2>{state.hours || '00'}</h2> <div>Jam</div>
                  </div>
                  <div className="timers">
                    <h2>{state.minutes || '00'}</h2> <div>Menit</div>
                  </div>
                  <div className="timers">
                    <h2>{state.seconds || '00'}</h2> <div>Detik</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="wedding-section rsvp">
              <h1 className="wedding-subtitle">Buku Tamu</h1>
              <button
                type="button"
                className="btn btn-rsvp"
                data-toggle="modal"
                data-target="#rsvpModal"
              >
                RSVP &amp; Pesan untuk pengantin
              </button>
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
        <div
          className="modal fade"
          id="rsvpModal"
          aria-labelledby="rsvpModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-title">
                  <h5>Buku Tamu</h5>
                  <hr />
                </div>
                <form>
                  <div className="form-group">
                    <label>Nama Lengkap *</label>
                    <input type="text" className="form-control" placeholder="Nama lengkap Anda" />
                  </div>
                  <div className="form-group">
                    <label>Pilih Avatar *</label>
                    <div className="avatar-radio">
                      <label>
                        <input type="radio" name="avatar" value="man1" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773458/Portofolio/Wedding/Avatar/048-muslim_jxinch.svg" />
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="avatar" value="man2" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773422/Portofolio/Wedding/Avatar/030-man_q0ndjk.svg" />
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="avatar" value="man3" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773380/Portofolio/Wedding/Avatar/007-man_jppztg.svg" />
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="avatar" value="woman1" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773410/Portofolio/Wedding/Avatar/009-muslim_cl1xvk.svg" />
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="avatar" value="woman2" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773436/Portofolio/Wedding/Avatar/049-girl_cz3dui.svg" />
                        </div>
                      </label>
                      <label>
                        <input type="radio" name="avatar" value="woman3" />
                        <div className="avatar-wrapper">
                          <img src="https://res.cloudinary.com/rizqireza/image/upload/v1611773534/Portofolio/Wedding/Avatar/045-woman_aufmgo.svg" />
                        </div>
                      </label>
                    </div>
                    <label>
                      Source:
                      <a href="https://www.flaticon.com/" title="Flaticon">
                        flaticon
                      </a>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>RSVP / Konfirmasi Kehadiran *</label>
                    <select className="form-control">
                      <option value="">Pilih konfirmasi kehadiran</option>
                      <option value="ya">Ya</option>
                      <option value="mungkin">Mungkin</option>
                      <option value="tidak">Tidak</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Pesan untuk pengantin</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Pesan atau doa untuk pengantin"
                    />
                  </div>
                  <br />
                  <button type="button" className="btn btn-rsvp btn-block">
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WeddingPageComponent;
