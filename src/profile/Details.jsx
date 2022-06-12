import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <p>
                <strong>Nombre: </strong> {user.firstName} {user.lastName}<br />
                <strong>Email: </strong> {user.email}
            </p>
            <p><Link to={`${path}/update`}>Actualizar Perfil</Link></p>
        </div>
    );
}

export { Details };
