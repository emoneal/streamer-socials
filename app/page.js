import ParticlesBackground from './components/ParticlesBackground';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faYoutube,
  faTiktok,
  faXTwitter,
  faDiscord,
  faInstagram,
  faBluesky
} from "@fortawesome/free-brands-svg-icons";
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function Home() {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-cyberpunk ${fredoka.className}`}>
    <Head>
      <meta charset="UTF-8" 
      />
      <title>PixelEmii - Socials</title>
      <meta 
        name="keywords" 
        content="PixelEmii, Pixel, Emii, Byte & Brew Cafe, Cafe VTuber, PixelCafe, PixelCafeVT, ENVTuber, VTuberEN, English VTuber, Twitch VTuber, YouTube VTuber, trans VTuber, bunny VTuber, bunnygirl, rabbit girl, cozy streamer, gaming streamer, MMORPG VTuber, simulation games, Final Fantasy XIV VTuber, Sims VTuber, Fortnite streamer, variety streamer, nostalgic gamer, interactive entertainment, humor, chill vibes, inclusive community, LGBTQ+ friendly streamer, trans representation, digital adventures, VR gaming, engaging streamer, charismatic personality, creativity and passion, virtual cafe experience, retro gaming, NES games, story-rich games, adventure games, red teamer streamer, cybersecurity gamer, ethical hacker gamer, TryHackMe VTuber, gamer girl vibes, indie game enthusiast, streamer community building, parasocial interaction, cozy digital spaces, online friendships, wholesome content, Pixel Café vibes, bunny girl aesthetic, pastel gaming world, casual gaming fun, strategic simulation games, escapism, comfy gaming sessions, Twitch streamer, YouTuber, cyberpunk, cyberpunk vtuber, hacker vtuber, cybersecurity vtuber, tutorials"
      />
      <meta name="description" content="PixelEmii is a cyberpunk-themed VTuber with a mischievous, playful personality and a love for gaming. Join the chaos at the Byte & Brew Cafe!" />
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1" 
      />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="robots" content="index, follow" />

    </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KGBJQ48CZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KGBJQ48CZ');
        `}
      </Script>
      <ParticlesBackground />
      <div className="w-full max-w-md p-6 bg-gradient-to-br from-purple-900 to-black rounded-xl shadow-lg border border-purple-500 backdrop-blur-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 glitch" data-text="PixelEmii">
            PixelEmii
          </h1>
          <p className="text-sm text-white opacity-80 mb-6">Cyberpunk Bunny VTuber Links</p>
        </div>
        <div className="text-white space-y-6">
          <SocialLink
            icon={faTwitch}
            label="Twitch"
            url="https://www.twitch.tv/PixelEmii"
            color="hover:text-purple-400"
          />
          <SocialLink
            icon={faYoutube}
            label="YouTube"
            url="https://www.youtube.com/@pixelemii?sub_confirmation=1"
            color="hover:text-red-400"
          />
          <SocialLink
            icon={faDiscord}
            label="Discord"
            url="https://discord.gg/TbGuUFV2HT"
            color="hover:text-blue-500"
          />
          <SocialLink
            icon={faBluesky}
            label="Bluesky"
            url="https://bsky.app/profile/pixelemii.bsky.social"
            color="hover:text-blue-200"
          />
          <SocialLink
            icon={faXTwitter}
            label="X (Twitter)"
            url="https://x.com/intent/follow?screen_name=PixelEmii"
            color="hover:text-blue-400"
          />
          <SocialLink
            icon={faTiktok}
            label="TikTok"
            url="https://www.tiktok.com/@PixelEmii"
            color="hover:text-green-400"
          />
          
          <SocialLink
            icon={faInstagram}
            label="Instagram"
            url="https://instagram.com/PixelEmii"
            color="hover:text-pink-400"
          />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ icon, label, url, color }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center p-2 bg-black bg-opacity-30 rounded-md border border-purple-400 ${color} transition-transform transform hover:scale-105 hover:bg-opacity-50 shadow-md`}
    >
      {/* Control size explicitly */}
      <FontAwesomeIcon icon={icon} className="text-white w-10 h-10" />
      <span className="ml-3 text-sm font-medium">{label}</span>
    </a>
  );
}
