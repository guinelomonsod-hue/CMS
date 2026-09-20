<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Priority extends Model
{
    protected $fillable = [
        'priority_name',
        'description',
    ];
    public function complaints (): HasMany{
        return $this->hasMany(Complaint::class);
    }
}
