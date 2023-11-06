let comprarButtons = document.querySelectorAll('.comprar-btn');
let precioProducto;

comprarButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let cardBody = event.target.closest('.card').querySelector('.card-body');
        let precioTexto = cardBody.querySelector('.card-title').nextElementSibling.textContent;
        precioProducto = parseFloat(precioTexto.replace('Precio: $', '').trim());

        document.getElementById('precioProducto').textContent = `VALOR DEL PRODUCTO: $${precioProducto.toFixed(2)}`;
    });
});

function calcularDescuento(precio) {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correoelectronico').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let categoria = document.getElementById('categoria').value;
    
    let descuento = 0;
    if (categoria === 'Vip 3') {
        descuento = 0.5;
    } else if (categoria === 'Vip 2') {
        descuento = 0.25;
    } else if (categoria === 'Vip 1') {
        descuento = 0.15;
    }
    
    let totalConDescuento = precio * cantidad * (1 - descuento);

    document.getElementById('monto').value = 'Total a Pagar: $' + totalConDescuento.toFixed(2);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularDescuento(precioProducto);
});