import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Full URL for the Open Graph image
const ogimage = 'https://socials.pixelemii.com/ogpixelcafe.png';

export const metadata = {
  title: "PixelEmii - Socials",
  description: "PixelEmii is a cyberpunk-themed hacker bunny VTuber with a mischievous, playful personality and a love for gaming. Join the chaos at the Byte & Brew Cafe!",
  keywords: "PixelEmii, Pixel, Emii, Byte & Brew Cafe, Cafe VTuber, PixelCafe, PixelCafeVT, ENVTuber, VTuberEN, English VTuber, Twitch VTuber, YouTube VTuber, trans VTuber, bunny VTuber, bunnygirl, rabbit girl, cozy streamer, gaming streamer, MMORPG VTuber, simulation games, Final Fantasy XIV VTuber, Sims VTuber, Fortnite streamer, variety streamer, nostalgic gamer, interactive entertainment, humor, chill vibes, inclusive community, LGBTQ+ friendly streamer, trans representation, digital adventures, VR gaming, engaging streamer, charismatic personality, creativity and passion, virtual cafe experience, retro gaming, NES games, story-rich games, adventure games, red teamer streamer, cybersecurity gamer, ethical hacker gamer, TryHackMe VTuber, gamer girl vibes, indie game enthusiast, streamer community building, parasocial interaction, cozy digital spaces, online friendships, wholesome content, Pixel Café vibes, bunny girl aesthetic, pastel gaming world, casual gaming fun, strategic simulation games, escapism, comfy gaming sessions, Twitch streamer, YouTuber, cyberpunk, cyberpunk vtuber, hacker vtuber, cybersecurity vtuber, tutorials",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "PixelEmii - Socials",
    description: "PixelEmii is a cyberpunk-themed hacker bunny VTuber with a mischievous, playful personality and a love for gaming. Join the chaos at the Byte & Brew Cafe!",
    url: "https://socials.pixelemii.com",
    image: ogimage,  // Use absolute URL for the image
    site_name: "PixelEmii",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelEmii - Socials",
    description: "PixelEmii is a cyberpunk-themed hacker bunny VTuber with a mischievous, playful personality and a love for gaming. Join the chaos at the Byte & Brew Cafe!",
    image: ogimage,  // Use absolute URL for the image
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content="https://socials.pixelemii.com/ogpixelcafe.png" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content="PixelEmii" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta property="twitter:image" content="https://socials.pixelemii.com/ogpixelcafe.png" />      
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
