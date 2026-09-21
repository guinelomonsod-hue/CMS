<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ComplaintAssignment extends Model
{
    protected $fillable = [
        'complaint_id',
        'staff_id',
        'assigned_date',
        'remarks',
    ];

    protected $casts = [
        'assigned_date' => 'datetime',
    ];

    public function complaint(): BelongsTo {
        return $this->belongsTo(Complaint::class);
    }
    public function staff (): BelongsTo {
        return $this->belongsTo(Staff::class);
    }

}
