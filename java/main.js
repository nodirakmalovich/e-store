let discRow = document.querySelector('.discount_row')
let prodRow = document.querySelector('.product_row')
let basketProducts = document.querySelector('.basket')
let basketRow = document.querySelector('.basket_product_row')
let basketContainer = document.querySelector('.basket_container')
let buyBtn = document.createElement('button')
let toggler = document.querySelector('.navbar_bottom_toggle')
let toglerMenu = document.querySelector('.menu_toggler')
let closeToggler = document.querySelector('.close_menu')
let backgroudFilter = document.querySelector('.background_blur')
let search = document.querySelector('.navbar_bottom_input')
let searchRow = document.querySelector('.search_menu')
let buyMenu = document.querySelector('.buy_menu')
let buyBtnClose = document.querySelector('.buy_btn')
let finishedBuy = document.querySelector('.buyBtn')
let finishedwrapper = document.querySelector('.finished_buy')
let buywrapper = document.querySelector('.buy_menu_wrapper')
let addProduct = document.querySelector('.navbar_bottom_link')
let addProductMenu = document.querySelector('.product_add')
let accBtn = document.querySelector('.account')
let login = document.querySelector('.login_wrapper')
let logWrapper = document.querySelector('#login')
let regWrapper = document.querySelector('#register_container')
let recWrapper = document.querySelector('#recovery')
let entrAcc = document.querySelector('#register_entr_acc')
let regAcc = document.querySelector('#register_acc')
let recAcc = document.querySelector('#recover_btn')
let entrAccSec = document.querySelector('#register_entr_acc_sec')
let regAccSec = document.querySelector('#register_acc_sec')
let recAccSec = document.querySelector('#recover_btn_sec')
let mobSearchBtn = document.querySelector('.mobile_navber_search')
let mobSearchWrapper = document.querySelector('.mobile_navbar_search')
let mobSearchClose = document.querySelector('.mobile_navbar_search_close')





render(discount)

function render(array) {
    array.forEach(product => {
        let tempClone = document.querySelector('#discountProducts')
        let cloneDisc = document.importNode(tempClone.content, true)
        cloneDisc.querySelector('.discount_row_card_image').src = product.imageUrl
        cloneDisc.querySelector('.discount_row_card_title').textContent = product.name
        cloneDisc.querySelector('.discount_row_card_description').textContent = product.description.slice(0, 20) + '...'
        cloneDisc.querySelector('.discount_row_card_price').textContent = product.price +' Br'
        cloneDisc.querySelector('.discount_row_card_price_new').textContent = Math.round(product.price * 0.88) + ' Br'

        let counter = cloneDisc.querySelector('.count')
        counter.innerText = product.count
        cloneDisc.querySelector('.minus').onclick = () => {
            if (product.count > 0) {
                product.count -= 1
                counter.innerText = product.count
                console.log(product.count);
            } else {
                alert('You are not select product yet')
            }
        }

        cloneDisc.querySelector('.plus').onclick = () => {
            if (product.count <= product.amount) {
                product.count += 1
                counter.innerText = product.count
                console.log(product.count);
            } else {
                alert('You selected all product')
            }
        }


        cloneDisc.querySelector('.basketPlus').onclick = () => {
            if (!basket.includes(product)) {
                basket.push(product)
            }
            console.log(basket);
            localStorage.setItem('basket', JSON.stringify(basket))
        }



        discRow.append(cloneDisc)


    });
}

renderProduct(products)

function renderProduct(array) {
    prodRow.innerHTML = ''
    array.forEach(product => {
        let template = document.querySelector('#productTemplate')
        let clone = document.importNode(template.content, true)

        clone.querySelector('.discount_row_card_image').src = product.imageUrl
        clone.querySelector('.discount_row_card_image').setAttribute('alt', `${product.name}`)

        clone.querySelector('.discount_row_card_title').textContent = product.name
        clone.querySelector('.discount_row_card_price_new').textContent = product.price + ' Br'
        clone.querySelector('.discount_row_card_description').textContent = product.description.slice(0, 20) + '...'


        let counter = clone.querySelector('.count')
        counter.innerText = product.count
        clone.querySelector('.minus').onclick = () => {
            if (product.count > 0) {
                product.count -= 1
                counter.innerText = product.count
                console.log(product.count);
            } else {
                alert('You are not select product yet')
            }
        }

        clone.querySelector('.plus').onclick = () => {
            if (product.count <= product.amount) {
                product.count += 1
                counter.innerText = product.count
                console.log(product.count);
            } else {
                alert('You selected all product')
            }
        }

        clone.querySelector('.basketPlus').onclick = () => {
            if (!basket.includes(product)) {
                basket.push(product)
            }
            console.log(basket);
            localStorage.setItem('basket', JSON.stringify(basket))
        }


        prodRow.append(clone)

    });
}

basketProducts.onclick = () => {
    renderBasket(basket)
    console.log(basket);
    let prodContainer = document.querySelector('.product_container')
    prodContainer.innerHTML = ''
}

function renderBasket(array) {
    basketRow.innerHTML = ''
    if (basket.length > 0) {
        array.forEach((product, index) => {
            let basketTemplate = document.querySelector('#basketTemplate')
            let clone = document.importNode(basketTemplate.content, true)

            clone.querySelector('.discount_row_card_image').src = product.imageUrl
            clone.querySelector('.discount_row_card_image').setAttribute('alt', `${product.name}`)

            clone.querySelector('.discount_row_card_title').textContent = product.name
            clone.querySelector('.discount_row_card_price_new').textContent = product.price
            clone.querySelector('.discount_row_card_description').textContent = product.description


            let counter = clone.querySelector('.count')
            counter.innerText = product.count
            clone.querySelector('.minus').onclick = () => {
                if (product.count > 0) {
                    product.count -= 1
                    counter.innerText = product.count
                    console.log(product.count);
                } else {
                    alert('You are not select product yet')
                }
            }

            clone.querySelector('.plus').onclick = () => {
                if (product.count < product.amount) {
                    product.count += 1
                    counter.innerText = product.count
                    console.log(product.count);
                } else {
                    alert('You selected all product')
                }
            }

            clone.querySelector('.delete').onclick = () => {
                basket.splice(index, 1)
                console.log(basket);
                renderBasket(basket)

                localStorage.setItem('basket', JSON.stringify(basket))
            }

            buyBtn.classList.add('buyBtn')
            buyBtn.innerText = 'Buy'

            basketContainer.append(buyBtn)
            basketRow.append(clone)
        })
    } else {

    }
}

function searchRender(array) {
    searchRow.innerHTML = ''
    array.forEach(product => {

        let template = document.querySelector('.searchTemplate')
        let clone = document.importNode(template.content, true)
        clone.querySelector('.search_menu_card_image').src = product.imageUrl
        clone.querySelector('.search_menu_card_info_title').textContent = product.name
        clone.querySelector('.search_menu_card_info_text').textContent = 'id:' + product.id + ' /'
        if (product.amount > 0) {
            clone.querySelector('.search_menu_card_info_text_span').textContent = ' ' + product.amount + ' В наличии'
            clone.querySelector('.search_menu_card_info_text_span').style.color = 'green'
        } else {
            clone.querySelector('.search_menu_card_info_text_span').textContent = '0 В наличии'
            clone.querySelector('.search_menu_card_info_text_span').style.color = 'red'
        }

        clone.querySelector('.search_menu_card_info_desc').textContent = product.description
        clone.querySelector('.search_menu_card_info_price').textContent = product.price + 'Br'



        clone.querySelector('.basketPlusBtn').onclick = () => {
            if (!basket.includes(product)) {
                basket.push(product)
            }

            basketRow.innerHTML = ''
            renderBasket(basket)
            console.log(basket);
            localStorage.setItem('basket', JSON.stringify(basket))
        }

        searchRow.append(clone)

    })
}

search.addEventListener('click', () => {
    search.style.boxShadow = '0px 0px 5px 0px #FF99004D inset'
})

search.addEventListener('input', () => {
    if (search.value.length > 0) {
        searchRow.style.display = 'block'
    } else {
        searchRow.style.display = 'none'
    }

    let inputText = search.value
    let filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(inputText)
    })



    if (filteredProducts.length > 0) {
        searchRender(filteredProducts)
    } else {
        searchRow.style.display = 'none'
    }
})

document.addEventListener('click', (event) => {
    if (!search.contains(event.target)) {
        search.style.boxShadow = '0px 0px 10px 0px #0000000D inset'
    }

    // searchRow.style.display = 'none'
});

toggler.addEventListener('click', () => {
    toglerMenu.style.transform = 'translateX(0px)'
    backgroudFilter.style.display = 'block'
    backgroudFilter.style.backdropFilter = 'blur(5px)'
})

closeToggler.addEventListener('click', () => {
    toglerMenu.style.transform = 'translateX(-554px)'
    backgroudFilter.style.display = 'none'
    backgroudFilter.style.backdropFilter = 'blur(0)'
})

backgroudFilter.addEventListener('click', () => {
    toglerMenu.style.transform = 'translateX(-554px)'
    backgroudFilter.style.display = 'none'
    backgroudFilter.style.backdropFilter = 'blur(0)'
    addProductMenu.style.transform = 'translateY(-600px)'

    buyMenu.style.transform = 'translateX(554px)'
    login.style.transform = 'translateX(554px)'
})

buyBtn.onclick = () => {
    buyMenu.style.transform = 'translateX(0)'
    backgroudFilter.style.display = 'block'
    backgroudFilter.style.backdropFilter = 'blur(5px)'
    buyBtn.style.transition = '0.3s ease'

    let fullPrice = 0


    let allPrice = document.querySelector('.price_product_all')

    basket.map(product => {
        fullPrice += product.price* product.count
    }) + ' Br'
    console.log(fullPrice + "full");

    allPrice.innerHTML = fullPrice + 324 + ' Br'

    let productPrice = document.querySelector('.price_product')
    productPrice.innerHTML = fullPrice + ' br'
}

finishedBuy.onclick = () => {

    let inputs = document.querySelectorAll('.buy_menu_input');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert(' Пожалуйста, заполните все поля. \n Минимум номер телефона и ваше имя');

    } else {
        inputs.forEach(input => {
            input.value = ''
            basketRow.innerHTML = ''
            basket = []
            localStorage.setItem('basket', JSON.stringify(basket))
            finishedwrapper.style.display = 'block'
            buywrapper.style.display = 'none'


        })

        
        let productAmounts = [];

        basket.forEach(product => {
            productAmounts.push(product)
        })

        productAmounts.map(product => {
           products =  products.map((productID) => {
                if(product.id === productID.id){
                    productID.amount = productID.amount - product.amount
                }
            })

        })

        
        renderProduct(products)
        localStorage.setItem('products', JSON.stringify(products))
        
        console.log(products);


    }
}

buyBtnClose.onclick = () => {
    backgroudFilter.style.display = 'none'

    finishedwrapper.style.display = 'none'

    buywrapper.style.display = 'block'
    buyMenu.style.transform = 'translateX(554px)'
}

addProduct.addEventListener('click', () => {
    addProductMenu.style.transform = 'translateY(0)'

    backgroudFilter.style.display = 'block'
    backgroudFilter.style.backdropFilter = 'blur(5px)'

    let newName = document.querySelector('.new_name')
    let newDesc = document.querySelector('.new_desc')
    let newImage = document.querySelector('.new_imageUrl')
    let newAmount = document.querySelector('.new_amoun')
    let newPrice = document.querySelector('.new_price')


    let addProd = document.querySelector('.product_add_btn')

    addProd.onclick = () => {

        let newProduct = {
            id: products[products.length - 1].id + 1,
            name: newName.value,
            description: newDesc.value,
            price: newPrice.value,
            imageUrl: newImage.value,
            amount: newAmount.value,
            count: 0
        }

        products.unshift(newProduct)

        console.log(newProduct);

        newName.value = ""
        newDesc.value = ""
        newImage.value = ""
        newAmount.value = ""
        newPrice.value = ""

        renderProduct(products)

        localStorage.setItem('products', JSON.stringify(products))

        backgroudFilter.style.display = 'none'
        backgroudFilter.style.backdropFilter = 'blur(0)'
        addProductMenu.style.transform = 'translateY(-600px)'
    }
})

accBtn.onclick = () => {
    login.style.transform = 'translateX(0)'
    backgroudFilter.style.display = 'block'
    backgroudFilter.style.backdropFilter = 'blur(5px)'
}

regAcc.addEventListener('click', () => {
    logWrapper.style.display = 'none'
    recWrapper.style.display = 'none'
    regWrapper.style.display = 'block'
})

entrAcc.addEventListener('click', () => {
    regWrapper.style.display = 'none'
    recWrapper.style.display = 'none'
    logWrapper.style.display = 'block'

})

recAcc.addEventListener('click', () => {
    regWrapper.style.display = 'none'
    logWrapper.style.display = 'none'
    recWrapper.style.display = 'block'
})

entrAccSec.addEventListener('click', () => {
    regWrapper.style.display = 'none'
    recWrapper.style.display = 'none'
    logWrapper.style.display = 'block'
})

regAccSec.addEventListener('click', () => {
    logWrapper.style.display = 'none'
    recWrapper.style.display = 'none'
    regWrapper.style.display = 'block'
})

recAccSec.addEventListener('click', () => {
    regWrapper.style.display = 'none'
    logWrapper.style.display = 'none'
    recWrapper.style.display = 'block'
})

// mobSearchBtn.addEventListener('click', () => {
//     mobSearchWrapper.style.transform = 'translateX(0)'
// })

// mobSearchClose.addEventListener('click', () => {
//     mobSearchWrapper.style.transform = 'translateX(-320px)'

// })