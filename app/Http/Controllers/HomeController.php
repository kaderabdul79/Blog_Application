<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class HomeController extends Controller
{
    //
    public function index()
    {
        return PostResource::collection(Post::latest()->take(4)->get());
    }
}
