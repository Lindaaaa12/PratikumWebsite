function submitOrder() {
    const form = document.getElementById('orderForm');
    const selectedFoods = Array.from(form.food)
        .filter(input => input.checked)
        .map(input => input.value);

    console.log('Pesanan:', selectedFoods);
    alert('Pesanan Anda: ' + selectedFoods.join(', '));
}


   
