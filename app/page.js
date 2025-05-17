import Script from 'next/script';
import ParticlesBackground from './components/ParticlesBackground';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitch,
  faYoutube,
  faTiktok,
  faXTwitter,
  faDiscord,
  faInstagram,
  faBluesky,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function Home() {
  return (
    <div>
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
      <div className={`min-h-screen flex items-center justify-center bg-cyberpunk ${fredoka.className}`}>
        <ParticlesBackground />
        <div className="w-full max-w-md p-6 bg-gradient-to-br from-purple-900 to-black rounded-xl shadow-lg border border-purple-500 backdrop-blur-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 glitch" data-text="PixelEmii">
              PixelEmii
            </h1>
            <p className="text-sm text-white opacity-80 mb-6">Cyberpunk Hacker Bunny VTuber</p>
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
              icon={faSpotify}
              label="Spotify"
              url="https://open.spotify.com/artist/4IVqzOLabkkT6ljyg1z5x6"
              color="hover:text-pink-400"
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
