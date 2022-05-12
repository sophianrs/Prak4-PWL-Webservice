<?php

use App\Http\Controllers\api\CommentController;
use App\Http\Controllers\API\ProjectsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('projects', [ProjectsController::class, 'index']);
Route::post('detailProject', [CommentController::class, 'store']);
Route::get('detailProject', [CommentController::class, 'index']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
