import type { Metadata } from "next";
import { LogoSVG } from '@/consts/logos';
import styles from '../styles/page.module.scss';

export const metadata: Metadata = {
  title: "Solid Development",
  description: "Coming soon, responsible residential development.",
  openGraph: {
    type: 'website',
    url: 'https://www.soliddevelopment.co/',
    title: "Solid Development",
    description: "Coming soon: responsible residential development.",
    siteName: "Solid Development",
    images: [{url: '/PreviewImg.png'}],
  }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homepage}>
        <h1><span data-sr>Solid Development</span> Coming soon... </h1>
        {LogoSVG.FullLogo}
      </div>
    </main>
  );
}
