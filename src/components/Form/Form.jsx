import React from 'react'
import Input from './Input'
import { useForm } from  'react-hook-form';
import "./Form.css"

const Form = () => {

  const { handleSubmit } = useForm();

  const formSubmit = data => {
    console.log(data)
  }

  return (
    <div className="form-background">
        <div className="form-container">
            <form onSubmit={handleSubmit(formSubmit)}>
                <h1>Proforma</h1>
                <Input id="date" label="Fecha" type="text" placeholder="Pon la fecha" />
                <Input id="place" label="Lugar" type="text" placeholder="Nombre del lugar" />
                <Input id="time" label="Hora" type="text" placeholder="8:30 am a 6:00 pm" />
                <h3>Equipo de sonido</h3>
                <Input id="sound" label="Herramienta" type="text" placeholder="Parlante, microfono, luces.." />
                <Input id="sound" label="Herramienta" type="text" placeholder="Parlante, microfono, luces.." />
                <Input id="sound" label="Herramienta" type="text" placeholder="Parlante, microfono, luces.." />
                <button className='confirm'>Confirmar</button>
            </form>
        </div>
    </div>
  )
}

export default Form