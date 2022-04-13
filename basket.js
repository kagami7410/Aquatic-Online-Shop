if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}




////////////////   Initial Run //////////////////////////////////

function ready() {
    var removeButton = document.getElementsByClassName('remove-btn')
    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i]
        button.addEventListener('click', removeCartTotal)
    }

    var addBasketButton = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addBasketButton.length; i++) {
        var button = addBasketButton[i]
        button.addEventListener('click', addItemToBasket)
    }

    var minusQuantityButton = document.getElementsByClassName('minus-btn')
    for (var i = 0; i < minusQuantityButton.length; i++) {
        minusButton = minusQuantityButton[i]
        minusButton.addEventListener('click', decreaseQuantity)
    }


    var additionQuantityButton = document.getElementsByClassName('addition-btn')
    for (var i = 0; i < additionQuantityButton.length; i++) {
        additionButton = additionQuantityButton[i]
        additionButton.addEventListener('click', increaseQuantity)
    }


    var addToBasketButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToBasketButtons.length; i++) {
        addToBasketButton = addToBasketButtons[i]

    }


    var navBarLogo = document.getElementsByClassName("nav-bar-logo")[0]
    var navBarBasket = document.getElementsByClassName("nav-bar-basket-container")[0]

    window.addEventListener('scroll', () => {
        if (scrollY > 90) {
            navBarLogo.style.display = "flex";
            navBarBasket.style.display = "flex";
        
        }

        else {
            navBarLogo.style.display = "none";
            navBarBasket.style.display = "none";


        }
    });

    updateTotal();



    screenToTop()
}



////////////////    Initial Run    ////////////////////////////



function screenToTop(){

    if (scrollY > 90) {
        document.body.scrollTop = 0;

    }
}








function updateTotal() {
    var basketItemContainer = document.getElementsByClassName('basket-items-container')[0]
    var itemRows = parseInt(basketItemContainer.getElementsByClassName('basket-item-container'))
    var total = 0

    for (var i = 0; i < itemRows.length; i++) {
        var itemRow = itemRows[i]
        var priceElement = itemRow.getElementsByClassName('price')[0]
        var quantityElement = itemRow.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('£', ''))
        var quantity = quantityElement.innerText
        var Previoustotal = price * quantity
        total = total + Previoustotal





    }
    document.getElementsByClassName('basket-total')[0].innerText = '£' + total


    total = Math.round(total * 100) / 100

}







function removeCartTotal(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}




function addItemToBasket(event) {
    var button = event.target
    var item = button.parentElement

    itemImage = item.getElementsByClassName('item-img')[0].src
    itemDescription = item.getElementsByClassName('item-description')[0].innerText
    itemPrice = item.getElementsByClassName('price')[0].innerText
    console.log(itemImage, itemDescription, itemPrice)

    addRowToBasket(itemImage, itemDescription, itemPrice)
    updateBasketNumber()


}





function addRowToBasket(itemImage, itemDescription, itemPrice) {
    var itemRow = document.createElement('div')
    var basketItemsContainer = document.getElementsByClassName('basket-items-container')[0]


    var basketRowItemHtml = `
       <section class="basket-item-container">
       <img class="basket-item-img" src="clownfish.jpg">

       <section class="item-name-and-remove-btn-container">
           <div class="item-name">
               ery

           </div>
           <button class="remove-btn">REMOVE</button>
       </section>

       <section class="price">£12</section>

       <section class="quantity-container">
           <button class="minus-btn">-</button>
           <div class="quantity">35</div>
           <button class="addition-btn">+</button>
       </section>

       <section class="total"></section>


   </section>`

    itemRow.innerHTML = basketRowItemHtml


}





function decreaseQuantity(event) {

    var minusButton = event.target
    var quantityContainer = minusButton.parentElement
    var quantityElement = quantityContainer.getElementsByClassName('quantity')[0]
    var quantityItem = parseInt(quantityElement.innerText)
    var finalQuantityItem = quantityItem
    finalQuantityItem = finalQuantityItem - 1

    var StringfinalQuantityItem = finalQuantityItem.toString()
    quantityElement.innerText = StringfinalQuantityItem
    console.log(finalQuantityItem)

    updateTotal()



    if (quantityItem <= 1) {
        quantityElement.innerText = 1
    }
    else {
        quantityElement.innerText = finalQuantityItem
    }

}








function increaseQuantity(event) {
    var additionButton = event.target
    var quantityContainer = additionButton.parentElement
    var quantityElement = quantityContainer.getElementsByClassName('quantity')[0]
    var quantityItem = parseInt(quantityContainer.getElementsByClassName('quantity')[0].innerText)
    var finalQuantityItem = quantityItem

    finalQuantityItem = finalQuantityItem + 1
    StringfinalQuantityItem = finalQuantityItem.toString()
    quantityElement.innerText = StringfinalQuantityItem
    updateTotal()
}


function updateBasketNumber() {
    var basketNumberElement = document.getElementsByClassName('basket-count')[0]
    var narBarBasketNumberElement = document.getElementsByClassName('nav-bar-basket-count')[0]
    var basketNumberItem = parseInt(document.getElementsByClassName('basket-count')[0].innerText)

    var basketCount = basketNumberItem

    basketCount = basketCount + 1
    var basketCountString = basketCount.toString()

    basketNumberElement.innerText = basketCountString
    narBarBasketNumberElement.innerText = basketCountString
    console.log(basketCount)
    console.log(basketNumberElement)



}