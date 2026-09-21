<?php

namespace App\Models;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Complaint extends Model
{
    protected $fillable = [
        'citizen_id',
        'category_id',
        'priority_id',
        'status_id',
        'department_id',
        'barangay_id',
        'resolution_level',
        'subject',
        'description',
        'location',
        'date_submitted',
        'date_resolved',
    ];
    protected $casts = [
        'date_submitted' => 'datetime',
        'date_resolved' => 'datetime',
    ];

    public function citizen (): BelongsTo {
        return $this->belongsTo(Citizen::class);
    }
    public function category (): BelongsTo {
        return $this->belongsTo(Category::class);
    }
    public function department (): BelongsTo {
        return $this->belongsTo(Department::class);
    }
    public function priority (): BelongsTo {
        return $this->belongsTo(Priority::class);
    }
    
    public function status (): BelongsTo {
        return $this->belongsTo(Status::class);
    }

    public function barangay (): BelongsTo {
        return $this->belongsTo(Status::class);
    }
    public function assignments (): HasMany{
        return $this->hasMany(ComplaintAssignment::class);
    }
    public function updates (): HasMany{
        return $this->hasMany(ComplaintUpdate::class);
    }
    public function attachments (): HasMany{
        return $this->hasMany(Attachment::class);
    }
    public function notifications (): HasMany{
        return $this->hasMany(Notification::class);
    }
    public function feedback(): HasOne {
        return $this->hasOne(Feedback::class);
    }
    
}
