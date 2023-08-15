let totalCost = 0;
const items = {
    apple : 700,
    orange : 800,
    lemon : 900,
}

const select = document.getElementsByClassName('add-to-cart');
const arrSelect = Array.from(select);
for(const event of arrSelect){
    event.addEventListener('click', ()=>{
        const name = event.parentElement.parentElement.getAttribute('id');
        totalCost  += items[name];
        document.getElementById('cost').innerText = `${totalCost}`;
    });
}


