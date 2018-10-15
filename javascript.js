const PAGE_DATA = {
    mattresses: [
        {item: 'Premium Queen Mattress',
        desc: 'Premium queen-size mattress. Top-quality and wonderful sleep.',
        price: (50).toFixed(2),
        stock: 21,
        image: 'images/premiumQueenMattress.jpeg'
    },
    {item: 'Soft King Mattress',
        desc: 'King-size mattress. Plenty of soft space to rest on.',
        price: (45).toFixed(2),
        stock: 15,
        image: 'images/kingMattress.jpg'
    },
    {item: 'Top-Notch Twin Mattress',
        desc: 'Top-notch twin-size mattress. Perfect for jumping up and down on.',
        price: (30.50).toFixed(2),
        stock: 19,
        image: 'images/topNotchTwinMattress.jpeg'
    },
    {item: 'High-Quality Full Mattress',
        desc: 'High-quality full-size mattress. For those who wanna take up the whole bed.',
        price: (54).toFixed(2),
        stock: 11,
        image: 'images/highQualityFullMattress.jpeg'
    },
    {item: 'Luxury King Mattress',
        desc: 'Luxury king-size mattress. Sleep like a king.',
        price: (75).toFixed(2),
        stock: 10,
        image: 'images/luxuryKingMattress.jpg'
    },
    {item: 'Twin Twin Mattresses',
        desc: "Twin twin-size mattresses. Got twins? Here's a deal.",
        price: (30).toFixed(2),
        stock: 7,
        image: 'images/twinTwinMattress.jpg'
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
