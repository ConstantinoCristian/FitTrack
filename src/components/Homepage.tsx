import React, { useState } from 'react';
import { Plus, TrendingUp, Activity, Dumbbell, Apple } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { Link } from 'react-router-dom';
function HomePage() {
  // Sample data for charts
  const barData = [
    { name: 'Mon', protein: 40, carbs: 60, fat: 20 },
    { name: 'Tue', protein: 30, carbs: 50, fat: 25 },
    { name: 'Wed', protein: 45, carbs: 70, fat: 15 },
    { name: 'Thu', protein: 35, carbs: 55, fat: 22 },
    { name: 'Fri', protein: 50, carbs: 65, fat: 18 },
    { name: 'Sat', protein: 25, carbs: 45, fat: 30 },
    { name: 'Sun', protein: 42, carbs: 58, fat: 24 },
  ];

  const pieData = [
    { name: 'Protein', value: 35, color: '#8884d8' },
    { name: 'Carbs', value: 45, color: '#82ca9d' },
    { name: 'Fat', value: 20, color: '#ffc658' },
  ];

  const goalData = [
    { name: 'Completed', value: 65, color: '#00C49F' },
    { name: 'Remaining', value: 35, color: '#EEEEEE' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-indigo-600">FitTrack</h1>
        </div>
        <div className="flex gap-4">
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 mb-12 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Track Your Fitness Journey</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Monitor your nutrition, workouts, and progress all in one place. 
          Achieve your fitness goals with personalized insights and tracking.
        </p>
        <Link  to="/register">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
          Get Started
        </button>
        </Link>
      </div>

      {/* Chart Showcase Section */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-16">
        {/* Weekly Nutrition Chart */}
        <div className="flex flex-col items-center border-2 border-solid border-gray-200 shadow-lg rounded-xl bg-white p-6 gap-5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-800">Weekly Nutrition Intake</h2>
            <Apple className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="protein" fill="#8884d8" name="Protein (g)" />
                <Bar dataKey="carbs" fill="#82ca9d" name="Carbs (g)" />
                <Bar dataKey="fat" fill="#ffc658" name="Fat (g)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Macronutrient Distribution */}
        <div className="flex flex-col items-center border-2 border-solid border-gray-200 shadow-lg rounded-xl bg-white p-6 gap-5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-800">Today's Macros</h2>
            <Dumbbell className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Goal Progress */}
        <div className="flex flex-col items-center border-2 border-solid border-gray-200 shadow-lg rounded-xl bg-white p-6 gap-5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-800">Goal Progress</h2>
            <TrendingUp className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={goalData}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {goalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold text-indigo-600">65%</p>
              <p className="text-gray-600">Completed</p>
            </div>
          </div>
        </div>

        {/* Daily Stats */}
        <div className="flex flex-col items-center border-2 border-solid border-gray-200 shadow-lg rounded-xl bg-white p-6 gap-5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl font-semibold text-gray-800">Daily Stats</h2>
            <Plus className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-gray-600">Calories</p>
              <p className="text-2xl font-bold text-indigo-600">1,850</p>
              <p className="text-sm text-gray-500">of 2,200 goal</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-gray-600">Protein</p>
              <p className="text-2xl font-bold text-indigo-600">120g</p>
              <p className="text-sm text-gray-500">of 140g goal</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-gray-600">Carbs</p>
              <p className="text-2xl font-bold text-indigo-600">180g</p>
              <p className="text-sm text-gray-500">of 220g goal</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <p className="text-gray-600">Fat</p>
              <p className="text-2xl font-bold text-indigo-600">65g</p>
              <p className="text-sm text-gray-500">of 70g goal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-indigo-600 py-16 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who have already achieved their fitness goals with FitTrack.
          </p>
          <Link to="/register">
          <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105">
            Get Started Today
          </button>
          </Link>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
}

export default HomePage;