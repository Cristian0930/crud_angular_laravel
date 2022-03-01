<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Category::all();
    }

    public function store(StoreCategoryRequest $request): \Illuminate\Http\JsonResponse
    {
        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    public function show(Category $category): Category
    {
        return $category;
    }

    public function update(UpdateCategoryRequest $request, Category $category): \Illuminate\Http\JsonResponse
    {
        $category->update($request->all());
        return response()->json($category);
    }

    public function destroy(Category $category): \Illuminate\Http\JsonResponse
    {
        $category->delete();
        return response()->json(null, 204);
    }
}
