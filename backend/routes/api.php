<?php

use App\Http\Controllers\Food;
use App\Http\Controllers\getUserData;
use App\Http\Controllers\UserGoals;
use App\Http\Controllers\UserStats;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->post('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});


Route::middleware('auth:sanctum')->post('/logFood', [Food::class, 'logFood']);
Route::middleware('auth:sanctum')->get('/getUserData', [getUserData::class, 'getUserData']);
Route::middleware('auth:sanctum')->post('/logWater', [Food::class, 'logWater']);
Route::middleware('auth:sanctum')->post('/userStats', [UserStats::class, 'userStats']);
Route::middleware('auth:sanctum')->post('/userGoals', [UserGoals::class, 'userGoals']);
Route::middleware('auth:sanctum')->get('/getuserStats', [getUserData::class, 'getUserStats']);
Route::middleware('auth:sanctum')->get('/getuserGoals', [getUserData::class, 'getUserGoals']);
Route::middleware('auth:sanctum')->get('/getLast7Entries', [getUserData::class, 'getLast7Entries']);
Route::post("/foodInfo",[getUserData::class,"getLogFoodData"]);