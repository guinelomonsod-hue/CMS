<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    protected $fillable = [
        'status_name',
    ];

    public function complaints (): HasMany{
        return $this->hasMany(ComplaintUpdate::class);
    }
}
