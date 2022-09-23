<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // insert new category data to database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required | unique:categories',
        ]);

        $name = $request->input('name');
        $category = new Category();
        $category->name = $name;

        return $category->save();
    }

    // fetch latest all Categories
    public function index()
    {
        return Category::latest()->get();
    }

    // show specific category
    public function show(Category $category)
    {
        return $category;
    }

    // update specific category
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required | unique:categories',
        ]);

        $name = $request->input('name');
        $category->name = $name;

        return $category->save();
    }
}
