// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
// import useSWR from "swr";
// import { fetcher } from "./utils/fetcher";

function App() {
  // const { data, error, isLoading, mutate } = useSWR(
  //   "https://jsonplaceholder.typicode.com/todos",
  //   fetcher,
  //   { revalidateOnMount: false }
  // );

  // console.log("🚀👾  error:", error);
  // console.log("🚀👾  isLoading:", isLoading);
  // console.log("🚀👾  data:", data);

  const [youtubeData, setYoutubeData] = useState([]);

  const doFetch = async () => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCsBjURrPoezykLs9EqgamOA&key=AIzaSyC5hyMw-cmDop9OHu9yLIKu3YQEmiXlgFs"
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setYoutubeData(res?.items || []);
      });
  };

  return (
    <>
      <div style={{ display: "flex", maxWidth: "100%", overflow: "auto" }}>
        {Boolean(youtubeData.length) &&
          youtubeData.map(
            (item: {
              id: string;
              snippet: {
                title: string;
                thumbnails: { medium: { url: string } };
              };
            }) => {
              return (
                <div key={item.id}>
                  <img
                    width={320}
                    src={item?.snippet.thumbnails.medium.url}
                    alt="image from youtube"
                  />
                  <div>{item.snippet.title}</div>
                </div>
              );
            }
          )}
      </div>

      <div className="card">
        <button onClick={doFetch}>use fetch</button>
        <p>
          <code>testing youtube API V3</code>
        </p>
      </div>
      <p className="read-the-docs">Click useFetch and watch console</p>
    </>
  );
}

export default App;
