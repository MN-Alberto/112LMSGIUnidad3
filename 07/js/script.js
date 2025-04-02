var contenedor = document.getElementById("contenedor");
document.getElementById("agregarFinal").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo1 = document.createElement("p");
    //añadir texto al párrafo
    parrafo1.innerText=document.getElementById("texto").value;
    //añadir el párrafo al contenedor
   contenedor.appendChild(parrafo1);
    //agregar el color de texto del nuevo parrafo sea rojo
    parrafo1.style.color = "red";
});
//agregar párrafo al principio
document.getElementById("agregarPpio").addEventListener("click", function(){
    // Crear un nuevo párrafo
   let parrafo2= document.createElement("p");
    //añadir texto al párrafo
   parrafo2.innerText=document.getElementById("texto").value;
    //añadir el párrafo al contenedor .prepend(parrafo)
   contenedor.prepend(parrafo2);
    //agregar estilos al párrafo texto azul
   parrafo2.style.color = "blue";
});
//agregar párrafo en una posición concreta
document.getElementById("agregarPosicion").addEventListener("click", function(){
    // Crear un nuevo párrafo
  let parrafo3= document.createElement("p");
    //añadir texto al párrafo
  parrafo3.innerText=document.getElementById("texto").value;
    //añadir el párrafo al contenedor inserBefore
  contenedor.insertBefore(parrafo3, contenedor.childNodes[1]);
    //agregar estilos color del texto verde
    parrafo3.style.color = "green";
});
//eliminar el primer párrafo
document.getElementById("eliminar").addEventListener("click", function(){
    //eliminar el primer párrafo
   contenedor.removeChild(contenedor.firstChild);
});
document.getElementById("eliminarTodos").addEventListener("click", function(){
    //eliminar todos los párrafos
   while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
});