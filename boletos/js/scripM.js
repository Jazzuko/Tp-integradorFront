function calcTotal() {
    const cantidad = parseInt(document.getElementById("cant").value);
    const precioTicket = 1000;
    const descuento = parseInt(document.getElementById("category").value);
    const total = cantidad * (precioTicket - (precioTicket * descuento / 100));

    document.getElementById("total").textContent = total;
}

function Borrar() {
    document.getElementById("cant="+cant).value = "";
    document.getElementById("total="+total).textContent = "0";
}

function calcularDescuento() {
    const cantidad = parseInt(document.getElementById("cant").value);
    const descuento = parseInt(document.getElementById("category").value);
    const total = cantidad * (1000 - (1000 * descuento / 100));

    const categoria = document.getElementById("category").options[document.getElementById("category").selectedIndex].text;
    
    const resultado = `Resumen de compra:\nCategoría: ${categoria}\nCantidad de Tickets: ${cantidad}\nTotal a pagar: $${total}`;
    document.getElementById("resultado").textContent = resultado;
}

function selticket(category) {
    const categorySelector = document.getElementById("category");

    switch (category) {
        case 'Student':
            categorySelector.
            category
value = '80';
            break;
        case 'Trainee':
            categorySelector.value = '50';
            break;
        case 'Junior':
            categorySelector.value = '15';
            break;
    }
}


    
// Inicializar el total a 0
document.getElementById("total"+total).textContent = "0";