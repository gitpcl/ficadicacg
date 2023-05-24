function classChange() {
  document.getElementById('menu').classList.toggle('active')
}

let cropper = null

function readAndPreview(file, imageElementId) {
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    const imgElement = document.querySelector(`#${imageElementId}`)
    imgElement.src = reader.result

    if (cropper !== null) {
      cropper.destroy()
    }
    cropper = new Cropper(imgElement, {
      aspectRatio: 1,
      autoCropArea: 1,
      viewMode: 1,
      dragMode: 'move',
      cropBoxMovable: false,
      cropBoxResizable: false
    })
  })

  reader.readAsDataURL(file)
}

document
  .querySelector('#giveawayImageFileiInput')
  .addEventListener('change', function () {
    readAndPreview(this.files[0], 'giveawayImgPreview')
  })

document
  .querySelector('#winnerImageFileiInput')
  .addEventListener('change', function () {
    readAndPreview(this.files[0], 'winnerImgPreview')
  })

document
  .querySelector('#cropGiveawayButton')
  .addEventListener('click', function () {
    if (cropper) {
      const croppedImageDataURL = cropper
        .getCroppedCanvas({ width: 1080, height: 1080 })
        .toDataURL('image/png')
      localStorage.setItem('giveaway-image', croppedImageDataURL)
      localStorage.setItem('giveaway-image-front', croppedImageDataURL)
      document.querySelector('#giveawayImgPreview').src = croppedImageDataURL
      cropper.destroy()
    }
  })

document
  .querySelector('#cropWinnerButton')
  .addEventListener('click', function () {
    if (cropper) {
      const croppedImageDataURL = cropper
        .getCroppedCanvas({ width: 1080, height: 1080 })
        .toDataURL('image/png')
      localStorage.setItem('winner-image', croppedImageDataURL)
      localStorage.setItem('winner-image-front', croppedImageDataURL)
      document.querySelector('#winnerImgPreview').src = croppedImageDataURL
      cropper.destroy()
    }
  })

window.onload = () => {
  console.log('window loaded')
  const giveawayImageDataURL = localStorage.getItem('giveaway-image')
  const winnerImageDataURL = localStorage.getItem('winner-image')

  if (giveawayImageDataURL) {
    const giveawayImg = document.querySelector('#giveawayImgPreview')
    const displayGiveawayImg = document.querySelector('#displayGiveawayImg')
    giveawayImg.src = giveawayImageDataURL
    displayGiveawayImg.src = giveawayImageDataURL
  }

  if (winnerImageDataURL) {
    const winnerImg = document.querySelector('#winnerImgPreview')
    const displayWinnerImg = document.querySelector('#displayWinnerImg')
    winnerImg.src = winnerImageDataURL
    displayWinnerImg.src = winnerImageDataURL
  }
}

/* PAGE RELOAD ******************************************/

const reloadPage = document
  .querySelector('#reloadPage')
  .addEventListener('click', function () {
    location.reload()
  })

/* CLEAR STORAGE ******************************************/

const storageClear = document
  .querySelector('#storageClear')
  .addEventListener('click', function () {
    localStorage.clear()
    location.reload()
  })
