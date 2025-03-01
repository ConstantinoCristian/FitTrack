import React from "react";

function EditProfile() {
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [goal, setGoal] = React.useState("");

  const [protein, setProtein] = React.useState();
  const [calories, setCalories] = React.useState();
  const [water, setWater] = React.useState("");

  const [getuserGoals, setGetUserGoals] = React.useState("");
  const [getuserStats, setGetUserStats] = React.useState("");

  const [lbs, setLbs] = React.useState(parseFloat(""));
  const [convertedLbs, setConvertedLbs] = React.useState(parseFloat(""));

  const [ft, setFt] = React.useState(parseFloat(""));
  const [inches, setInches] = React.useState(parseFloat(""));
  const [convertedFt, setConvertedFt] = React.useState(parseFloat(""));

  function lbsConverter() {
    let user_input = lbs;

    let result = Math.round(user_input * 0.453592 * 10) / 10;

    setConvertedLbs(result);
  }

  function ftConverter(ft, inches = 0) {
    let cm = ft * 30.48 + inches * 2.54;

    setConvertedFt(Math.round(cm * 10) / 10);
  }

  let token = localStorage.getItem("token");

  async function userStats() {
    let item = { weight, height, goal };
    let result = await fetch("http://localhost:8000/api/userStats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    let data = await result.json();
    if (!result.ok) {
      alert(data.message);
    } else {
      alert("Updates saved");
    }
  }

  async function userGoals() {
    let item = { protein, calories, water };
    let result = await fetch("http://localhost:8000/api/userGoals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    let data = await result.json();
    if (!result.ok) {
      alert(data.message);
    } else {
      alert("Updates saved");
    }
  }

  React.useEffect(() => {
    if (token) {
      getUserGoals();
    }
  }, [token]);

  async function getUserGoals() {
    let result = await fetch("http://localhost:8000/api/getuserGoals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await result.json();
    setGetUserGoals(data);
    console.warn({
      "user goals": data,
    });
  }

  React.useEffect(() => {
    if (token) {
      getUserStats();
    }
  }, [token]);

  async function getUserStats() {
    let result = await fetch("http://localhost:8000/api/getuserStats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await result.json();
    setGetUserStats(data);
    console.warn({
      "user stats": data,
    });
  }

  return (
    <>
      <div
        className="
          sm:grid grid-cols-1 
         
          p-5
         lg:flex  border-2 justify-center border-black lg:gap-5"
      >
        <div
          className="
    flex flex-col  /* Base styles for all screens */
    items-center
    gap-4
    p-4
    border-2
    border-red-50
    w-full
    /* Responsive styles */
    sm:border-green-500
    lg:w-2/4
          "
        >
          <h1 className="font-bold text-pretty m-auto ">User Stats</h1>
          <label htmlFor="weight">Weight(kg)</label>
          <input
            placeholder={
              getuserStats.weight ? getuserStats.weight : "Nothing set...yet"
            }
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            type="number"
            name="weight"
          />

          <label htmlFor="height">Height(cm)</label>
          <input
            placeholder={
              getuserStats.height ? getuserStats.height : "Nothing set...yet"
            }
            value={height}
            type="number"
            name="height"
            onChange={(e) => setHeight(e.target.value)}
          />

          <label htmlFor="goal">Goal</label>

          <select
            name="goal"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
          >
            <option value="Gain Weight">Gain Weight</option>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Maintain Weight">Maintain Weight</option>
          </select>

          <button
            onClick={userStats}
            className="p-1 bg-blue-400 border-white border-2 border-so
            text-white hover:bg-blue-700 rounded-r-md
            transition-all
            "
          >
            Apply Changes
          </button>
        </div>
        <div
          className="border-2 border-solid border-black
          flex flex-col  gap-4 items-center  
          "
        >
          <h1 className="text-pretty font-bold">Weight measuremet converter</h1>
          <input
            type="number"
            placeholder="lbs"
            onChange={(e) => setLbs(e.target.value)}
            value={lbs}
          />
          <h1 className="text-gray-500">Convert lbs to kg</h1>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={lbsConverter}
          >
            Convert
          </button>
          <h2>{convertedLbs ? `${convertedLbs} kg` : ""}</h2>
        </div>

        <div
          className="border-2 border-solid border-black
          flex flex-col  gap-4 items-center  
          "
        >
          <h1 className="text-pretty font-bold">Height measuremet converter</h1>
          <input
            type="number"
            placeholder="ft"
            onChange={(e) => setFt(e.target.value)}
            value={ft}
          />
          <input
            type="number"
            placeholder="inches"
            onChange={(e) => setInches(e.target.value)}
            value={inches}
          />
          <h2 className="text-gray-500">Convert ft to cm</h2>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => ftConverter(ft, inches)}
          >
            Convert
          </button>
          <h2>{convertedFt ? `${convertedFt} cm` : ""}</h2>
        </div>
      </div>

      <div
        className="
         p-5
        flex flex-col border-2 justify-center border-blue gap-4"
      >
        <h1 className="font-bold text-pretty m-auto ">User Daily Goals</h1>

        <label htmlFor="protein">Protein (Grams)</label>
        <input
          placeholder={
            getuserGoals.protein ? getuserGoals.protein : "Nothing set...yet"
          }
          onChange={(e) => setProtein(e.target.value)}
          value={protein}
          type="number"
          name="weight"
        />

        <label htmlFor="calories">Calories</label>
        <input
          placeholder={
            getuserGoals.calories ? getuserGoals.calories : "Nothing set...yet"
          }
          value={calories}
          type="number"
          name="calories"
          onChange={(e) => setCalories(e.target.value)}
        />

        <label htmlFor="goal">Water (Liters)</label>

        <input
          placeholder={
            getuserGoals.water ? getuserGoals.water : "Nothing set...yet"
          }
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />

        <button
          onClick={userGoals}
          className="p-1 bg-green-400 border-white border-2 border-soid 
          text-white hover:bg-green-700 rounded-r-md
          transition-all
          "
        >
          Apply Changes
        </button>
      </div>
    </>
  );
}

export default EditProfile;
