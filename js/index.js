function getButton(seat) {
    return document.getElementById(seat);
}


function seatBooking(seat) {
    getButton(seat).classList.add('bg-green-400')
    getButton(seat).classList.add('text-white')
    const totalSeat = getButton('seatLeft').innerText - 1
    if (seat.includes(seat)) {
        alert('do not click')
    }
    getButton('seatLeft').innerText = totalSeat

}

document.getElementById('total-add')

let SinglePrice =550;


function addSeat(e) {
    const seatAdd = getButton('total-add').innerText + 1

if (seatAdd <= 4) {
    
    const elements = document.getElementById("upcoming-price");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = e.target.innerText;
    const Economy = document.createElement("p");
    Economy.innerText = "Economy";
    const SinglePrice = document.createElement("p");
    SinglePrice.innerText = 550;

    li.appendChild(p)
    li.appendChild(Economy)
    li.appendChild(SinglePrice)
    elements.appendChild(li)
}
}
