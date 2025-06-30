'use client'

import React from 'react'
import { QRCodeCanvas } from "qrcode.react";
import { FaUpload } from "react-icons/fa";
import styles from './qrcode.module.css'

const QrCode = () => {
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
                    />
                </div>
                <div className={styles.qr_code_preview}>
                    <p>Qr Code Preview</p>
                    <QRCodeCanvas
                        value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                        title={"Title for my QR Code"}
                        size={200}
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

            <div className={styles.qr_code_customization}>

                <div className={styles.customization_container}>
                    <h3>Cores</h3>
                    <div className={styles.input_container_colors}>
                        <div className={styles.input_box_colors}>
                            <label className={styles.label_qr} htmlFor="fgColor">Cor Principal</label>
                            <input
                                type="color"
                                id="fgColor"
                            />
                        </div>
                        <div className={styles.input_box_colors}>
                            <label className={styles.label_qr} htmlFor="bgColor">Cor Do Fundo</label>
                            <input
                                type="color"
                                id="bgColor"                             
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
                            />
                            <button className={styles.input_file_button}>
                                <FaUpload />
                                Escolher Arquivo
                            </button>
                        </div>
                        <div className={styles.input_box}>
                            <label htmlFor="logoSize">Tamanho Da Logo</label>
                            <select name="logoSize" id={styles.logoSize}>
                                <option value="24">Pequeno 24px</option>
                                <option value="38">Médio 38px</option>
                                <option value="50">Grande 50px</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button className={styles.download_button}>Baixar Qr Code</button>

            </div>
        </section>
    )
}

export default QrCode
