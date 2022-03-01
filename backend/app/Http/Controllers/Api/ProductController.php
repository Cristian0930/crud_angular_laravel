<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Product::all()->load('category');
    }

    public function store(StoreProductRequest $request): \Illuminate\Http\JsonResponse
    {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show(Product $product): Product
    {
        return $product;
    }

    public function update(StoreProductRequest $request, Product $product): \Illuminate\Http\JsonResponse
    {
        $product->update($request->all());
        return response()->json($product);
    }

    public function destroy(Product $product): \Illuminate\Http\JsonResponse
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
