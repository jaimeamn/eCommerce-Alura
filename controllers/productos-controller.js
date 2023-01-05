import { productoServices } from "../servicios/producto-servicios.js";

const nuevoProducto = (name,price,imageUrl,id) => {

    const card = document.createElement("div");
    const contenido =`
    <div class="produto">
    <img src="${imageUrl}" alt="img">
    <h1 class="product-name"> ${name} </h1>
    <p class="preco">${price}</p>
    <a class="ver-produto" href="../screens/producto.html?id=${id}">Ver Producto</a>
    </div>   
`;
card.innerHTML = contenido;
card.dataset.id = id;

return card;
}

const producto = document.querySelector("[data-product]");

const render = async () => {
    try{
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id))
            
        });
    }
    catch(erro){
        console.log(erro)
    }
}

render()