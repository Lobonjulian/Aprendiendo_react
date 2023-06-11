import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/level.enums';
import { Task } from '../../models/taks.class';
import TaskComponent from '../puros/task';
import TaskForm from '../puros/formularios/taskForm';

// Importamos la hoja de estilos de task.scss
//import '../../styles/taks.scss'; instalar nodesass

const TaskListComponent = () => {

    const defaultTask1 = new Task('Ejemplos1', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Ejemplos2', 'Default description', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Ejemplos3', 'Default description', false, LEVELS.BLOCKING);


        // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('El estado de la tarea ha sido modificado');
        setLoading(false);
        return () => {
            console.log('El componente TaskList se va a desmontar...')
        }
    }, [tasks])


    function completeTask(task){
        console.log('Completa esta tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // Actualizamos el estado del componente con la nueva lista de tareas y actualizará el 
        // Iteración de las tareas para mostrar la tarea actualizada
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Eliminar esta tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('agrega esta tarea:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                 {/* Card Header (title) */}
                    <div className='card-header p-3'>
                <h5>
                Tus Tareas:
                </h5>
            </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { tasks.map((task, index) => {
                                    return (
                                            <TaskComponent 
                                                key={index} 
                                                task={task}
                                                complete ={completeTask}
                                                remove = {deleteTask}
                                                >
                                            </TaskComponent>
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>                            
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};


export default TaskListComponent;