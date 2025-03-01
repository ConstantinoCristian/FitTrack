<?php

namespace App\Http\Controllers;

use App\Models\UserGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class UserGoals extends Controller
{
    //

    function userGoals(Request $request){
        request()->validate([
            "protein"=>"required|numeric|",
            "calories"=>"required|numeric",
            "water"=>"required|numeric|max:255"
        ],[
            "protein.required"=>"Please fill out the remaining fields",
            "calories.required"=>"Please fill out the remaining fields",
            "water.required"=>"Please fill out the remaining fields",
        ]);

        $user=auth()->user();;

        $protein=$request->input("protein");
        $calories=$request->input("calories");
        $water=$request->input("water");
        

        $result=UserGoal::updateOrCreate([
            "user_id"=>$user->id
        ], [ "protein"=>$protein ,"calories"=>$calories ,"water"=>$water ]);

        return response()->json([
            "data"=>$result
        ],201);

    }
}
