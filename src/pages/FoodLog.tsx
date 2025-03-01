import React from "react";

function FoodLog() {
  const [foodname, setFoodName] = React.useState("");
  const [data, setData] = React.useState("");
  const [foods, setFoods] = React.useState([]);
  const [res, setRes] = React.useState("");
  const[foodId,setFoodId]=React.useState(null)
  const[foodInfo,setFoodInfo]=React.useState({})

  let token = localStorage.getItem("token");

  async function logFood() {
    let item = { foodname };

    let result = await fetch("http://localhost:8000/api/logFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });

    let data = await result.json();

    console.log({
      foodname: foodname,
      protein: data.daily_protein,
      calories: data.daily_calories,
      carbs: data.daily_carbs,
    });

    if (!data.daily_protein && !data.daily_calories && !data.daily_carbs) {
      setRes("Something didnt work..");
    } else {
      setRes("Added Succesfully");
      window.location.reload();
    }
  }

  React.useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  async function getUserData() {
    let result = await fetch("http://localhost:8000/api/getUserData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await result.json();
    setData(data);
    setFoods(JSON.parse(data.foods || "[]"));
  }

  async function getFoodInfo(foodname, index) {
    try {
      let result = await fetch("http://localhost:8000/api/foodInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ foodname }),
      });
      
      let data = await result.json();
      console.log("food-INFO data:", data);
      
      setFoodInfo(prev=>({
        ...prev,
        [index]:data
      }))

      setFoodId(foodId==index ? null : index)
  
    } catch (error) {
      console.error("Error fetching food info:", error);
    }
  }

  return (
    <div>
      <div
        className="flex justify-center items-center gap-6 p-6 border-indigo-600 border-2 rounded-lg bg-white shadow-lg
      flex-col
      "
      >
        <h1 className="font-bold text-pretty text-2xl">Log your food</h1>
        <h1 className="font-medium mt--10 text-pretty text-sm text-gray-400">
          Along with the quantity as it shows in the example
        </h1>
        <input
          className="border border-indigo-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          value={foodname}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="e.g 500g of steak"
        />
        <div>
          <h1 className="text-pretty text-blue-700">{res}</h1>
        </div>
        <button
          className="border-2 border-indigo-500 rounded-lg p-1 
        hover:bg-indigo-500 transition-all"
          onClick={logFood}
        >
          Submit
        </button>
      </div>

      <div
        className="border-b-gray-700 border-2 border-solid
      shadow-md shadow-gray-600 p-2 rounded-md
      "
      >
        <h1 className="text-gray-400 font-bold text-pretty mt-2">
          What you've eaten today
        </h1>
        {Array.isArray(foods) &&
          foods.map((food, index) => (
            <div key={index} className="food-item mb-2">
              <button 
                onClick={() => getFoodInfo(food.foodname, index)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                {food.foodname}
              </button>
              
              {foodId===index && foodInfo[index] &&(
                <div className="ml-4 p-2 bg-gray-100 rounded mt-1">
                  <p>Calories: {foodInfo[index].calories}g</p>
                  <p>Protein: {foodInfo[index].protein}g</p>
                  <p>Fat: {foodInfo[index].fat}g</p>
                  <p>Carbs: {foodInfo[index].carbs}g</p>
                </div>
             )  }
            </div>
          ))}
      </div>
    </div>
  );
}

export default FoodLog;