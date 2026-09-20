<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    public function run(): void
    {
        $statuses = [
            'Pending Review',
            'Under Review',
            'Assigned',
            'In Progress',
            'Resolved',
            'Closed',
        ];

        foreach ($statuses as $status) {
            DB::table('statuses')->updateOrInsert(
                ['status_name' => $status],
                [
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
