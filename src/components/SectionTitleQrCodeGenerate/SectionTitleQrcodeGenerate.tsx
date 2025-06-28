import React from 'react'
import Image from 'next/image'

const SectionTitleQrcodeGenerate = () => {
    return (
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
    )
}

export default SectionTitleQrcodeGenerate
