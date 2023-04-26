import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';


const BDD = [
  {
      "id": 1,
      "idCategoria": 1,
      "nombre": "Ark: Survival Evolved",
      "Plataforma": "Pc",
      "precio": 500,
      "stock": 150,
      "img": "img/ark.jpg"
  },
  {
      "id": 2,
      "idCategoria": 2,
      "nombre": "Project Zomboid",
      "Plataforma": "Pc",
      "precio": 1500,
      "stock": 100,
      "img": "img/pz.jpg"
  },
  {
      "id": 3,
      "idCategoria": 3,
      "nombre": "Red Dead Redemption 2",
      "Plataforma": "Pc",
      "precio": 4000,
      "stock": 150,
      "img": "img/reddead.jpg"
  },
  {
      "id": 4,
      "idCategoria": 4,
      "nombre": "Rust",
      "Plataforma": "Pc",
      "precio": 3500,
      "stock": 100,
      "img": "img/rust.jpg"
  },
  {
      "id": 5,
      "idCategoria": 5,
      "nombre": "Son Of The Forest",
      "Plataforma": "Pc",
      "precio": 2100,
      "stock": 150,
      "img": "img/son_of.jpg"
  }
  
]

export const ItemListContainer = () => {

  const [productos, setProductos] = useState ([])

  useEffect(() => {
    const promesa = (condicional) => new Promise((resolve,reject) => {
      if(condicional) {
        resolve(BDD)
      }     
      reject("No posee los permisos necesarios")


    })

    promesa(true)
    .then(productos => {      
      setProductos(productos)
    })
    .catch(error => console.error(error))


  }, [])
  return (
    <div className='row'>

<ItemList productos={productos} />


      </div>
  )
}
