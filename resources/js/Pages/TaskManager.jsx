import { useState } from 'react';
import { useForm, router } from '@inertiajs/react';

export default function TaskManager({ tasks }) {

    const [editingTask, setEditingTask] = useState(null);

    const { data, setData, post, put } = useForm({
        title: '',
        description: ''
    });

    function addTask(e) {
        e.preventDefault();

        post('/tasks');
    }

    function editTask(task) {
        setEditingTask(task);

        setData({
            title: task.title,
            description: task.description
        });
    }

    function updateTask() {
        put(`/tasks/${editingTask.id}`);
    }

    return (
        <div>
            <h1>Task Manager</h1>

            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Task title"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                />
                <button type="button" onClick={() => updateTask()}> Update Task</button>

                <textarea
                    placeholder="Description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>

                    <button onClick={() => editTask(task)}> Edit</button>

                    <button onClick={() => router.delete(`/tasks/${task.id}`)}> Delete </button>
                </div>
            ))}
        </div>
    );
}