import { useEffect, useState } from 'react';
import React from 'react';
import Favicon from 'react-favicon';
import Image from 'react-webp-image';
import {
  Modal,
  Form,
  Carousel,
  Spinner,
  Button,
  Media,
  Row,
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Scrollspy from 'react-scrollspy';
import LazyLoad from 'react-lazyload';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {
  UilHeart,
  UilMusicNote,
  UilMusicTuneSlash,
  UilEstate,
  UilSchedule,
  UilShieldPlus,
  UilCommentMessage,
} from '@iconscout/react-unicons';
const backsound = require('assets/music/perfect.mp3');

interface IRsvp {
  Nama: string;
  Avatar: string;
  Hadir: string;
  Pesan: string;
  Tanggal: string;
}

export const WeddingPageComponent = (props: any) => {
  const weddingDate = '06/27/2021 09:00:00';
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [validated, setValidated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [audio] = useState<HTMLAudioElement>(new Audio(backsound));
  const [playAudio, setPlayAudio] = useState<boolean>(false);

  const [sheet, setSheet] = useState<any>();

  const [rsvp, setRsvp] = useState<IRsvp[]>([]);
  const [Nama, setNama] = useState<string>();
  const [Avatar, setAvatar] = useState<string>();
  const [Hadir, setHadir] = useState<string>();
  const [Pesan, setPesan] = useState<string>();

  const gSpreadsheetId = '14hqIMy6yn31-DA0PjRiQRgPej-0B7MHtuxGPktQRzAQ';
  const gSheetClientEmail = 'rsvp-account@wedding-302818.iam.gserviceaccount.com';
  const gSheetPrivateKey =
    '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJJARmX2O/1JHn\nQIagIBGmOCRl8eGV0hUSHD6vGrIv+TfyLhhGiDwCnRTdJ4hbiGLdxwWC1SX0tbLn\ntSCeNNEDH9mcNR4Y9UWPN35CMF+uaE+kiHd5QJPqdTTNSoIKopzuY64iDNTLpuwI\n0OPieRBs2SZEtKJvQvjq5ihm/2SEt6vTJsYKdNrmRfxTaPlnKrHEYO6nU4kM55XV\nQqse5VJvglBCVOEg6lbgm6PkcweG5LW95McEZZXzELXHx8eEzeyWA/g5K3j009bU\nHN49fcy8xwPUzpD87PUvCB0olgOhvvmzk7hRaetAkRWnIlygmgzSN6Ra/zry3Hqp\nKwVUTpofAgMBAAECggEABG6bjctrZ9mw1W5qa2Zd66dI1dqZVcQyViF/jR0pwQ8m\n1bbTpgPlHJiDAhqy93JS76Ps86t7zIrKu15JLZO7ZYRz/e5hiKD0nIpIlE8H6JUK\nbeDTK6IApcUf7bqItVtIAxRJnmQXxHUij65gjwMmmr3x1KqZzUq2zLCfgaSjVP6m\ne8E6Qm/NIclpKDH2K9t2DFDBA81BO92rjQfGPMEzpQLjl2VeuyppNWePeaCQk7R8\nuyDx+NVFznBLpTc6Wx2u0JDqVkN4LHPVFCAjrZXBM7arzz+NoJ8aq5R6rXCzqALv\nIcXXTkhELwtpza3LWfvR52N3MwY31vUTfFXK+8md4QKBgQC/lbM+DCnUj5uD4fUw\nLoH87tyBpuI6RVriPIw+ERfuXeDTTEvwHuN24j9vq7rpVFkj8oH/UnliF9W29tVQ\ntCX2UDslK2+g7c0syLPD6p0xsk8CiUHlwJFoYpWCJ1Rbq8hkX2ZGSVurtxj8E365\nRi0fVKaXTYmmMTwPt+BMZ3TqeQKBgQC3QCU04E9tnDh/gE4H2m0CN5DV2T+gWe7q\n3qgCoB8MxqCwqJAOrUfbbEH9cgGU26H/lvfMjnqCNtYuQX3Btk1RnojlhmJZH+yc\n/u9Kdns49bHWhG9QFGHruAC3TEUmTaR/AOb4Lk1JDEw+MFVurmiXC00NPC9fbpmY\nddnpzo+DVwKBgG1gIqeOvCbdIbTGQHuUYaOsHnlqdAc+Zyd317zrd1UfhWY8TbI1\ngDjz67FuQlRJUmbCYVMJm8DTyLAe9SOQ5YdcwJd019LxUEx7/J0iCUJBAPh6sgNf\nz+PfPGnE2FVJmisrh7Ei2lILQxlOa++MT+BuLHl+y9H0k8yJdmVIPyhJAoGAFstL\n1X/xYVkFThbPnfp1hMkUowUa/P8y0NRRYcI5GoW6hz7wbGLxhUG6E6SSvcl0JS7K\nNA+k/X2Etsw+sFHU3Eo0DRjiMuPdssmjSkfim/sz29MtZXCjnYaN0D8Ueuc9hu69\nzDE2O9fjw/iPJ+1Z5S/qrbLG0cAYKva93G9tOpECgYAGF886/53aCJtF2SwkOTwd\n+OSMKn03FEzjFoaG97uBYVxwBx/UvykEMaCx9WcBVJfRWl8b39jC/atuz3oDzpti\n3doupyLG/gwN5Ky/2pFFrtlwj1gaU2TuDci69A97D6Qod9nH/Pdv8CUhywkrMbjQ\noIG3X41ekZZp1RdSoHv8GQ==\n-----END PRIVATE KEY-----\n';

  const cloudinaryBaseUrl = 'https://res.cloudinary.com/rizqireza/image/upload/';
  const protocolBaseUrl = `${cloudinaryBaseUrl}v1614187116/Portofolio/Wedding/Protocol/`;
  const avatarBaseUrl = `${cloudinaryBaseUrl}v1611773458/Portofolio/Wedding/Avatar/`;

  const avatarList = ['man1', 'man2', 'man3', 'woman1', 'woman2', 'woman3'];

  useEffect(() => {
    document.title = 'Pernikahan Fitri & Rizqi';
    setInterval(() => updateCountdown(), 1000);

    const prepareSheet = async () => {
      const sheet = await getSheet();
      setSheet(sheet);
      getRsvp(sheet);
    };

    prepareSheet();

    audio.addEventListener('ended', () => setPlayAudio(false));
    return () => {
      audio.removeEventListener('ended', () => setPlayAudio(false));
    };
  }, []);

  useEffect(() => {
    playAudio ? audio.play() : audio.pause();
  }, [playAudio]);

  const chunkRsvp = (size: number, source: IRsvp[]) => {
    let data = [...source];
    let result: IRsvp[][] = [];

    while (data.length) {
      result.push(data.splice(0, size));
    }

    return result;
  };

  const getSheet = async () => {
    try {
      const doc = new GoogleSpreadsheet(gSpreadsheetId);
      await doc.useServiceAccountAuth({
        client_email: gSheetClientEmail,
        private_key: gSheetPrivateKey,
      });

      await doc.loadInfo(); // loads sheets

      const sheet = doc.sheetsByIndex[0];
      return sheet;
    } catch (e) {
      console.error('Error get Sheet: ', e);
    }
  };

  const getRsvp = async (sheet) => {
    setLoading(true);
    const rows = await sheet?.getRows();
    setRsvp(rows);
    setLoading(false);
  };

  const addRsvp = async (row) => {
    try {
      await sheet?.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

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

  const handleSubmitRsvp = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const currentDate = new Date();
    const Tanggal = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    const row = { Nama, Avatar, Hadir, Pesan, Tanggal };
    await addRsvp(row);
  };

  const clearAllField = () => {
    setNama(undefined);
    setAvatar(undefined);
    setHadir(undefined);
    setPesan(undefined);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearAllField();
    setMessage('');
    getRsvp(sheet);
  };

  const handleChangeName = (e) => {
    setNama(e.target.value);
  };

  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleChangeRsvp = (e) => {
    setHadir(e.target.value);
  };

  const handleChangePesan = (e) => {
    setPesan(e.target.value);
  };

  const handlePlayAudio = (e) => {
    setPlayAudio(true);
  };

  const handleStopAudio = (e) => {
    setPlayAudio(false);
  };

  return (
    <SimpleReactLightbox>
      <Favicon url={`${cloudinaryBaseUrl}v1614615901/Portofolio/Wedding/favicon_iwtbqz.ico`} />
      <Navbar expand={true} fixed="bottom" className="navbar-wedding">
        <Nav fill={true}>
          <Scrollspy
            componentTag="div"
            items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']}
            currentClassName="active"
            className="navbar-nav"
            offset={-10}
          >
            <a href="#section-1" className="smooth-menu-wedding">
              <UilEstate />
              <label>Beranda</label>
            </a>
            <a href="#section-2" className="smooth-menu-wedding">
              <UilHeart />
              <label>Mempelai</label>
            </a>
            <a href="#section-3" className="smooth-menu-wedding">
              <UilSchedule />
              <label>Acara</label>
            </a>
            <a href="#section-4" className="smooth-menu-wedding">
              <UilShieldPlus />
              <label>Protokol</label>
            </a>
            <a href="#section-5" className="smooth-menu-wedding">
              <UilCommentMessage />
              <label>Pesan</label>
            </a>
          </Scrollspy>
        </Nav>
      </Navbar>
      <div className="wedding-container">
        <Row>
          <Col lg={6} className="left-panel wedding-background">
            <section id="section-1">
              <div className="wedding-box">
                <h1 className="wedding-subtitle">Wedding Invitation</h1>
                <h1 className="wedding-title">
                  Fitri <span className="wedding-and">&amp;</span> Rizqi
                </h1>
              </div>
              <div className="wedding-box">
                <Image
                  src={`${cloudinaryBaseUrl}v1616347403/Portofolio/Wedding/wedding-bg-illustrate_redesign_v2_ecdnpx.svg`}
                  alt="cover_invitation"
                  width="100%"
                  height="100%"
                />
              </div>
            </section>
          </Col>
          <Col lg={6} className="right-panel">
            <p className="wedding-mute-text">
              <i>Bismillahirrahmanirrahim</i>
            </p>
            <h1 className="wedding-subtitle">Assalamu'alaykum Wr. Wb.</h1>
            <div className="title">
              <p className="wedding-mute-text">
                “Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran
                Allah" <br />
                (Qs. Az-Zariyat : 49)
              </p>
              <br />
              <p className="wedding-mute-text">
                Dengan memohon rahmat dan ridho Allah Subhanahu Wata'ala. Kami bermaksud
                menyelenggarakan acara syukuran dan resepsi pernikahan putra dan putri Kami
              </p>
            </div>
            <br />
            <section id="section-2">
              <div className="wedding-section">
                <div className="couples">
                  <h1 className="wedding-subtitle">Mempelai</h1>
                  <span className="wedding-and">&amp;</span>
                  <LazyLoad height={500}>
                    <Row>
                      <Col sm={6}>
                        <div className="wedding-gallery">
                          <Image
                            src={`${cloudinaryBaseUrl}v1611508039/Portofolio/Wedding/fitri.jpg`}
                            alt="pp_fitri"
                            width={252}
                            height={335}
                          />
                        </div>
                        <div>
                          <h1 className="wedding-name">Fitri Febriana, S.E</h1>
                          <p className="wedding-mute-text">
                            Putri ke-2 dari <br />
                            Bapak Satimin dan Ibu Lamiyem
                          </p>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="wedding-gallery">
                          <Image
                            src={`${cloudinaryBaseUrl}v1611596646/Portofolio/Wedding/rizqi.jpg`}
                            alt="pp_rizqi"
                            width={252}
                            height={335}
                          />
                        </div>
                        <div>
                          <h1 className="wedding-name">Rizqi Reza Valhevi, S.Kom</h1>
                          <p className="wedding-mute-text">
                            Putra ke-7 dari <br />
                            Alm. Bapak H. Saiful Amin dan <br />
                            Almh. Ibu Hj. Umi Nurrokhmah
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </LazyLoad>
                </div>
              </div>
              <div className="wedding-section gallery">
                <h1 className="wedding-subtitle">Galeri</h1>
                <LazyLoad height={550} offset={50}>
                  <SRLWrapper options={{ buttons: { showDownloadButton: false } }}>
                    <Row>
                      <Col sm={6}>
                        <div className="wedding-gallery masonry">
                          <img
                            src={`${cloudinaryBaseUrl}v1611598634/Portofolio/Wedding/Gallery/fitri_rizqi_1-3_tzprxp.jpg`}
                            alt="Galeri 1"
                          />
                        </div>
                        <div className="wedding-gallery masonry">
                          <img
                            src={`${cloudinaryBaseUrl}v1611598640/Portofolio/Wedding/Gallery/fitri_rizqi-13_vuuzzc.jpg`}
                            alt="Galeri 2"
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="wedding-gallery masonry">
                          <img
                            src={`${cloudinaryBaseUrl}v1611598655/Portofolio/Wedding/Gallery/fitri_rizqi-21_xti7pw.jpg`}
                            alt="Galeri 3"
                          />
                        </div>
                        <div className="wedding-gallery masonry">
                          <img
                            src={`${cloudinaryBaseUrl}v1611598649/Portofolio/Wedding/Gallery/fitri_rizqi-17_f4ecy7.jpg`}
                            alt="Galeri 4"
                          />
                        </div>
                      </Col>
                    </Row>
                  </SRLWrapper>
                </LazyLoad>
              </div>
              <div className="wedding-section story">
                <h1 className="wedding-subtitle">Kisah Kami</h1>
                <p className="p_kisah">
                  <b>&#8226; Juni 2020 &#8226;</b>
                  <br />
                  Kisah kami berawal dari sosial media, dari salah satu mutual teman kami. Pada saat
                  itu PSBB di jakarta sedang berlangsung dengan ketat, sehingga mengharuskan kami
                  saling mengenal via whatsapp.
                  <br />
                  <br />
                  <b>&#8226; Juli 2020 &#8226;</b>
                  <br />
                  Akhirnya PSBB berakhir dan berganti menjadi PSBB transisi, ini adalah kali pertama
                  kami bisa bertemu dan saling mengenalkan dengan keluarga masing-masing.
                  <br />
                  <br />
                  <b>&#8226; September 2020 &#8226;</b>
                  <br />
                  kami sudah sepakat untuk melanjutkan ke jenjang pernikahan. Kedua keluarga bertemu
                  sebagai simbol "perkenalan" dan meminta izin untuk dapat mengenal lebih jauh.
                  <br />
                  <br />
                  <b>&#8226; Januari 2021 &#8226;</b>
                  <br />
                  Akhirnya kami melangsungkan prosesi lamaran dan menentukan hari baik untuk
                  melakukan akad nikah.
                  <br />
                  <br />
                  <b>&#8226; Juni 2021 &#8226;</b>
                  <br />
                  Akhirnya waktu yang dinantikan segera tiba untuk mengikat hubungan kami dalam tali
                  pernikahan. Semoga Allah SWT meridhai niat baik kami, dan memudahkan rencana kami.
                  Aamiin.
                </p>
              </div>
            </section>
            <section id="section-3">
              <Row>
                <Col sm={6}>
                  <div className="wedding-section ceremony">
                    <h1 className="wedding-subtitle">Akad Nikah</h1>
                    <p className="wedding-mute-text">Kamis, 17 Juni 2021</p>
                    <p className="wedding-mute-text">09:00 WIB</p>
                    <p className="wedding-mute-text">Kediaman Mempelai Wanita</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="wedding-section reception">
                    <h1 className="wedding-subtitle">Resepsi Nikah</h1>
                    <p className="wedding-mute-text">Minggu, 27 Juni 2021</p>
                    <p className="wedding-mute-text">09:00 WIB</p>
                    <p className="wedding-mute-text">SMA IT Almaka</p>
                  </div>
                </Col>
              </Row>
              <div className="wedding-section maps">
                <h1 className="wedding-subtitle">Lokasi Resepsi</h1>
                <LazyLoad height={400} offset={50}>
                  <iframe
                    title="wedding-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.819024310843!2d106.70089811529954!3d-6.154987662043638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8147d3a779d%3A0x1f5212d96ffa9acd!2sSMA%20IT%20ALMAKA!5e0!3m2!1sen!2sid!4v1611601818823!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    aria-hidden="false"
                    style={{ border: 'none' }}
                  />
                </LazyLoad>
              </div>
              <div className="wedding-section countdown">
                <h1 className="wedding-subtitle">Datang ya!</h1>
                <div className="timer-wrapper">
                  <span>
                    <div className="timers">
                      <h2>{state.days || '00'}</h2> <p>Hari</p>
                    </div>
                    <div className="timers">
                      <h2>{state.hours || '00'}</h2> <p>Jam</p>
                    </div>
                    <div className="timers">
                      <h2>{state.minutes || '00'}</h2> <p>Menit</p>
                    </div>
                    <div className="timers">
                      <h2>{state.seconds || '00'}</h2> <p>Detik</p>
                    </div>
                  </span>
                </div>
              </div>
            </section>
            <section id="section-4">
              <div className="wedding-section ">
                <div className="covid">
                  <h1 className="wedding-subtitle">Protokol Kesehatan</h1>
                  <p className="protocol">
                    Untuk mematuhi himbauan pemerintah dalam pencegahan penyebaran Covid-19, maka
                    diharapkan Bapak/Ibu/Saudara/i tamu undangan untuk:
                  </p>
                  <div className="protocol-content">
                    <Row>
                      <Col xl={4} lg={6} md={6}>
                        <Media>
                          <div className="avatar-wrapper">
                            <img
                              width={64}
                              height={64}
                              src={`${protocolBaseUrl}protocol1.svg`}
                              alt="protocol-1"
                            />
                          </div>
                          <Media.Body>
                            <p>Mengecek suhu tubuh sebelum memasuki lokasi acara</p>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col xl={4} lg={6} md={6}>
                        <Media>
                          <div className="avatar-wrapper">
                            <img
                              width={64}
                              height={64}
                              src={`${protocolBaseUrl}protocol2.svg`}
                              alt="protocol-2"
                            />
                          </div>
                          <Media.Body>
                            <p>Mencuci tangan sebelum dan sesudah memasuki lokasi acara</p>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col xl={4} lg={6} md={6}>
                        <Media>
                          <div className="avatar-wrapper">
                            <img
                              width={64}
                              height={64}
                              src={`${protocolBaseUrl}protocol3.svg`}
                              alt="protocol-3"
                            />
                          </div>
                          <Media.Body>
                            <p>Selalu memakai masker selama acara berlangsung</p>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col xl={6} lg={6} md={6}>
                        <Media>
                          <div className="avatar-wrapper">
                            <img
                              width={64}
                              height={64}
                              src={`${protocolBaseUrl}protocol4.svg`}
                              alt="protocol-4"
                            />
                          </div>
                          <Media.Body>
                            <p>Tidak berkerumun, dengan menjaga jarak satu sama lain</p>
                          </Media.Body>
                        </Media>
                      </Col>
                      <Col xl={6} lg={12} md={12}>
                        <Media>
                          <div className="avatar-wrapper">
                            <img
                              width={64}
                              height={64}
                              src={`${protocolBaseUrl}protocol5.svg`}
                              alt="protocol-5"
                            />
                          </div>
                          <Media.Body>
                            <p>Tidak bersalaman, dapat menggantinya dengan salaman jarak jauh</p>
                          </Media.Body>
                        </Media>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </section>
            <section id="section-5">
              <div className="wedding-section">
                <div className="rsvp">
                  <h1 className="wedding-subtitle">Buku Tamu</h1>
                  <Button type="button" className="btn btn-rsvp" onClick={() => setShowModal(true)}>
                    RSVP &amp; Pesan untuk pengantin
                  </Button>
                  <br />
                  <br />
                  <br />
                  {loading && <Spinner animation="border" variant="warning" />}
                  {!loading && rsvp?.length > 0 && (
                    <Carousel controls={false}>
                      {chunkRsvp(3, rsvp)?.map((chunk, indexRsvp) => (
                        <Carousel.Item key={indexRsvp}>
                          <ul className="list-unstyled">
                            {chunk?.map((data, indexChunk) => (
                              <li className="media" key={indexChunk}>
                                <div className="avatar-wrapper">
                                  <img
                                    src={`${avatarBaseUrl}${data.Avatar}.svg`}
                                    alt={data.Avatar}
                                    width={60}
                                    height={60}
                                  />
                                </div>
                                <div className="media-body">
                                  <h2 className="mt-0 mb-1">{data.Nama}</h2>
                                  <p>{data.Pesan || '-'}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                </div>
              </div>
            </section>
            <div className="wedding-section thank">
              <h1 className="wedding-subtitle">Wassalamu'alaykum Wr. Wb.</h1>
            </div>
            <div className="wedding-section footer">
              <p className="wedding-mute-text">
                Made with <UilHeart /> by @rizqirezz
              </p>

              {playAudio ? (
                <Button
                  className="wedding-play-audio"
                  aria-label="stop-audio"
                  onClick={handleStopAudio}
                >
                  <UilMusicNote />
                </Button>
              ) : (
                <Button
                  className="wedding-play-audio"
                  aria-label="play-audio"
                  onClick={handlePlayAudio}
                >
                  <UilMusicTuneSlash />
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {message !== '' ? (
            <h5 style={{ textAlign: 'center' }}>{message}</h5>
          ) : (
            <>
              <div className="modal-title">
                <h5>Buku Tamu</h5>
                <hr />
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmitRsvp}>
                <Form.Group controlId="validation1">
                  <Form.Label>Nama Lengkap *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nama lengkap Anda"
                    onChange={handleChangeName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nama Lengkap harus diisi
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pilih Avatar *</Form.Label>
                  <div className="avatar-radio" id="validation2">
                    {avatarList.map((avatarName) => (
                      <Form.Check inline key={avatarName}>
                        <Form.Check.Label>
                          <Form.Check.Input
                            required
                            type="radio"
                            name="avatar"
                            value={avatarName}
                            onChange={handleChangeAvatar}
                          />
                          <div className="avatar-wrapper">
                            <img src={`${avatarBaseUrl}${avatarName}.svg`} />
                          </div>
                        </Form.Check.Label>
                      </Form.Check>
                    ))}
                  </div>
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: validated && !Avatar ? 'block' : 'none' }}
                  >
                    Avatar harus dipilih
                  </Form.Control.Feedback>
                  <label>
                    Source:
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      flaticon
                    </a>
                  </label>
                </Form.Group>
                <Form.Group controlId="validation3">
                  <Form.Label>RSVP / Konfirmasi Kehadiran *</Form.Label>
                  <Form.Control required as="select" onChange={handleChangeRsvp}>
                    <option value="">Pilih konfirmasi kehadiran</option>
                    <option value="Ya">Ya</option>
                    <option value="Mungkin">Mungkin</option>
                    <option value="Tidak">Tidak</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Konfirmasi Kehadiran harus dipilih
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validation4">
                  <Form.Label>Pesan untuk pengantin</Form.Label>
                  <Form.Control
                    rows={4}
                    as="textarea"
                    placeholder="Pesan atau doa untuk pengantin"
                    onChange={handleChangePesan}
                  />
                </Form.Group>
                <br />
                <Button type="submit" className="btn btn-rsvp btn-block">
                  <b>Kirim Pesan</b>
                </Button>
              </Form>
            </>
          )}
        </Modal.Body>
      </Modal>
    </SimpleReactLightbox>
  );
};

export default WeddingPageComponent;
