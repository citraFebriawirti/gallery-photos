import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPhoto = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [captions, setCaptions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const editPhoto = async (e) => {
    e.preventDefault()
    const datas = {
      imageUrl,
      captions,
      updatedAt: new Date().toLocaleString()
    }
    await fetch(`https://gallery-app-server.vercel.app/photos/${id}`, {
      method: "PATCH", // HTTP method menggunakan PUT
      body: JSON.stringify(datas), // data yang dikirim
      headers: {
        // HTTP headers
        "Content-Type": "application/json", // type data yang dikirim
      },
    })
      .then((res) => res.json())
      .then((json) => {
        navigate('/photos')
        setLoading(false)
      });
  }
  
  useEffect(() => {
    setLoading(true);
    // mengset fetching
    fetch(`https://gallery-app-server.vercel.app/photos/${id}`)
    .then((res) => res.json())
      .then((json) => {
        setImageUrl(json.imageUrl)
        setCaptions(json.captions)
        setLoading(false)
      })
      .catch((error) => {
        // set error
        setError(error);
        // set loading menjadi false
        setLoading(false);
      });
  }, [id]);


  if (error) return <div>Error!</div>;

  return (
    <>
      {loading ? (
        <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
          Loading...
        </h1>
      ) : (
        <div className="containerr">
          <form className="edit-form" onSubmit={editPhoto}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Image Url:
              <input
                className=" w-full mt-5 border-2 border-bg-[#dbdbdb] h-8 rounded-sm mr-2 bg-white lg:w-full"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Captions:
              <input
                className="w-full mt-5 border-2 border-bg-[#dbdbdb] h-8 rounded-sm mr-2 bg-white"
                type="text"
                value={captions}
                data-testid="captions"
                onChange={(e) => setCaptions(e.target.value)}
              />
            </label>
            <input className="text-white w-3/5 mx-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 lg:w-full lg:mx-auto" type="submit" value="Submit" data-testid="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default EditPhoto;
