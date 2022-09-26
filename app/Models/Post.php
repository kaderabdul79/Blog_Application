<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title','category_id','slug','user_id','body','imagePath'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
