const PAGE_DATA = {
    mattresses: [
        {item: 'Premium Mattress',
        desc: '-',
        price: '-',
        stock: '-',
        image: '-'
    }
    ]
};

function renderMattresses() {
    var source = document.getElementById('mattressTemplate').innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.mattresses
    for(mattress in data) {
        console.log(mattress)
        var html = template({
            item: data[mattress].item,
            desc: data[mattress].desc,
            price: data[mattress].price,
            stock: data[mattress].stock,
            image: data[mattress].image
        });
        document.getElementById('store').insertAdjacentHTML('beforeend', html)
    }
}

renderMattresses()
