let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 1,
        name: 'LACK ЛАКК',
        description: 'Полка настенная 110x26 см',
        price: 999.99,
        imageUrl: 'https://cdn.vamdodoma.ru/images/ikea-pl/f8/10/4849daad0f13f935862714b21601618992e4.jpg?w=900',
        amount: 30,
        count: 0
    },
    {
        id: 2,
        name: 'FJÄLLBO ФЬЕЛЛЬБО',
        description: 'Журнальный стол 90x46 см',
        price: 6999.99,
        imageUrl: 'https://wmart.kz/upload/iblock/e3a/e3ab730303d2cfa49ab62ffd62e75ee8.jpg',
        amount: 1,
        count: 0
    },
    {
        id: 3,
        name: 'NISSAFORS НИССАФОРС',
        description: 'Тележка 50.5x30x83 см',
        price: 2499.99,
        imageUrl: 'https://aikea.by/u/2020/09/nissafors-nissafors-telezhka-belyj-50-5x30x83-sm-504-657-37-1.jpg',
        amount: 12,
        count: 0
    },
    {
        id: 4,
        name: 'ASKHOLMEN АСКХОЛЬМЕН',
        description: 'Складной стол 70x44 см',
        price: 3999.99,
        imageUrl: 'https://cdn.vamdodoma.ru/images/ikea-tr/e4/5f/d6bfc2ead15075fb29e70c69242d9a64e829.jpg?w=900',
        amount: 10,
        count: 0
    },
    {
        id: 5,
        name: 'HEMNES ХЕМНЕС',
        description: 'Комод с 8 ящиками 160x96 см',
        price: 9999.99,
        imageUrl: 'https://aikea.by/u/2017/08/hemnes-hemnes-komod-s-8-yashikami-belaya-morilka-160x96-sm-403-684-40-1.jpg',
        amount: 8,
        count: 0
    },
    {
        id: 6,
        name: 'MALM МАЛЬМ',
        description: 'Комод с 6 ящиками 80x123 см',
        price: 15999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeO-4BJNndOIbrJ00rEITfZa0_rckGBX9jQA&s',
        amount: 12,
        count: 0
    },
    {
        id: 7,
        name: 'PAX ПАКС',
        description: 'Шкаф платяной с раздвижными дверями 150x66x236 см',
        price: 189999.99,
        imageUrl: 'https://cdn.vamdodoma.ru/images/ikea-pl/9d/84/a6f6604144f12d133280e563b0c0203351ab.jpg',
        amount: 2,
        count: 0
    },
    {
        id: 8,
        name: 'BRIMNES БРИМНЭС',
        description: 'Шкаф для ТВ с отделениями 240x41x95 см',
        price: 9999.99,
        imageUrl: 'https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/704/1070482_PE854621_S5.jpg',
        amount: 9,
        count: 0
    },
    {
        id: 9,
        name: 'LIATORP ЛИАТОРП',
        description: 'Журнальный стол 93x93 см',
        price: 7999.99,
        imageUrl: 'https://aikea.by/u/2015/10/zhurnalnyj-stol-liatorp-502-693-69-1.jpg',
        amount: 15,
        count: 0
    },
    {
        id: 10,
        name: 'LACK ЛАКК',
        description: 'Журнальный стол 118x78 см',
        price: 1999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtyCUFTZPxAYw3KKlx-OK6sQjjhvtt_WTWQ&s',
        amount: 20,
        count: 0
    },
    {
        id: 11,
        name: 'KIVIK КИВИК',
        description: 'Диван 3-местный',
        price: 24999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzCpDBGS24bAwXD6ySouGHPP6cspxpJ_ncg&s',
        amount: 6,
        count: 0
    },
    {
        id: 12,
        name: 'EKTORP ЭКТОРП',
        description: 'Кресло',
        price: 9999.99,
        imageUrl: 'https://avatars.mds.yandex.net/get-mpic/12529549/2a0000018ee77d577b63c732791f3ed50669/orig',
        amount: 14,
        count: 0
    },
    {
        id: 13,
        name: 'POÄNG ПОЭНГ',
        description: 'Кресло-качалка',
        price: 4999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayUz0pldntPVTO0utRTMljH1na5DLc0jebQ&s',
        amount: 11,
        count: 0
    },
    {
        id: 14,
        name: 'MARKUS МАРКУС',
        description: 'Офисное кресло',
        price: 13999.99,
        imageUrl: 'https://homezone.com.ua/media/catalog/product/m/a/markus-office-chair-vissle-light-grey__1101440_pe866425_s5.jpg',
        amount: 5,
        count: 0
    },
    {
        id: 15,
        name: 'FLINTAN ФЛИНТАН',
        description: 'Офисный стул',
        price: 7999.99,
        imageUrl: 'https://cdn.vamdodoma.ru/images/ikea-pl/53/d2/a21426f9ddad00a467f38a4dccd104c2bae3.jpg',
        amount: 13,
        count: 0
    },
    {
        id: 16,
        name: 'MELLTORP МЕЛЛТОРП',
        description: 'Стол 125x75 см',
        price: 2999.99,
        imageUrl: 'https://del-i-very.ru/75440-large_default/s19280034-meltorp-stol-yasen-belyj-125x75-sm.jpg',
        amount: 17,
        count: 0
    },
    {
        id: 17,
        name: 'LISABO ЛИСАБО',
        description: 'Стол 140x78 см',
        price: 7999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRj-kYlqZ9h7EGIunj1w_lvzgjZCTVuYnaA&s',
        amount: 4,
        count: 0
    },
    {
        id: 18,
        name: 'TÄRENDÖ ТЭРЕНДЭ',
        description: 'Стол 110x67 см',
        price: 1499.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZoyYkOjMlMOif1MOoETnwFodIx0cEiQpdlV_AA4GEcmxDmRTFvYUV1uLYV6pLVZ1jAU&usqp=CAU',
        amount: 19,
        count: 0
    },
    {
        id: 19,
        name: 'NORDEN НОРДЕН',
        description: 'Стол складной 26/89/152x80 см',
        price: 8999.99,
        imageUrl: 'https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/371/0737112_PE740886_S5.jpg',
        amount: 7,
        count: 0
    },
    {
        id: 20,
        name: 'BJURSTA БЬЮРСТА',
        description: 'Стол раздвижной 50/70/90x90 см',
        price: 6999.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Jv9rdiMJ3b9TuinJH2BCz1HtRxQWeZ62Kw&s',
        amount: 16,
        count: 0
    },
    
];

let sortedProducts = products.sort((a, b) => a.amount - b.amount);


let discount = sortedProducts.slice(0, 4)

let basket = JSON.parse(localStorage.getItem('basket')) || []
