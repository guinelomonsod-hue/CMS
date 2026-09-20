<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use ReturnTypeWillChange;

class Staff extends Model
{
    protected $table = 'staff';

    protected $fillable = [
        'user_id',
        'department_id',
        'first_name',
        'last_name',
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }
    public function department(): BelongsTo{
        return $this->belongsTo(Department::class);
    }
    public function assignment(): HasMany{
        return $this->hasMany(ComplaintAssignment::class);
    }


}
