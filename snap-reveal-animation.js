window.addEventListener('load', animate);

function animate() {
    const animeObserver = new IntersectionObserver((animeEntries) => {
        animeEntries.forEach((animeEntry) => {
            if (animeEntry.isIntersecting) {
                animeEntry.target.classList.add('anime-active');
            } else {
                animeEntry.target.classList.remove('anime-active');
            }
        });
    });

    const animeOnceObserver = new IntersectionObserver((animeOnceEntries) => {
        animeOnceEntries.forEach((animeOnceEntry) => {
            if (animeOnceEntry.isIntersecting) {
                animeOnceEntry.target.classList.add('anime-active');
            }
        });
    });

    const animeContent = document.querySelectorAll('.anime-content');
    const animeOnceContent = document.querySelectorAll('.anime-once-content');

    animeContent.forEach((animeElement) => animeObserver.observe(animeElement));

    animeOnceContent.forEach((animeOnceElement) => animeOnceObserver.observe(animeOnceElement)); //animate only one time
}