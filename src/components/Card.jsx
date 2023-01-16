import { Link } from "react-router-dom";

const Card = ({ photo, deletePhoto }) => {
  return (
    <div className="gridd ">
      <div className=" my-3 p-3 w-3/5 mx-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 lg:w-full lg:mx-0">
      <img className=" w-90 object-cover" src={photo.imageUrl} alt={photo.id} />
      <div className=" bg-white p-2">
        <p className=" text-base bg-white mb-4" data-testid="photo-caption">
          {photo.captions}
        </p>
        <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-500 focus:outline-none dark:focus:ring-blue-800">
          <Link to={`${photo.id}`}>Edit</Link>
        </button>
        <button
          data-testid="delete-btn"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={() => deletePhoto(photo.id)}
        >
          Delete
        </button>
      </div>
    </div>
   </div>
  );
};

export default Card;
