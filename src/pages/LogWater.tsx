import React from "react";

function LogWater() {
  const [water, setWater] = React.useState("");
  const [unit, setUnit] = React.useState("ML");

  let token = localStorage.getItem("token");

  async function logWater() {
    let convertedWater = parseFloat(water);

    if (unit === "ML") {
      convertedWater = convertedWater / 1000;
    }

    let item = { water: convertedWater };
    try {
      let result = await fetch("http://localhost:8000/api/logWater", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      let data = await result.json();
      if (data) {
        localStorage.setItem("daily_water", data.daily_water);
      }
      setWater("")
      console.log({ water: data.daily_water });
    } catch (error) {
      console.error("Error logging water:", error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center gap-6 p-6 border-indigo-600 border-2 rounded-lg bg-white shadow-lg">
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
          <h1 className="font-bold text-2xl text-indigo-700">Log Water Intake</h1>

          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-between p-3 border-indigo-200 border-2 rounded-lg bg-indigo-50">
              <label htmlFor="units" className="font-medium text-indigo-700">
                Units:
              </label>
              <select
                onChange={(e) => setUnit(e.target.value)}
                value={unit}
                id="units"
                className="border border-indigo-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="units"
              >
                <option value="ML">Milliliters (ML)</option>
                <option value="L">Liters (L)</option>
              </select>
            </div>

            <input
              type="number"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              min="0"
             placeholder={`Amount of ${unit=="ML"?"ML":"L"}`}
            />

            <button
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={logWater}
            >
              Log Water Intake
            </button>
            <div className="text-gray-400">
              <p>1L=1000ml</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogWater;
