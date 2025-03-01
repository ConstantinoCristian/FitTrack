<?php

namespace App\Http\Controllers;
use App\Models\DailyIntake;
use App\Models\FoodEntry;
use App\Models\UserGoal;
use App\Models\UserStat;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;

class getUserData extends Controller
{
    function getUserData(Request $reqeust){

        $user=auth()->user();;

        $dailyIntake=DailyIntake::where("user_id",$user->id)
            ->whereDate("created_at",now()->toDateString())
            ->select("daily_protein","daily_calories","daily_water","daily_fats","daily_carbs","foods")
            ->first();
        
        return response()->json($dailyIntake);
        
    }

    function getLogFoodData(Request $request){

        request()->validate([
            "foodname" => "required|string"
        ]);

        $loggedFoods=FoodEntry::where("foodname",$request->input("foodname"))
        ->select("calories","protein","carbs","fat")
        ->first();

        return response()->json($loggedFoods);
    }


    function getUserGoals(Request $reqeust){
        $user=Auth::user();

        $goals=UserGoal::where("user_id",$user->id)
            ->select("protein","calories","water")
            ->first();
        return response()->json($goals);
        }
    

    function getUserStats(Request $request){
        $user=Auth::user();

        $goals=UserStat::where("user_id",$user->id)
        ->select("weight","height","goal")
        ->first();

        return response()->json($goals);
    }


    public function getLast7Entries(Request $reqeust){

        $user=Auth::user();

        $entries=DailyIntake::where("user_id",$user->id)
            ->orderBy("date","desc")
            ->limit(7)
            ->get();

        $formattedData=$entries->map(function($entry){
            return [
                "date"=>Carbon::parse($entry->date)->format("D"),
                "calories"=>$entry->daily_calories,
                "protein"=>$entry->daily_protein
                
            ];
        });

        return response()->json($formattedData);
     } 


}
