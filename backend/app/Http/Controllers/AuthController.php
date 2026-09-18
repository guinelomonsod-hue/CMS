<?php

namespace App\Http\Controllers;

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

        return response()->json([
            'message' => 'Login Successfully',
            'token' => $token,
            'user' => Auth::guard('api')->user(),

        ]);

       
    }
}
