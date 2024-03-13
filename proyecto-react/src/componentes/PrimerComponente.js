import React, {useState} from 'react';

export const PrimerComponente = () => {

    //let nombre  = "Julian Alvarez";
    let web     = "julian.alvarez@gmail.com";

    const [nombre,  setNombre]   = useState("Julian");
    let cursos  = [
                    "JavaScript",
                    "HTML",
                    "REACT",
                    "CSS"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre ( nuevoNombre );
    }

  return (
    <div>
        <h1>Mi Primer Componente</h1>
        <p>Este es el texto de Mi Primer Componente</p>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi correo electronico es: {web}</p> 
        
        {/* <input type='text' onChange= { e => cambiarNombre(e.target.value)} placeholder="Cambiar el nombre">/
        </input> */}

        <button onClick={ e => cambiarNombre("JULIAN ALVAREZ WEB")} >
            Cambiar Nombre            
        </button>

        <h2>Cursos:</h2>
        <ul>
            {
                cursos.map((curso, indice) =>  {
                return (<li key={indice} >
                    {curso}
                    </li>);
                })
            }
        </ul>
    </div>
  )
}
