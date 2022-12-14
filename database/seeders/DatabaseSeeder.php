<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Message;
use App\Models\User;
use App\Models\Ticket;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // User::factory()
        //     ->count(4)
        //     ->hasTickets(5)
        //     ->create();
        User::factory()->create([
            'email' => 'john@example.com',
            'password' => bcrypt('Password!')
        ]);

        Ticket::factory(5)->create();
        Message::factory(5)->create();



        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
