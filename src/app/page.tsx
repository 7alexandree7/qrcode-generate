'use client'

import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { FaUpload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container">

      <section className="title-container">
        <h1 className="page-title"> Gere e custiomize Qr Codes <span>Dinâmicos</span> </h1>
        <Image
          src="/arrow.svg"
          alt="seta ilustrativa para baixo"
          className="arrow-detail"
          width={24}
          height={24}
          priority
        />
      </section>

      <section className="qr-code-container">
        <div className="qr-code">
          <div className="link-input">
            <label htmlFor="link">Digite seu Link</label>
            <input
              type="text"
              id="link"
              required
              placeholder="https://www.seusite.com.br"
            />
          </div>
          <div className="qr-code-preview">
            <p>Qr Code Preview</p>
            <QRCodeCanvas
              value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
              title={"Title for my QR Code"}
              size={128}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
              imageSettings={{
                src: "https://static.zpao.com/favicon.png",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>
        </div>

        <div className="qr-code-customization">

          <div className="customization-container">
            <h3>Cores</h3>
            <div className="input-container colors">
              <div className="input-box">
                <label htmlFor="fgColor">Cor Principal</label>
                <input
                  type="color"
                  id="fgColor"
                  className="input-color"
                />
              </div>
              <div className="input-box">
                <label htmlFor="bgColor">Cor Do Fundo</label>
                <input
                  type="color"
                  id="bgColor"
                  className="input-color"
                />
              </div>
            </div>
          </div>

          <div className="customization-container">
            <h3>Logo</h3>
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="logo">Insira seu Logo</label>
                <input
                  type="file"
                  id="logo"
                  className="input-file"
                  accept="image/*"
                />
                <button className="input-file-button">
                  <FaUpload />
                  Escolher Arquivo
                </button>
              </div>
              <div className="input-box">
                <label htmlFor="logoSize">Tamanho Da Logo</label>
                <select name="logoSize" id="logoSize">
                  <option value="24">Pequeno 24px</option>
                  <option value="38">Médio 38px</option>
                  <option value="50">Grande 50px</option>
                </select>
              </div>
            </div>
          </div>

          <button className="download-qr-code">Baixar Qr Code</button>

        </div>
      </section>

    </main>
  );
}
