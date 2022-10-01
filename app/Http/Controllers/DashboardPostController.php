<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class DashboardPostController extends Controller
{
    //
    public function index()
    {
        return PostResource::collection(
            Post::where('user_id', auth()->user()->id)->latest()->get()
        );
    }
}
