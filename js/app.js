// Selectors
let selectItems = document.querySelector('#selectItems');
let quantity = document.querySelector('#quantity');
let addBtn = document.querySelector('#addBtn');
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector('#rows');
let total = document.querySelector('#total');

//Function

function totalCost(){
    let costs = document.querySelectorAll('.cost');
    let totalResult = [...costs].reduce((pv,cv) => pv + Number(cv.innerText),0);
    total.innerText = totalResult;
}

function del(event){
    if(confirm("Are u sure to delete?")){
        event.target.parentElement.parentElement.remove();
        totalCost();
    }
}
//Process
products.forEach(function(product){
    let newOption = new Option(product.name,product.id);
    selectItems.append(newOption);   
})

inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProduct = products.find(product => product.id == selectItems.value)
    // console.log(selectItems.value , quantity.value , currentProduct)

    let newTr = document.createElement('tr');
    let cost = currentProduct.price * Number(quantity.value);
    newTr.innerHTML = `
                        <td >
                        ${currentProduct.name}
                        <p class="text-danger small mb-0 delBtn" onclick="del(event)">Delete</p>
                        </td>
                        <td class="text-end">${currentProduct.price}</td>
                        <td class="text-end">${quantity.value}</td>
                        <td class="text-end cost">${cost}</td>
    `;
    rows.append(newTr);
    inputForm.reset();
    totalCost();
})

let delBtn = document.querySelectorAll('.delBtn');


// Delete
// rows.addEventListener('click',function(e){
//     // console.log(e.target);
//     if(e.target.classList.contains('delBtn')){
//         // console.log(e.target.parentElement.parentElement);
//         if(confirm("Are u sure to delete?")){
//             e.target.parentElement.parentElement.remove();
//             totalCost();
//         }
//     }
// })

function printer(){
    if(rows.innerHTML){
        print()
    }
}
