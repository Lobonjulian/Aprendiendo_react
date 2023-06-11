import React from 'react';
import { LEVELS } from '../../models/level.enums';
import { Task } from '../../models/taks.class';
import TaskComponent from '../puros/task';




const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplos', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
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