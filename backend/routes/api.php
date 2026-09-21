<?php

use App\Http\Controllers\BarangayController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ComplaintController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/barangays', [BarangayController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);

Route::middleware('auth:api')->group(function () {
    Route::post('/complaints', [ComplaintController::class, 'store']);
});