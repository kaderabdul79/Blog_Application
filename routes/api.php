<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisteredUserController::class, 'store']);
Route::post('login', [AuthenticatedSessionController::class, 'store']);

// categories
Route::middleware('auth:sanctum')->post('categories/create', [CategoryController::class, 'store']);
Route::get('categories', [CategoryController::class, 'index']);
Route::middleware('auth:sanctum')->get('categories/{category}', [CategoryController::class, 'show']);
Route::middleware('auth:sanctum')->put('categories/{category}', [CategoryController::class, 'update']);

Route::middleware('auth:sanctum')->post('logout', [AuthenticatedSessionController::class, 'destroy']);