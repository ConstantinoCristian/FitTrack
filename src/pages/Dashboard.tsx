import React from "react";
import { Plus, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import "./icon.css"
import HomePage from "../components/Homepage";
const Dashboard = () => {
  const [data, setData] = React.useState("");
  const token = localStorage.getItem("token");

  const [getuserGoals, setGetUserGoals] = React.useState("");
  const [getuserStats, setGetUserStats] = React.useState("");

  const [weeklyData, setWeeklyData] = React.useState([]);

  const mockData = [
    { name: data.date, calories: data.calories, protein: data.protein },
    { name: "Tue", calories: 2300, protein: 160 },
    { name: "Wed", calories: 1950, protein: 140 },
    { name: "Thu", calories: 2200, protein: 155 },
    { name: "Fri", calories: 2000, protein: 145 },
  ];

  React.useEffect(() => {
    if (token) {
      getLast7Entries();
    }
  }, [token]);

  async function getLast7Entries() {
    let result = await fetch("http://localhost:8000/api/getLast7Entries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await result.json();

     console.log("7 RESPONSE: ",data) 

    let formattedData = data.map((entry) => ({
      name: entry.date,
      protein: entry.protein,
      calories: entry.calories,
    }));

    setWeeklyData(formattedData);
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
    <div className="space-y-6">
      {localStorage.getItem("token") ? (
        <>
          <div className="flex">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="ml-auto flex justify-center gap-10 ">
              <button className=" bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
                <Plus className="w-5 h-5" />
                <Link to="/LogFood">
                  <span>Log Food</span>
                </Link>
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
                <Plus className="w-5 h-5" />
                <Link to="/LogWater">
                  <span>Log Water</span>
                </Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                  Calories Today
                </h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold mt-2">
                {data.daily_calories
                ?data.daily_calories:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> }/{getuserGoals.calories
                ?getuserGoals.calories:<i id="icon">No goal...yet</i>}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                  Protein Today
                </h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-3xl font-bold mt-2">
                {data.daily_protein?data.daily_protein:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> }/{getuserGoals.protein
                ?getuserGoals.protein:<i id="icon">No goal...yet</i>}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">
                  Water Today
                </h3>
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-3xl font-bold mt-2">
                {data.daily_water?`${data.daily_water}L`:<i id='icon' class="fa-solid fa-fade  fa-xmark fa-xl"></i> }/{getuserGoals.water?getuserGoals.water+"L":<i id="icon">No goal...yet</i>}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Weekly Progress
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="calories" fill="#4f46e5" />
                  <Bar dataKey="protein" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
};

export default Dashboard;
