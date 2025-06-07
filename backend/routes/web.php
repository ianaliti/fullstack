<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProductController::class, 'index']);

// Route::get('/{any}', function () {
//     return view('welcome');
// })->where('any', '.*');