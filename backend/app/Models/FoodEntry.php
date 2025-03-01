<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodEntry extends Model
{
    use HasFactory;

    protected $fillable=["user_id","protein","carbs","fat","calories","foodname","day"];


    public function user(){
        return $this->belongsTo(User::class);
    }

}
