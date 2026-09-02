import { useForm } from '@inertiajs/react';

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

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    );
}