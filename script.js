/* Funzione per eliminare le offers of the week*/
const offersOfTheWeek = document.getElementById("offersOfTheWeekHide")
const button1 = document.getElementById("button1")
const hide1 = function(){
    if(offersOfTheWeek.style.display === "none"){
offersOfTheWeek.style.display = "block"
button1.textContent="HIDE"
    }else{
        offersOfTheWeek.style.display = "none"
        button1.textContent="SHOW"
    }
}

/* Funzione per eliminare welcome summer*/
const welcomeSummer = document.getElementById("welcomeSummerToHide")
const button2 = document.getElementById("button2")
const hide2 = function(){
    if(welcomeSummer.style.display === "none"){
        welcomeSummer.style.display = "block"
button2.textContent="HIDE"
    }else{
        welcomeSummer.style.display = "none"
        button2.textContent="SHOW"
    }
}

/* Funzione per eliminare today offer*/
const todayOffer = document.getElementById("todayOfferToHide")
const button3 = document.getElementById("button2")
const hide3 = function(){
    if(todayOffer.style.display === "none"){
        todayOffer.style.display = "block"
button3.textContent="HIDE"
    }else{
        todayOffer.style.display = "none"
        button3.textContent="SHOW"
    }
}

/* Funzione per eliminare last minute*/
const lastMinute = document.getElementById("lastMinuteToHide")
const button4 = document.getElementById("button4")
    const hide4 = function(){
    if(lastMinute.style.display === "none"){
        lastMinute.style.display = "block"
    button4.textContent="HIDE"
    }else{
        lastMinute.style.display = "none"
        button4.textContent="SHOW"
    }
}

/* Funzione per eliminare testimonial*/
const testimonial = document.getElementById("testimonialToHide")
const button5 = document.getElementById("button5")
    const hide5 = function(){
    if(testimonial.style.display === "none"){
        testimonial.style.display = "block"
    button5.textContent="HIDE"
    }else{
        testimonial.style.display = "none"
        button5.textContent="SHOW"
    }
}

/* travel counter */
const carousel = document.getElementsByClassName("carousel-item")
const cards = document.getElementsByClassName("card")
const travelCounter = document.getElementById("travelCounter")
let cardsNumber = cards.length
let carouselNumber = carousel.length
let totalTravels = cardsNumber + carouselNumber
console.log(totalTravels)
travelCounter.textContent = totalTravels

/* funzione per eliminare tutte le cards */
const collapseCardsButton = document.getElementById("collapsAllCards")
const collapseAllCards = function(){
for (const card of cards) {
    if (card.style.display === "none"){
        card.style.display = "block"
        collapseCardsButton.textContent = "HIDE ALL CARDS"
    } else {
        card.style.display = "none"
        collapseCardsButton.textContent = "SHOW ALL CARDS"
    }
}
}