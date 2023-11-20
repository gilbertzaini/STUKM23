import "./Logo.css";
import STUKM23 from "../assets/logo/STUKM23.png";
import nextButton from "../assets/image/NextButton.png";
import prevButton from "../assets/image/PrevButton.png";
import React, { useState } from "react";
import gordenKanan from "../assets/image/gorden_kanan.png";
import gordenKiri from "../assets/image/gorden_kiri.png";

function Logo() {
  const [judulMakna, setJudulMakna] = useState(0);
  const [teksMakna, setTeksMakna] = useState(0);

  const arrayJudul = [
    "3 Ujung Mahkota",
    "Diamond Putih",
    "Diamond Hitam",
    "Diamond Pink",
  ];
  const arrayIsi = [
    "Melambangkan 3 jenis UKM yang terdapat di UMN yaitu: Seni & Budaya, Olahraga, Sains & Sosial",
    "Melambangkan Integritas yang memiliki arti kebijakan dan kejujuran",
    "Melambangkan Tanggung Jawab yang memiliki arti serius dan tegas",
    "Melambangkan Empati yang memiliki arti cinta dan tulus",
  ];

  const handleNextButtonClick = () => {
    setJudulMakna((prevIndex) => (prevIndex + 1) % arrayJudul.length);
    setTeksMakna((prevIndex) => (prevIndex + 1) % arrayIsi.length);
  };

  const handlePrevButtonClick = () => {
    setJudulMakna(
      (prevIndex) => (prevIndex - 1 + arrayJudul.length) % arrayJudul.length
    );
    setTeksMakna(
      (prevIndex) => (prevIndex - 1 + arrayIsi.length) % arrayIsi.length
    );
  };

  return (
    <div class="logo">
      <div class="logoSection observed gradientBg">
      <img className="gorden gordenKiri" src={gordenKiri} />
      <img className="gorden gordenKanan" src={gordenKanan} />
        <div class="logoAtas">
          <img src={STUKM23} />
        </div>
        <div class="text">
          <h1>Serah Tahunan 2023</h1>
          <p>
            Serah Tahunan merupakan kegiatan tahunan yang dilaksanakan oleh
            Badan Eksekutif Mahasiswa Universitas Multimedia Nusantara dengan
            tujuan untuk memberikan apresiasi terhadap pengurus Unit Kegiatan
            Mahasiswa (UKM) Seni dan Budaya, Olahraga, serta Sains dan Sosial
            generasi yang telah menjabat serta kegiatan serah terima jabatan
            (sertijab) kepengurusan
          </p>
        </div>
      </div>

      <div class="maknaLogo observed">
        <div class="headerLogo">
          <h1>Makna Logo</h1>
          <div class="logoMakna">
            <div class="logoSTUKM">
              <img src={STUKM23} />
            </div>
            <div class="kontenLogo">
              <div class="atasBox">
                {judulMakna > 0 && (
                  <img
                    src={prevButton}
                    alt="Previous Button"
                    onClick={handlePrevButtonClick}
                    class="prevButton"
                  />
                )}
                <p>{arrayJudul[judulMakna]}</p>
                {judulMakna < arrayJudul.length - 1 && (
                  <img
                    src={nextButton}
                    alt="Next Button"
                    onClick={handleNextButtonClick}
                    class="nextButton"
                  />
                )}
              </div>
              <div class="maknaBox">
                <p>{arrayIsi[teksMakna]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
