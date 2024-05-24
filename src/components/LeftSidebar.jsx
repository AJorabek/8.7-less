import home from "../assets/home.svg";
import search from "../assets/search.svg";
import liblary from "../assets/liblary.svg";
import pilus from "../assets/pilus.svg";
import like from "../assets/like.svg";
import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="w-[20%] min-h-[100vh] text-[#B2B2B2]  bg-black ">
      <div className="pt-20 pl-10 mr-[100px]">
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img width={32} height={32} src={home} alt="" />
          <Link to={"/"}>Home</Link>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={search} alt="" />
          <span>Search</span>
        </p>
        <p className="flex gap-5  mb-9 items-center transition duration-400 text-[#B2B2B2] hover:text-white ">
          <img src={liblary} alt="" />
          <p className="w-20 flex gap-1">
            Your <span> </span> Library
          </p>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={pilus} alt="" />
          <p className="flex gap-1">
            Create <span> </span> Playlist
          </p>
        </p>
        <p className="flex gap-5 mb-3 items-center transition duration-400 text-[#B2B2B2] hover:text-white">
          <img src={like} alt="" />
          <p className="flex gap-1">
            Liked <span> </span> Songs
          </p>
        </p>
        <ul className="text-[16px] w-[241px] h-[515px] flex flex-col gap-3 mt-10 ">
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Chill Mix
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Insta Hits
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Your Top Songs 2021
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Mellow Songs
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Anime Lofi & Chillhop Music
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            BG Afro “Select” Vibes
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Afro “Select” Vibes
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Happy Hits!
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Deep Focus
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Instrumental Study
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            OST Compilations
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Nostalgia for old souled mill...
          </li>
          <li className="transition duration-400 text-[#B2B2B2] hover:text-white">
            Mixed Feelings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
