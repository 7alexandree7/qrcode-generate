import React from 'react'
import Image from 'next/image'
import styles from './SectionTitleQrcodeGenerate.module.css'

const SectionTitleQrcodeGenerate = () => {
    return (
        <section className={styles.title_container}>
            <h1 className={styles.page_title}> Gere e custiomize Qr Codes <span className={styles.title_span}>Dinâmicos</span> </h1>
            <Image
                src="/arrow.svg"
                alt="seta ilustrativa para baixo"
                className={styles.arrow_detail}
                width={80}
                height={80}
                priority
            />
        </section>
    )
}

export default SectionTitleQrcodeGenerate
