<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Status;
use App\Models\Complaint;

class ComplaintController extends Controller
{
        public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => ['required', 'exists:categories,id'],
            'subject' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'location' => ['required', 'string'],
        ]);

        $user = auth('api')->user();

        $citizen = $user->citizen;

        if (!$citizen) {
            return response()->json([
                'message' => 'Citizen profile not found.'
            ], 404);
        }

        $pendingReview = Status::where(
            'status_name',
            'Pending Review'
        )->first();

        $complaint = Complaint::create([
            'citizen_id' => $citizen->id,
            'category_id' => $validated['category_id'],
            'status_id' => $pendingReview->id,
            'subject' => $validated['subject'],
            'description' => $validated['description'],
            'location' => $validated['location'],
            'date_submitted' => now(),
        ]);

        return response()->json([
            'message' => 'Complaint submitted successfully.',
            'complaint' => $complaint,
        ], 201);
    }
}