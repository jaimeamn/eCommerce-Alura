//GET

/* const listaProductos = () => fetch(" http://localhost:3000/producto").then(respuesta => respuesta.json());



export const productoServices = {
    listaProductos
}; */

//GET
const listaProductos = () =>
  fetch("https://ecommerce-service-jamn.onrender.com/producto")
    .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error));

const listarUnProduto = (id) => {
  return fetch(`https://ecommerce-service-jamn.onrender.com/producto/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price) => {
  return fetch(`https://ecommerce-service-jamn.onrender.com/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.body;
    }
    throw new Error("No fue posible crear el producto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, name, price, description) => {
  return fetch(`https://ecommerce-service-jamn.onrender.com/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`https://ecommerce-service-jamn.onrender.com/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
};