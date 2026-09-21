<?php

namespace App\Http\Controllers;

use App\Models\Barangay;
use Illuminate\Http\Request;

class BarangayController extends Controller
{
    public function index () {
        return  response()->json(
            Barangay::orderBy('barangay_name')->get()
        );
    }
}
