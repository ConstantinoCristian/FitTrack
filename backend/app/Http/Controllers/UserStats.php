<?php

namespace App\Http\Controllers;

use App\Models\UserStat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class UserStats extends Controller
{
    
    //

    public function userStats(Request $request){
        request()->validate([
            "height"=> 'required|integer|max:255',
            "weight"=> 'required|integer|max:255',
            "goal"=> 'required|string|max:255',
            
        ],[
            "height.required"=>"Please fill out the remaining fields",
            "weight.required"=>"Please fill out the remaining fields",
            "goal.required"=>"Please fill out the remaining fields",
        ] );


        $user=auth()->user();

        $height=$request->input("height");
        $weight=$request->input("weight");
        $goal=$request->input("goal");



       $userStat= UserStat::updateOrCreate(
    ["user_id"=>$user->id],
["height"=>$height,"weight"=>$weight,"goal"=>$goal]); //this is how you update an entry in the data base
                                                            //instead of creating a new one 

        return response()->json([
            "data"=>$userStat
        ],201);
    }
}
