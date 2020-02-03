const loading = document.querySelector('.loading');

window.onload = function() {
    loading.style.animation="fade 1s linear";
    setTimeout(() => {
        loading.style.display="none";
    }, 1000);
};

// const links = document.querySelectorAll(".nav-links span a");
// links.forEach(link => {
//     link.addEventListener("click",() => {
//         loading.style.display="block";
//     });
// });
