<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;


#[Fillable(['name', 'email', 'password', 'role'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable implements JWTSubject
{
 use HasFactory, Notifiable;

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return[];
    }
    public function citizen(): HasOne
{
    return $this->hasOne(Citizen::class);
}

public function staff(): HasOne
{
    return $this->hasOne(Staff::class);
}

public function complaintUpdates(): HasMany
{
    return $this->hasMany(ComplaintUpdate::class);
}

public function attachments(): HasMany
{
    return $this->hasMany(Attachment::class, 'uploaded_by');
}

public function notifications(): HasMany
{
    return $this->hasMany(Notification::class);
}

}
