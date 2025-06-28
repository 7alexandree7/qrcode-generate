import QrCode from "@/components/QrCode/QrCode";
import SectionTitleQrcodeGenerate from "@/components/SectionTitleQrCodeGenerate/SectionTitleQrcodeGenerate";


export default function Home() {
  return (
    <main className="container">
      <SectionTitleQrcodeGenerate />
      <QrCode />
    </main>
  );
}
