// blog page
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

function blog1() {
    const blog1Content = document.querySelector(".blog-1-content");

    if (blog1Content.style.display == "block") {
        blog1Content.style.display = "none";
        btn1.innerHTML = "Read More";
    } else {
        blog1Content.style.display = "block";
        btn1.innerHTML = "Close";
    }
}
function blog2() {
    const blog2Content = document.querySelector(".blog-2-content");

    if (blog2Content.style.display == "block") {
        blog2Content.style.display = "none";
        btn2.innerHTML = "Read More";
    } else {
        blog2Content.style.display = "block";
        btn2.innerHTML = "Close";
    }
}
function blog3() {
    const blog3Content = document.querySelector(".blog-3-content");

    if (blog3Content.style.display == "block") {
        blog3Content.style.display = "none";
        btn3.innerHTML = "Read More";
    } else {
        blog3Content.style.display = "block";
        btn3.innerHTML = "Close";
    }
}
