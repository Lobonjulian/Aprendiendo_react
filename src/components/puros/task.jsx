import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/taks.class';

// Importamos la hoja de estilos de task.scss
//import '../../styles/taks.css'

const TaskComponent = ({ task }) => {
    
    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${task.name} se va a desmontar`);
        }
    }, [task]);

    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                lista de Tareas: { task.completed ? 'COMPLETED':'PENDING' }
            </h5>
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;