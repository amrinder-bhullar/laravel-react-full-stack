<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'body',
        'user_id',
        'ticket_id'
    ];

    public function Ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
