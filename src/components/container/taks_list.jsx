import React, { useState, useEffect } from 'react';
import { Task } from '../../models/taks.class'
import { Levels } from '../../models/level.enums';
import Taskcomponentes from '../puros/task';


const TaksListComponente = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.NORMAL);
    
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1>nueva tarea: </h1>
            </div>
                 {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <Taskcomponentes task={defaultTask}></Taskcomponentes>
        </div>
    );
};


export default TaksListComponente;
