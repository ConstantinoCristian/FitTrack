<?php

namespace App\Http\Controllers;
use App\Models\DailyIntake;
use App\Models\FoodEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; 
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class Food extends Controller
{
    //
    public function logFood(Request $request)
    {
        $request->validate([
            "foodname" => "required|string"
        ]);

        $food = $request->input("foodname");
        $user = auth()->user();;

        // Fetch API response
        $apiResponse = Http::withHeaders([
            "X-Api-Key" => env("API_KEY")
        ])->get("https://api.calorieninjas.com/v1/nutrition", [
            "query" => $food
        ]);

        if (!$apiResponse->successful()) {
            return response()->json(["error" => "Could not connect to the API"], 500);
        }

        $foodData = $apiResponse->json();
        if (empty($foodData["items"])) {
            return response()->json(["error" => "Food not found"], 404);
        }

        $item = $foodData["items"][0];


        // Save food entry
        FoodEntry::create([
            "user_id" => $user->id,
            "foodname" => $food,
            "calories" => $item["calories"],
            "protein" => $item["protein_g"],
            "carbs" => $item["carbohydrates_total_g"],
            "fat" => $item["fat_total_g"]
        ]);

       
        $today = Carbon::today();
    

        $dailyIntake = DailyIntake::firstOrCreate(
            ["user_id" => $user->id, "date" => $today->toDateString(), ],
            ["daily_calories" => 0, "daily_protein" => 0,"daily_carbs"=>0,
            "daily_fats"=>0,  "foods"=>json_encode([])] 
        );

        $existingFoods=json_decode($dailyIntake->foods,true) ?? [];

        $newFood=[
            "foodname"=>$request->input("foodname")
        ];

        $existingFoods[]=$newFood;



        // Update daily intake values
        $dailyIntake->increment("daily_calories", $item["calories"]);
        $dailyIntake->increment("daily_protein", $item["protein_g"]);
        $dailyIntake->increment("daily_carbs",$item["carbohydrates_total_g"]);
        $dailyIntake->increment("daily_fats",$item["fat_total_g"]);

        $dailyIntake->update(["foods"=>json_encode($existingFoods)]);

        return response()->json($dailyIntake, 200);
    }




    public function logWater(Request $request){
        $user=Auth::id();

        $request->validate([
            "water"=>"required|numeric|max:255"
        ]);

        $water=$request->water;

        $today=Carbon::today()->toDateString();

        $dailyWater=DailyIntake::firstOrCreate(
            ["user_id"=>$user,"date"=>$today],
            ["daily_protein"=>0,"daily_calories"=>0,"daily_water"=>0,
          ]
        );




        $dailyWater->increment("daily_water",$water);

        return response()->json($dailyWater);
    }


    



}
