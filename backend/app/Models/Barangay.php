<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Barangay extends Model
{
    protected $fillable = [
        'barangay_name',
    ];

    public function citizen (): HasMany{
        return $this->hasMany(Citizen::class);
    }
    public function complaints(): HasMany{
        return $this->hasMany(Complaint::class);
    }
}
