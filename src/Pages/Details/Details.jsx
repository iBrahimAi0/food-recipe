import { useContext, useEffect } from "react";
import { FaHeartCirclePlus, FaHeartCircleMinus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import "./Details.css";

const Details = () => {
  // This allows to take the current id from the search bar
  const { id } = useParams();

  const { foodDetails, setFoodDetails, handleFavotites, favoritesList } =
    useContext(Context);

  //Asynchronous function to fetch the details data from the api
  useEffect(() => {
    const getFoodDetails = async () => {
      try {
        const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data?.data) {
          setFoodDetails(data?.data?.recipe);
        }
      } catch (error) {
        console.error("The error is", error);
      }
    };
    getFoodDetails();
  }, [id, setFoodDetails]);

  return (
    <div>
      <div className="details-back">
        <p>generic information</p>
      </div>
      <div className="details-main">
        {foodDetails ? (
          <>
            <div className="details-image">
              <img src={foodDetails?.image_url} alt={foodDetails?.title} />
            </div>

            <div className="detatils-title">
              <h2>{foodDetails.title}</h2>
              <p>{foodDetails.publisher}</p>
              <div className="details-buttons">
                <button>
                  <a href={foodDetails?.source_url}>For More Information</a>
                </button>

                <button
                  className="heart-icon"
                  onClick={() => {
                    handleFavotites(foodDetails);
                  }}
                >
                  {" "}
                  {/* For Changing the icon */}
                  {favoritesList.findIndex(
                    (item) => item.id === foodDetails.id
                  ) !== -1 ? (
                    <FaHeartCircleMinus />
                  ) : (
                    <FaHeartCirclePlus className="green" />
                  )}
                </button>
              </div>
              <ul>
                <span className="ingredients-title">Ingredients:</span>
                {foodDetails?.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="ingredients-item">
                      {ingredient.quantity} <strong>{ingredient.unit} </strong>
                      {ingredient.description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
