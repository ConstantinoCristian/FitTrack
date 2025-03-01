import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Stats = () => {

  const[data,setData]=React.useState({
    daily_protein:0,
    daily_carbs:0,
    daily_calories:0,
    daily_fats:0
  })
   
  let token=localStorage.getItem("token")    
  
  React.useEffect(()=>{
    if(token){
      getUserData()
    }
  },[token])

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

  const macroData = [
    { name: 'Protein', value: data.daily_protein, color: '#4f46e5' },
    { name: 'Carbs', value:  data.daily_carbs, color: '#eab308' },
    { name: 'Fats', value:  data.daily_fats, color: '#ff6100' },
    { name: 'Calories', value: data.daily_calories, color: '#2dd32d' },
  ];


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Macronutrient Distribution</h3>
          <div className="h-80">
        <> <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                  animationBegin={0}
                 animationDuration={3000} // Reduced from 6000
                  animationEasing="ease-out"
                
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} 
                  
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            </>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Daily Nutrition Summary</h3>
          <div className="space-y-4">
            {macroData.map((macro) => (
              <div key={macro.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">{macro.name}</span>
                  <span className="font-semibold">{macro.value?macro.value:
                      <><i className="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i> </>}g</span>
                </div>
                <div className="w-full overflow-hidden bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${(macro.value / 420) * 100}%`, backgroundColor: macro.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;