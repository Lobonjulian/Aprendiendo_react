import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/taks.class';
import { LEVELS } from '../../models/level.enums';

// Importamos la hoja de estilos de task.scss
//import '../../styles/taks.css'

const TaskComponent = ({ task, complete, remove }) => {
    
    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${task.name} se va a desmontar`);
        }
    }, [task]);

    /** 
     *  Función que devuelve una Insignia 
    * dependiendo del nivel de la tarea */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }


    /**
 *  Función que devuelve el ícono dependiendo de la finalización de la tarea 
 */
    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecución de la función para devolver el elemento de la insignia */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Ejecución de función para devolver icono según finalización */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;