import user from "../assets/user.svg";
import close from "../assets/close.svg";
import icon from "../assets/icon.svg";
function ReightSidebar() {
  return (
    <div className="w-[20%] min-h-[100vh] text-[#B2B2B2] bg-black ">
      <div className="pt-8 pl-8">
        <p className="flex text-[#B2B2B2] items-center">
          <span className="flex gap-1 text-[20px] font-bold">
            Friend <span></span> Activity
          </span>{" "}
          <img src={user} alt="" /> <img src={close} alt="" />
        </p>
        <p className="text-[18px] w-[270px]">
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <br />
        <img src={icon} width={170} alt="" />
        <br />
        <img src={icon} width={170} alt="" />
        <br />
        <img src={icon} width={170}  alt="" />
        <span className="w-[270px] p-0 mt-3 block text-[18px]">
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </span>
        <button className="px-[64px] py-2 tracking-[3px] font-bold text-[18px] rounded-[40px] text-black mt-5 bg-white transition-all duration-300 hover:opacity-75">
          SETTINGS
        </button>
      </div>
    </div>
  );
}

export default ReightSidebar;
