<?php

namespace App\Http\Controllers;

use App;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Email;

class AuthController extends Controller
{
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(!$token = Auth::guard('api')->attempt($credentials)){
            return response()->json([
                'message' => "Invalid Email or Password"
            ], 401);
        }

        $user = Auth::guard('api') ->user();
        
        return response()->json([
            'message' => 'Login Successfully',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ],
        ]);
    }
     public function register (Request $request) {
         $validated = $request->validate([
        'first_name' => ['required', 'string', 'max:255'],
        'last_name' => ['required', 'string', 'max:255'],
        'contact_number' => ['required', 'string', 'max:20'],
        'address' => ['required', 'string'],
        'barangay_id' => ['required', 'exists:barangays,id'],
        'email' => ['required', 'email', 'unique:users,email'],
        'password' => ['required', 'min:8', 'confirmed'],
    ]);

    $user = \App\Models\User::create([
        'name' => $validated['first_name'] . ' ' . $validated['last_name'],
        'email' => $validated['email'],
        'password' => $validated['password'],
        'role' => 'citizen',
    ]);
         \App\Models\Citizen::create([
        'user_id' => $user->id,
        'contact_number' => $validated['contact_number'],
        'address' => $validated['address'],
        'barangay_id' => $validated['barangay_id'],
    ]);

    return response()->json([
        'message' => 'Registration successful',
        'user' => [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
        ],
    ], 201);
    }
}