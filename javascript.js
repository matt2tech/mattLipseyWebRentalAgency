const PAGE_DATA = {
    mattresses: [
        {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep.',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    },
    {item: 'Soft King Mattress',
        desc: 'King-size mattress. Plenty of soft space.',
        price: (45).toFixed(2),
        stock: 15,
        image: 'images/kingMattress.jpg'
    },
    {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    },
    {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    },
    {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    },
    {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    }
    ]
};

function renderMattresses() {
    var source = document.getElementById('mattressTemplate').innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.mattresses
    for(mattress in data) {
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
