<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph(),
            'image' => 'https://www.asus.com/media/global/products/45pbdqhdt7mejfyn/P_setting_xxx_0_90_end_500.png',
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 5000),
            'category_id' => rand(1, 5)
        ];
    }
}
