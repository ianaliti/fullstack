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
    public function definition(): array
    {
        return [
            'name'=>fake()->domainName(),
            'description' => fake()->paragraph(),
            'price' => fake()->randomFloat(2, 1, 1000),
            'active' => fake()->boolean(),
            'image' => fake()->imageUrl(640, 480, 'products', true),
            'features' => json_encode([
                'specifications' => fake()->sentence(),
                'fragrance' => fake()->word(),
                'vitamin_concentration' => fake()->randomFloat(2, 0, 10),
                'chlorine_removal' => fake()->boolean(),
                'micro_sediment_filter' => fake()->boolean(),
            ]),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
