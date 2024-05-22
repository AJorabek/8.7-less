import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMyToken } from "../utils/getToken";
import { Card, Container } from "../utils/emotion";

const Home = () => {
  const [datas, setData] = useState<any>({});
  const data = useSelector((state: any) => state.token);
  useEffect(() => {
    getData();
  }, [data]);
  const getData = async () => {
    const resp = await fetch(
      "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
      {
        headers: {
          Authorization: `'Bearer ${getMyToken()}`,
        },
      }
    );
    const data = await resp.json();
    console.log(data.albums[0]);

    setData(data);
  };
  return (
    <Container>
      {datas.albums &&
        datas.albums.map((e: any, i: number) => (
          <Card key={i} className="">
            <img src={e.images[0].url} alt="hello" width={150} />
            <h1>{e.name}</h1>
            <p>{e.type}</p>
          </Card>
        ))}
    </Container>
  );
};

export default Home;
// 5875679
