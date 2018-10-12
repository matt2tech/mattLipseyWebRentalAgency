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
        var html = template({
            item: mattress.item,
            desc: mattress.desc,
            price: mattress.price,
            stock: mattress.stock,
            image: mattress.image
        })
    }
}