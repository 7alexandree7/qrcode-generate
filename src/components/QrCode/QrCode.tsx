'use client'

import React, { useRef, useState } from 'react'
import { QRCodeCanvas } from "qrcode.react";
import { FaUpload } from "react-icons/fa";
import styles from './qrcode.module.css'

const QrCode = () => {

    const [link, setLink] = useState<string>("")
    const [fgColor, setFgColor] = useState<string>("#000000")
    const [bgColor, setBgColor] = useState<string>("#ffffff")
    const [logoUrl, setLogoUrl] = useState<string>("https://static.zpao.com/favicon.png")
    const [logoSize, setLogoSize] = useState<number>(38)
    const qrCodeRef = useRef<HTMLDivElement>(null);

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setLogoUrl(reader.result as string);
                }
            }
            reader.readAsDataURL(file)
        }
    }


    const downloadQrCode = () => {
        if (!qrCodeRef.current) return
        const canvas = qrCodeRef.current.querySelector('canvas');
        if (!canvas) return;
        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = 'qr_code.png';
        link.click();
    }

    return (
        <section className={styles.qr_code_container}>
            <div className={styles.qr_code}>
                <div className={styles.link_input}>
                    <label htmlFor="link">Digite seu Link</label>
                    <input
                        type="text"
                        id="link"
                        required
                        placeholder="https://www.seusite.com.br"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className={styles.qr_code_preview}>
                    <p>Qr Code Preview</p>
                    <div ref={qrCodeRef}>
                        <QRCodeCanvas
                            value={link}
                            title={link}
                            size={200}
                            bgColor={bgColor}
                            fgColor={fgColor}
                            level={"L"}
                            imageSettings={{
                                src: logoUrl,
                                x: undefined,
                                y: undefined,
                                height: logoSize,
                                width: logoSize,
                                opacity: 1,
                                excavate: true,
                                crossOrigin: "anonymous"
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.qr_code_customization}>

                <div className={styles.customization_container}>
                    <h3>Cores</h3>
                    <div className={styles.input_container_colors}>
                        <div className={styles.input_box_colors}>
                            <label className={styles.label_qr} htmlFor="fgColor">Cor Principal</label>
                            <input
                                type="color"
                                id="fgColor"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                            />
                        </div>
                        <div className={styles.input_box_colors}>
                            <label className={styles.label_qr} htmlFor="bgColor">Cor Do Fundo</label>
                            <input
                                type="color"
                                id="bgColor"
                                value={bgColor}
                                onChange={(e) => setBgColor(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.customization_container}>
                    <h3 className={styles.subtitle_qr}>Logo</h3>
                    <div className={styles.input_container}>
                        <div className={styles.input_box}>
                            <label htmlFor="logo">Insira seu Logo</label>
                            <input
                                type="file"
                                id="logo"
                                className={styles.input_file}
                                accept="image/*"
                                onChange={handleLogoChange}
                            />
                            <button className={styles.input_file_button}>
                                <FaUpload />
                                Escolher Arquivo
                            </button>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="logoSize">Tamanho Da Logo</label>
                            <select value={logoSize} onChange={(e) => setLogoSize(Number(e.target.value))} name="logoSize" id={styles.logoSize}>
                                <option value="24">Pequeno 24px</option>
                                <option value="38">Médio 38px</option>
                                <option value="50">Grande 50px</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onClick={downloadQrCode} className={styles.download_button}>Baixar Qr Code</button>

            </div>
        </section>
    )
}

export default QrCode
