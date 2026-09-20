<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run(): void
    {
        $categories = [
            ['category_name' => 'Road', 'description' => 'Issues involving roads, potholes, and road conditions.'],
            ['category_name' => 'Garbage', 'description' => 'Complaints involving garbage collection and waste disposal.'],
            ['category_name' => 'Drainage', 'description' => 'Issues involving drainage systems and flooding.'],
            ['category_name' => 'Streetlight', 'description' => 'Problems involving streetlights and public lighting.'],
            ['category_name' => 'Noise', 'description' => 'Complaints involving excessive or disruptive noise.'],
            ['category_name' => 'Public Safety', 'description' => 'Complaints involving public safety concerns.'],
            ['category_name' => 'Other', 'description' => 'Other concerns not covered by the listed categories.'],
        ];

        foreach ($categories as $category) {
            DB::table('categories')->updateOrInsert(
                ['category_name' => $category['category_name']],
                [
                    'description' => $category['description'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
