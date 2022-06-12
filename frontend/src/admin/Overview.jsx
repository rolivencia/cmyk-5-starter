import React from 'react';
import { Link } from 'react-router-dom';

function Overview({ match }) {
    const { path } = match;

    return (
        <div>
            <h1>Administrador</h1>
            <p>Esta sección sólo es accesible para adminsitradores.</p>
            <p><Link to={`${path}/users`}>Administrar Usuarios</Link></p>
        </div>
    );
}

export { Overview };
