<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    protected $fillable = [
        'department_name',
        'description',
    ];
    public function staff(): HasMany{
        return $this->hasMany(Staff::class);
    }

    public function complaints (): HasMany{
        return $this->hasMany(Complaint::class);
    }
    
}
