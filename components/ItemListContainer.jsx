import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();

  useEffect(() => {
    // Crgar productos segun la categoria
    console.log('Cargar productos de la categoría:', id);
  }, [id]);

  return <div>Lista de productos</div>;
}

export default ItemListContainer;
