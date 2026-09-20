<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrioritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $priorities = [
            [
                'priority_name' => 'Low',
                'description' => 'The complaint does not require immediate attention.',
            ],
            [
                'priority_name' => 'Normal',
                'description' => 'The complaint requires regular processing.',
            ],
            [
                'priority_name' => 'High',
                'description' => 'The complaint requires prompt attention.',
            ],
            [
                'priority_name' => 'Urgent',
                'description' => 'The complaint requires immediate attention due to potential risk or serious impact.',
            ],
        ];

        foreach ($priorities as $priority) {
            DB::table('priorities')->updateOrInsert(
                ['priority_name' => $priority['priority_name']],
                [
                    'description' => $priority['description'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
