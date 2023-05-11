import React from 'react';
import { Task } from '../../models/taks.class'
import { Levels } from '../../models/level.enums';
import Taskcomponentes from '../puros/task';


const TaksListComponente = () => {

    const defaultTask = new Task('Example', 'Default description', false, Levels.NORMAL);
    

    const changeState = (id) => {
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
