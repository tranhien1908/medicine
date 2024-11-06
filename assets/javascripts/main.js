let bannerImg = document.querySelector(".banner-img")
let bannerLeft = document.querySelector(".banner-left")
let bannerRight = document.querySelector(".banner-right")

const imgList = {
    currentIndex : 0,
    imagesLink: [
        "./asset/img/anhthuoc.jpg", "./asset/img/anhthuoc1.jpg"
    ]
}

showImage(0);

function showImage(index) {
    bannerImg.style.opacity = 0;
    imgList.currentIndex = index;
    setTimeout( () => {
        bannerImg.src = imgList.imagesLink[index];
        bannerImg.style.opacity = 1;
    },400)
}

bannerLeft.addEventListener('click', function () {
    if (imgList.currentIndex == 0) 
        imgList.currentIndex = imgList.imagesLink.length - 1
    else 
        imgList.currentIndex--;
    showImage(imgList.currentIndex)
})

bannerRight.addEventListener('click', function () {
    if (imgList.currentIndex == imgList.imagesLink.length - 1) 
        imgList.currentIndex = 0
    else 
        imgList.currentIndex++;
    showImage(imgList.currentIndex)
})
