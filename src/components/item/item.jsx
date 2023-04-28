import React from 'react';

export const Item = ({ item }) => {
  console.log(item)

  return (
    <div className="card" style={{width: '18rem'}}>
    <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
    <div className="card-body">
      <h5 className="card-title">{item.nombre}</h5>
      <p className="card-text">Precio: ${item.precio}</p>
      <p className="card-text">Stock: {item.stock}</p>
      <p className="card-text">{item.plataforma}</p>
      <p className="card-text">{item.descripcion}</p>
      <a href="#" className="btn btn-primary">Comprar</a>
    </div>
  </div>
  )
}