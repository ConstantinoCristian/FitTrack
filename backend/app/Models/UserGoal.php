<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGoal extends Model
{
    use HasFactory;

    protected $fillable=["user_id","protein","calories","water"];


    public function user(){
        return $this->belongsTo(User::class);
    }
}
