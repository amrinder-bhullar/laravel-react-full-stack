<?php

namespace Database\Factories;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'ticket_id' => 5,
            'body' => fake()->paragraph(),
            // 'company_id' => fake()->numberBetween(1, 2, 3),
            'user_id' => 1,
            // 'image' => fake()->image()
        ];
    }
}
