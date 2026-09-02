import { useForm, router } from '@inertiajs/react';

export default function TaskManager({ tasks }) {

    const { data, setData, post } = useForm({
        title: '',
        description: ''
    });

    function addTask(e) {
        e.preventDefault();

        post('/tasks');
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

                    <button onClick={() => router.delete(`/tasks/${task.id}`)}> Delete </button>
                </div>
            ))}
        </div>
    );
}