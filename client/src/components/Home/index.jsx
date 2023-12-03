import styles from "./home.module.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';



export const Home = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
      // Realizar la solicitud al backend cuando el componente se monta
      axios.get('http://localhost:3000/personajes')
        .then(response => {
          // Actualizar el estado con los datos recibidos
          setPersonajes(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los personajes:', error);
        });
    }, []); // El segundo parámetro [] asegura que este efecto solo se ejecute una vez al montar el componente
  

console.log(personajes);
    return(
        <section className={styles.container}>
            
            <h1>Full-Repaso</h1>

           <div>

           {personajes.map(personajes => ( //mapeo de personajes para retornar todo el map
          <li key={personajes.id}>
            <p>{personajes.id}</p>
            <p>{personajes.name}</p>
            <p></p>
          </li>
        ))}
           </div>

        </section>
    )
}