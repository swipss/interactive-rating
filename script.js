const ratings = document.querySelectorAll('.number')
const submit = document.getElementById('submit')
const ratingContainer = document.querySelector('.container')
const thankYouContainer = document.querySelector('.thank-you-container')
const ratingText = document.getElementById('rating') 
let rating;

function onSubmit() {
    submit.addEventListener('click', function() {
        if (!rating) {
            alert('Please select a rating')
        } else {
            ratingContainer.setAttribute('style', 'display: none')
            thankYouContainer.setAttribute('style', 'display: flex')
            ratingText.innerHTML = rating
        }
    })
}

ratings.forEach((button) => button.addEventListener('click', function (event) {
    rating = button.innerHTML
}))

onSubmit()