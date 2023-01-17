import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState("asc");
  const [submited, setSubmited] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePhoto = (id) => {
    // methode DELETE
    fetch(`https://gallery-app-server.vercel.app/photos/${id}`, {
      method: "DELETE", // HTTP method menggunakan DELETE
    })
      .then((res) => res.json())
      .then((deletedTos) => {
        setPhotos(deletedTos => {
      return deletedTos.filter(photo => photo.id !== id)
    })
  });
  };

  useEffect(() => {
    setLoading(true);
      // mengset data dengan url 
    const SetParams = { _sort: "id", _order: `${sort}`, q: `${submited}` }
    const URLParams = new URLSearchParams(SetParams);
      fetch(`https://gallery-app-server.vercel.app/photos?${URLParams}`)
        .then((res) => res.json())
        .then((json) => {
          setPhotos(json);
          setLoading(false);
        })
        .catch((error) => {
          // set error
          setError(error);
          // set loading menjadi false
          setLoading(false);
        });
  }, [sort, submited]);

  useEffect(() => {
    setLoading(true);
    // mengset data dengan url 
    //https://api.jsonbin.io/v3/b/63bfc5de01a72b59f2489428
    //  fetch("http://localhost:3001/photos/")
    fetch("https://gallery-app-server.vercel.app/photos/", {
      headers: {
        'Content-Type': 'application/json',
        "X-Master-Key": "$2b$10$CpJm5lUWrufMA3mPf/cOYewtRYHB6.T.dsk2Fhky6H7q.Pytywn2q"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     })
     .then((res) => res.json())
     .then((json) => setPhotos(json));
      setLoading(false)
  }, []);

  if (error) return <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }} >Error!</h1>;

  return (
    <>
      <div className="containerr">
        <div className="flex justify-center lg:mr-0 lg:justify-between ">
          <select
            onChange={(e) => setSort(e.target.value)}
            data-testid="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mr-12 lg:mr-0 lg:w-32"
            style={{}}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form className="flex items-center"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
            }}>
            
            <input
              type="text"
              data-testid="search"
              onChange={(e) => setSearch(e.target.value)}
              className=" self-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  md:ml-10"/>
           
            <button type="submit" value="Search" data-testid="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="content">
          {loading ? (
            <h1
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              Loading...
            </h1>
          ) : (
            photos.map((photo) => {
              return (
                <Card key={photo.id} photo={photo} deletePhoto={deletePhoto} />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
