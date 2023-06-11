import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/level.enums';
import { Task } from '../../models/taks.class';
import TaskComponent from '../puros/task';




const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplos', 'Default description', false, LEVELS.NORMAL);

        // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('El estado de la tarea ha sido modificado');
        return () => {
            console.log('El componente TaskList se va a desmontar...')
        }
    }, [tasks])


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Tus Tareas:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;