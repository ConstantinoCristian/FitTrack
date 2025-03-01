<?php


namespace App\Http\Controllers;
use App\Models\User; //manualy imported#
use Illuminate\Validation\ValidationException; //manually imported
use Illuminate\Support\Facades\Hash; //manually imported
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:9|regex:/[A-Z]/|regex:/[0-9]/',
             
        ],[
            "email.unique"=>"This email is already taken",
            "password.min"=>"The password must be min 9 chars long",
            "password.regex"=>"The password must include at least 1 number and 1 uppercae letter"
            
        ]);

       

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user], 201);

        
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials']
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user]);
    }

}
