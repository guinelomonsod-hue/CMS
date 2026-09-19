<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangaySeeder extends Seeder
{
    
    public function run(): void
    {
        $barangays = [
             'Baluarte',
            'Casinglot',
            'Gracia',
            'Mohon',
            'Natumolan',
            'Poblacion',
            'Rosario',
            'Santa Ana',
            'Santa Cruz',
            'Sugbongcogon',
        ];
        foreach ($barangays as $barangay) {
            DB::table('barangays') ->updateOrInsert(
                ['barangay_name' => $barangay],
                ['created_at' => now(), 'update_at' =>now()]
            );
        }
    }
}
