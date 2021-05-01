document.querySelector("#giveawayImageFileiInput").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("giveaway-image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
});

document.querySelector("#winnerImageFileiInput").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("winner-image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
    const giveawayImageDataURL = localStorage.getItem("giveaway-image");

    const winnerImageDataURL = localStorage.getItem("winner-image");

    if (giveawayImageDataURL) {
        document.querySelector('#giveawayImgPreview').setAttribute("src", giveawayImageDataURL);
    }

    if (winnerImageDataURL) {
        document.querySelector('#winnerImgPreview').setAttribute("src", winnerImageDataURL);
    }
});

//*******************************************/
const handleInput = document.querySelector('.handleInput');
const handleText = document.querySelector('.handleText');

handleInput.addEventListener('input', write => {
    handleText.textContent = write.target.value
});

const commentInput = document.querySelector('.commentInput');
const commentText = document.querySelector('.commentText');

commentInput.addEventListener('input', write => {
    commentText.textContent = write.target.value
});

const commentsInput = document.querySelector('.commentsInput');
const numbersText = document.querySelector('.numbersText');

commentsInput.addEventListener('input', write => {
    numbersText.textContent = write.target.value
});