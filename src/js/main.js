var valueCount;
var price = document.getElementsByClassName("price").innerText;

var PrixOfAll = document.getElementsByClassName('PRAf')

var btnRemove = document.getElementsByClassName("removeAll");

var heart = document.getElementsByClassName('heart');



// =======================================================
var plus = document.getElementsByClassName('plus-btn');
for (var i = 0; i < plus.length; i++) {
    newplus = plus[i]
    newplus.addEventListener('click', function(event) {
        var buttonclicked = event.target
        var input = buttonclicked.parentElement.parentElement.children[4]
        var newvalue = parseInt(input.value) + 1
        input.value = newvalue
            //price calculation function
        path = buttonclicked.parentElement.parentElement.children[6].children[1]


        var price = parseFloat(path.innerText);

        var total = newvalue * price;
        buttonclicked.parentElement.parentElement.children[7].innerText = total
        var result = 0;
        for (var i = 0; i < PrixOfAll.length; i++) {
            var val = parseInt(PrixOfAll[i].innerText);
            result += val;
            document.getElementById('ToPrix').innerHTML = result + ' DT';

        }
    })
}

// minus-btn

var minus = document.getElementsByClassName('minus-btn');
for (var i = 0; i < minus.length; i++) {
    newminus = minus[i]
    newminus.addEventListener('click', function(event) {
        var buttonclicked = event.target
        var input = buttonclicked.parentElement.parentElement.children[4]
        if (input.value == 1) {
            return false
        } else {
            var newvalue = parseInt(input.value) - 1
            input.value = newvalue
                //price calculation function
            var price = parseFloat(path.innerText);
            var total = newvalue * price;
            buttonclicked.parentElement.parentElement.children[7].innerText = total
            var result = 0;
            for (var i = 0; i < PrixOfAll.length; i++) {
                var val = parseInt(PrixOfAll[i].innerText);
                result += val;
                document.getElementById('ToPrix').innerHTML = result + ' DT';

            }
        }
    })
}
// removing element 

for (var i = 0; i < btnRemove.length; i++) {
    var x = btnRemove[i];
    x.addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove();
        if (btnRemove.length !== 0) {
            var result = 0;
            for (var i = 0; i < PrixOfAll.length; i++) {
                var val = parseInt(PrixOfAll[i].innerText);
                result += val;
                document.getElementById('ToPrix').innerHTML = result + 'DT';

            }
        } else {
            document.getElementById('ToPrix').innerHTML = '0 ' + ' DT';
        }
    });
}

// all prices
var result = 0;
for (var i = 0; i < PrixOfAll.length; i++) {
    var val = parseInt(PrixOfAll[i].innerText);
    result += val;
    document.getElementById('ToPrix').innerHTML = result + ' DT';

}

// change the heart 
for (var i = 0; i < heart.length; i++) {
    let chColor = heart[i];
    chColor.addEventListener("click", () => {
        if (chColor.getAttribute('class') === "far fa-heart heart") {
            chColor.setAttribute('class', "fas fa-heart heart");
        } else {
            chColor.setAttribute('class', "far fa-heart heart");
        }
    });
}