import React, { useState } from 'react'
import { Contact } from '../models/Contact.class'
import BComponent from './BComponent'

const AComponent = () => {

    const [connected, setConnected] = useState(false)

    const contacto = new Contact({
        nombre: "Juan",
        apellido: "Perez",
        email: "juanperez@gmail.com",
        conectado: connected
    })

    return (
        <>
            <BComponent contact={contacto} />
            <button onClick={() => setConnected(!connected)}>
                {connected ? "Desconectar" : "Mostrar En Línea"}
            </button>
        </>
    )
}

export default AComponent;