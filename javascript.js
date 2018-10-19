const PAGE_DATA = {
    mattresses: [
        {
            item: "Premium Queen Mattress",
            desc:
                "Premium queen-size mattress. Top-quality and wonderful sleep.",
            price: (50).toFixed(2),
            stock: 21,
            image: "images/premiumQueenMattress.jpeg"
        },
        {
            item: "Soft King Mattress",
            desc: "King-size mattress. Plenty of soft space to rest on.",
            price: (45).toFixed(2),
            stock: 15,
            image: "images/kingMattress.jpg"
        },
        {
            item: "Top-Notch Twin Mattress",
            desc:
                "Top-notch twin-size mattress. Perfect for jumping up and down on.",
            price: (30.5).toFixed(2),
            stock: 19,
            image: "images/topNotchTwinMattress.jpeg"
        },
        {
            item: "High-Quality Full Mattress",
            desc:
                "High-quality full-size mattress. For those who wanna take up the whole bed.",
            price: (54).toFixed(2),
            stock: 11,
            image: "images/highQualityFullMattress.jpeg"
        },
        {
            item: "Luxury King Mattress",
            desc: "Luxury king-size mattress. Sleep like a king.",
            price: (75).toFixed(2),
            stock: 10,
            image: "images/luxuryKingMattress.jpg"
        },
        {
            item: "Twin Twin Mattresses",
            desc: "Twin twin-size mattresses. Got twins? Here's a deal.",
            price: (30).toFixed(2),
            stock: 7,
            image: "images/twinTwinMattress.jpg"
        }
    ]
};

function renderMattresses() {
    var source = document.getElementById("mattressTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.mattresses;
    for (mattress in data) {
        var html = template({
            item: data[mattress].item,
            desc: data[mattress].desc,
            price: data[mattress].price,
            stock: data[mattress].stock,
            image: data[mattress].image
        });
        document.getElementById("store").insertAdjacentHTML("beforeend", html);
    }
}

function showForms() {
    var source = document.getElementById("store");
    var buttons = source.querySelectorAll(".btn");
    buttons.forEach(function(item) {
        item.addEventListener("click", function() {
            document.querySelector(".show").classList.replace("show", "hide");
            document.querySelector("form").classList.replace("hide", "show");
            document.getElementById('charge').innerHTML = `Your charge is $${item.value}`
        });
    });
}

function salesConfirm() {
    var source = document.getElementById('salesTemplate').innerHTML;
    var template = Handlebars.compile(source);
    var name = document.getElementById('form-name').value, email = document.getElementById('form-email').value, num = document.getElementById('form-number').value, street = document.getElementById('form-street').value, city = document.getElementById('form-city').value, state = document.getElementById('form-state').value, zip = document.getElementById('form-zip').value;
    var html = template({
        formName: name,
        formEmail: email,
        formNum: num,
        formStreetAddress: street,
        formAddress: `${city}, ${state} ${zip}`
    })
    document.getElementById('billing-info').insertAdjacentHTML('beforeend', html);
    document.getElementById('sales').classList.replace('hide', 'show');
    document.querySelector('form').classList.replace('show', 'hide');
}

renderMattresses();
showForms();
