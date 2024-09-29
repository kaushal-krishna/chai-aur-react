import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/kaushal-krishna")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const data = useLoaderData();

  return (
    <center>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-3xl w-9/12">
        <div className="flex flex-wrap flex-row w-full">
          <img
            src={data.avatar_url}
            width="300"
            className="m-4 p-4 border-none rounded-full"
          />
          <div className="flex flex-wrap flex-col py-20 items-start justify-evenly">
            <b>{data.name}</b>
            <div>{data.bio}</div>
            <div>{data.followers} followers</div>
            <div> {data.following} following</div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  console.log("hi");
  const response = await fetch("https://api.github.com/users/kaushal-krishna");
  return response.json();
};
