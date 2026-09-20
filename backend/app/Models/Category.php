<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        'category_name',
        'description',
    ];
    public function complaints (): HasMany{
        return $this->hasMany(Complaint::class);
    }
}
