import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Main() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Connection error");
        }
        return res.json();
      })
      .then((d) => {
        setData(d.playlists.items);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  function handlePlaylist(id, el) {
    navigate(`/playlist/${id}`, { state: { id: id, el } });
  }
  console.log(data.collaborative);
  return (
    <div className="relative">
      <div className="">
        <div className="w-[100%] bg-[#121212] flex flex-wrap justify-center gap-4 items-center pt-[100px] ">
          {data.map((el, index) => (
            <div key={index} className="w-[30%] h-full mb-[50px]">
              <div
                onClick={() => handlePlaylist(el.id, el)}
                className=" p-3 rounded-lg min-h-[400px] bg-[#1B1B1B] text-[#B3B3B3]"
              >
                <img
                  src={el.images[0].url}
                  alt={el.name}
                  className=" rounded-lg object-cover mb-6"
                />
                <h1 className="text-[16px] uppercase mb-2 text-white">{el.name}</h1>
                <span className="text-[12px]">{el.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
