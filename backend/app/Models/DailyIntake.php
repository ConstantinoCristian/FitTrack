<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyIntake extends Model
{
    use HasFactory;

    protected $fillable =
     ["user_id","daily_protein","daily_calories","date","daily_water","daily_carbs","foods"];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
