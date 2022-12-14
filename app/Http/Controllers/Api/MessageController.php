<?php

namespace App\Http\Controllers\Api;

use App\Models\Ticket;
use App\Models\Message;
use Illuminate\Http\Request;
use Dflydev\DotAccessData\Data;
use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MessageResource::collection(Message::query()->orderBy('id', 'desc'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Ticket $ticket)
    {
        $data = $request->validate([
            "body" => ["required_if:image,null"],
            "image.*" => ["image", "max:2048"],
            // "user_id" => "numeric",
            // "ticket_id" => "numeric"
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('messageImages', 'public');
        }

        $data['user_id'] = $request->user()->id;
        $data['ticket_id'] = $ticket->id;


        Message::create($data);

        return response("message created", 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        return new MessageResource($message);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
