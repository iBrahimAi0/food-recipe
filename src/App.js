import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favorites from "./Pages/Favorites/Favorites";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createContext, useState } from "react";
import "./App.css";

//create context for sharing states with the other components
export const Context = createContext(null);
function App() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);
  const [foodDetails, setFoodDetails] = useState();
  const [favoritesList, setFavoritesList] = useState([]);

  // Async function for fetching the data from api
  async function getRecipes(e) {
    e.preventDefault(); // Prevents the page from reloding after the button is pressed
    try {
      setLoading(true); //For showing the loading message
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data?.data?.recipes) {
        setFoodList(data?.data?.recipes); // Store the fetched data in the state
      }
      setLoading(false);
      setInputValue(""); // Clear the input after pressing the button
    } catch (error) {
      // Catch any error
      console.error("The error is", error); // And log it
    }
  }
  // Function for handling adding/removing items from the favorite List
  const handleFavotites = (currentItem) => {
    let cpyFavorites = [...favoritesList];
    const index = cpyFavorites.findIndex((item) => item.id === currentItem.id);
    if (index === -1) {
      // if index returns -1 that means the item is not in the favorite list and will be added
      cpyFavorites.push(currentItem);
    } else {
      //  else that means it is in the favorite list and will we remived
      cpyFavorites.splice(index, 1);
    }
    setFavoritesList(cpyFavorites); // And updates the favoritesList state
  };

  return (
    // Passing the state into children components
    <Context.Provider
      value={{
        inputValue,
        handleFavotites,
        setInputValue,
        foodList,
        setFoodList,
        loading,
        setLoading,
        getRecipes,
        foodDetails,
        setFoodDetails,
        favoritesList,
      }}
    >
      {/* Routing Part  */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
