import React from 'react'
import { Contact } from '../models/Contact.class'
import PropTypes from 'prop-types'

const BComponent = ({ contact }) => {
    const { nombre, apellido, email, conectado } = contact;

    return (
        <div>
            <h3>Nombre: </h3>
            <p>{nombre}</p>
            <h3>Apellido: </h3>
            <p>{apellido}</p>
            <h3>Email: </h3>
            <p>{email}</p>
            <h3>Estado: </h3>
            <p>{conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
        </div>
    )
}

BComponent.popTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default BComponent;