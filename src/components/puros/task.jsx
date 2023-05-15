import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/taks.class";

const TaskComponentes = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.nombre } 
            </h2>
            <h3>
                description: { task.description }
            </h3>
            <h4>
                Levels: { task.levels }
            </h4>
            <h5>
                esta completado: { task.completado ? 'COMPLETED':'PENDING' }
            </h5>
        </div>
    );
};


TaskComponentes.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponentes;
