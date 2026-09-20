<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Citizen extends Model
{
    protected $fillable = [
        'user_id',
        'contact_number',
        'address',
        'barangay_id',
    ];

    public function user (): BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function barangay(): BelongsTo{
        return $this->belongsTo(Barangay::class);
    }

    public function complaints (): HasMany{
        return $this->hasMany(Complaint::class);
    }
    public function feedback (): HasMany{
        return $this->hasMany(Feedback::class);
    }
}
