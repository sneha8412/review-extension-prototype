const addReview = document.getElementById('add-new-review');

// EVent handler for the Add Review Button
addReview.addEventListener('click', () => {

    let createdReviewsList = document.getElementById("created-reviews-list");
    let newReview = document.getElementById("add-review-textbox");
    let newRating = document.getElementById("add-rating-textbox");
    // read the rating numerical value from rating textbox
    let ratingValue = parseInt(newRating.value);

    // create a new div to represent the review element
    let reviewElement = document.createElement("div");
    // read the text of the user added review from the text box and set it on the new review element
    reviewElement.innerText = newReview.value;

    addLineBreak(reviewElement);

    addReviewRating(reviewElement, ratingValue);

    addLineBreak(createdReviewsList);

    createdReviewsList.appendChild(reviewElement);

});

function addLineBreak(element){
    const lineBreak = document.createElement('br');
    element.appendChild(lineBreak);
}

// Adds all the stars for the review based on rsting value
function addReviewRating(reviewElement, ratingValue=0)
{
    // add checked stars
    for(let i=0; i< ratingValue; i++)
    {
        addReviewRatingStar(reviewElement, true);
    }

    // Add unchecked stars
    for(let i=0; i< (5 - ratingValue); i++)
    {
        addReviewRatingStar(reviewElement, false);
    }
}

// adds a single rating star checked or unchecked to the passed in review element,
function addReviewRatingStar(reviewElement, isChecked=false){
    const span = document.createElement('span');
    span.classList.add('fa');
    span.classList.add('fa-star');
    if(isChecked)
    {
        span.classList.add('checked');
    }
    reviewElement.appendChild(span);
}