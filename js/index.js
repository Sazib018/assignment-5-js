function getElements(seat) {
    return document.getElementById(seat);
}

function seatBooking(seat) {
    const buttonColor = getElements(seat).classList.value;
    const ulList = getElements("upcoming-price");

    if (buttonColor.includes("bg-green-400") === true) {
        alert("All ready Booked");


    }
    else if (ulList.children.length > 3) {
        alert("You can't booked more then 4 seats");
    }

    else {
        // access button and add class
        getElements(seat).classList.add("bg-green-400", "text-white");

        // access total seats and decrease
        const totalSeat = getElements("seatLeft").innerText - 1;
        getElements("seatLeft").innerText = totalSeat;

        // access add total seats
        const totalAdd = parseInt(getElements("totalAdd").innerText) + 1;
        getElements("totalAdd").innerText = totalAdd;

        // access ul list and added dynamic html
        const li = document.createElement("li");
        li.classList.add("flex", "justify-between", "mb-2");
        li.innerHTML = ` <span>${seat}</span>
                          <span>Economy</span>
                          <span>550</span>`;
        ulList.appendChild(li);

        getElements("totalPrice").innerText = 550 * ulList.children.length;
    }
}

function applyCoupon() {
    const inputValue = getElements("coupon-input").value;
    const totalPrice = getElements("totalPrice").innerText;
    if (inputValue === "NEW15") {
        const discountAmount = (parseInt(totalPrice) * 15) / 100;
        const grandTotals = parseInt(totalPrice) - discountAmount;
        getElements("discount").innerText = discountAmount.toFixed();
        getElements("grandTotal").innerText = grandTotals.toFixed();
    }
    if (inputValue === "Couple 20") {
        const discountAmount = (parseInt(totalPrice) * 20) / 100;
        const grandTotals = parseInt(totalPrice) - discountAmount;
        getElements("discount").innerText = discountAmount.toFixed();
        getElements("grandTotal").innerText = grandTotals.toFixed();
    }
    /*  if (totalPrice === '0' && inputValue === "NEW15" && inputValue === "Couple 20") {
       alert("you can't select any seat")
     }
     else{
       alert('invalid coupon')
     } */
    getElements("coupon-input").value = ''
}





function form() {
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();

    document.getElementById('next').disabled = !(name && number && email);
}

document.getElementById('name').addEventListener('input', form);
document.getElementById('number').addEventListener('input', form);
document.getElementById('email').addEventListener('input', form);

document.getElementById('bookingForm').addEventListener('submit', function (event) {
event.book();


document.getElementById('bookingForm').style.display = 'none';
document.getElementById('success').classList.remove('hidden');
document.getElementById('success').classList.add('visible');
});

function continues() {
    
}






