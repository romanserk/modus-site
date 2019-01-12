var swiper = new Swiper('.swiper-container', {

    effect: 'coverflow',
    slidesPerView: '3',
    coverflowEffect: {
        rotate: 10,
        slideShadows: false,
        stretch: 0,
        depth: 90,
        modifier: 2
    },
    autoplay: {
        delay: 4000,
    },
    loop: true
});


var swiper2 = new Swiper('.swiper-container-flat', {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});




/**
 * holds all the posts
 * @param {the index of the post} index
 * @returns single post (image, title, paragraphs, tags)
 * @returns generatePost("numberOfPosts") returns the number of posts
 */
function generatePost(index) {

    var postsArr = [{
            image: "images/blogImg.png",
            paragraph: " Lorem ipsum dolor sit amet, qui at probo.",
            date: "9 May, 2018"
        },
        {
            image: "images/blogImg.png",
            paragraph: "Lorem ipsum dolor sit amet, qui at probo.",
            date: "4 May, 2018"
        },

    ];

    if (index == "numberOfPosts") {
        return postsArr.length;
    }

    return postsArr[index];
}




function ajustHTML(index) {
    var postFormation;

    postFormation =
        "<a href=\"#\">" +
        "<div class=\"single-post\">" +
        "<div class=\"image-container\">" +
        "<img src=" + generatePost(index).image + ">" +
        "</div>" +
        "<div class=\"post-content\">" +
        "<p>" + generatePost(index).paragraph + "</p>" +
        "<p class=\"post-date\">" + generatePost(index).date + "</p>"
    "</div>" +
    "</div>" +
    "</a>";


    return postFormation;
}


/**
 * load all posts on the wall into the "blog-container" div
 */
function showBlogContent() {

    var blogContainer = document.getElementById("blog-content");
    var postHolder;

    for (var i = 0; i < generatePost("numberOfPosts"); i++) {

        postHolder = ajustHTML(i);

        blogContainer.innerHTML += postHolder;
    }
}
if (window.location.pathname.includes('index.htm')) {
    showBlogContent();
}