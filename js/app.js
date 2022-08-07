
//Selectors

let items = document.querySelector('#items');
let quantity = document.querySelector('#quantity');
let addBtn = document.querySelector('#addBtn');
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector('#rows');
let total = document.querySelector('#total');

//function

    function calcTotal(){
        let costs = document.querySelectorAll('.cost');
        total.innerText = [...costs].reduce((pv,cv)=>pv+ Number(cv.innerText),0);
        

    }
    function del(event){
        
        if(confirm("Are you sure?")){
        event.target.parentElement.parentElement.remove();
        calcTotal();
        }
       
    }

    // function print(event){
    //     window.print(event);
    // }

//Process
products.forEach(function(product){
    
    let newOption = new Option(product.name,product.id);
    items.append(newOption);

});


inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let currentProducts = products.find((product)=>product.id == items.value);
    let cost = currentProducts.price * quantity.valueAsNumber;
    let newTr = document.createElement('tr');
    newTr.innerHTML = `
            
                <td>${currentProducts.name}
                <p class="small text-danger mb-0 del-btn" onclick="del(event)">
                Delete
                </p>
                </td>
                <td class="text-end">${currentProducts.price}</td>
                <td class="text-end">${quantity.valueAsNumber}</td>
                <td class="text-end cost">${cost}</td>
    `;
    rows.append(newTr);
    //quantity.value = items.value = null;
    inputForm.reset();
    calcTotal();
});








