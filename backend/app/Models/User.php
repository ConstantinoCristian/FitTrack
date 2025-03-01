<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\FoodEntry;
use App\Models\DailyIntake;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    public function FoodEntries(){
        return $this->hasMany(FoodEntry::class);
    }

    public function dailyIntakes(){
        return $this->hasMany(DailyIntake::class);
    }

    public function UserStats(){
        return $this->hasMany(UserStat::class);
    }


    public function UserGoals(){
        return $this->hasMany(UserGoal::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    public $timestamps=false;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
