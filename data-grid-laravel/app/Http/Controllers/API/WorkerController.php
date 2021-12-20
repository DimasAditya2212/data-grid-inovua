<?php

namespace App\Http\Controllers\API;

use App\Models\Worker;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WorkerController extends Controller
{
    public function Store(Request $request)
    {
        $worker = new Worker;
        $worker->name = $request->input('name');
        $worker->age = $request->input('age');
        $worker->address = $request->input('address');
        $worker->salary = $request->input('salary');
        $worker->save();

        return response()->json([
            'status' => 200,
            'message' => "worker added"
        ]);
    }
}
