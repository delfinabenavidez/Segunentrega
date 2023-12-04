import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();

  useEffect(() => {
    // Detalles del producto segun el id
    console.log('Cargar detalles del producto:', id);
  }, [id]);

  return <div>Detalles del producto</div>;
}

export default ItemDetailContainer;
