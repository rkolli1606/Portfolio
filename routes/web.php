<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Management\CategoryController;
use App\Http\Controllers\Management\MenuController;
use App\Http\Controllers\Management\TableController;
use App\Http\Controllers\Cashier\CashierController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/management',function(){
        return view('management.index');
});


// Route::get('/management/category', [App\Http\Controllers\Management\CategoryController::class, 'index']);
// Route::get('/management/category/create', [App\Http\Controllers\Management\CategoryController::class, 'create']);

Route::controller(CategoryController::class)->group(function () {
    Route::get('/management/category', 'index');
    Route::post('/management/category', 'store');
    Route::get('/management/category/create', 'create');
    Route::get('/management/category/{category}/edit', 'edit');
    Route::put('/management/category/{category}', 'update');
    Route::delete('/management/category/{category}', 'destroy');
});

Route::controller(MenuController::class)->group(function () {
    Route::get('/management/menu', 'index');
    Route::post('/management/menu', 'store');
    Route::get('/management/menu/create', 'create');
    Route::get('/management/menu/{menu}/edit', 'edit');
    Route::put('/management/menu/{menu}', 'update');
    Route::delete('/management/menu/{menu}', 'destroy');
});

Route::controller(TableController::class)->group(function () {
    Route::get('/management/table', 'index');
    Route::post('/management/table', 'store');
    Route::get('/management/table/create', 'create');
    Route::get('/management/table/{table}/edit', 'edit');
    Route::put('/management/table/{table}', 'update');
    Route::delete('/management/table/{table}', 'destroy');
});

Route::controller(CashierController::class)->group(function () {
Route::get('/cashier','index');
Route::get('/cashier/getMenuByCategory/{category_id}','getMenuByCategory');
Route::get('/cashier/getTable','getTables');
Route::post('/cashier/orderFood','orderFood');
Route::get('/cashier/getSaleDetailsByTable/{table_id}','getSaleDetailsByTable');
Route::post('/cashier/confirmOrderStatus','confirmOrderStatus');
Route::post('/cashier/savePayment','savePayment');
Route::get('/cashier/showReceipt/{saleID}','showReceipt');

Route::post('/cashier/deleteSaleDetail','deleteSaleDetail');
});

// Route::get('/cashier','cashier\CashierController@index');
// Route::get('/cashier/getMenuByCategory/{category_id}','cashier\CashierController@getMenuByCategory');
// Route::get('/cashier/getTable','cashier\CashierController@getTables');
// Route::post('/cashier/orderFood','cashier\CashierController@orderFood');
// Route::get('/cashier/getSaleDetailsByTable/{table_id}','cashier\CashierController@getSaleDetailsByTable');
// Route::post('/cashier/confirmOrderStatus','cashier\CashierController@confirmOrderStatus');
// Route::post('/cashier/deleteSaleDetail','cashier\CashierController@deleteSaleDetail');