<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Inertia::render('TaskManager', [
            'tasks' => Task::all()
        ]);
    }
}
