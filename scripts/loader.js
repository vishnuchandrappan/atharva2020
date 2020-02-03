const loading = document.querySelector('.loading');

window.onload = function() {
    loading.style.animation="fade 1s linear";
    setTimeout(() => {
        loading.style.display="none";
    }, 1000);
};
