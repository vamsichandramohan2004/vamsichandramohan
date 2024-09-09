document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('goalsetting');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    // Placeholder management
    inputField.addEventListener('focus', () => {
        inputField.dataset.placeholder = inputField.placeholder;
        inputField.placeholder = 'Try typing "Workout at 7 pm"';
    });

    inputField.addEventListener('blur', () => {
        inputField.placeholder = inputField.dataset.placeholder || '🏷️ Add a task';
    });

    document.getElementById('adt').addEventListener('click', () => {
        if (inputField.value.trim() === '') {
            alert('You have not added any task');
        } else {
            const card = document.createElement('div');
            card.className = 'swiper-slide';
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Task</h5>
                        <p class="card-text">${inputField.value}</p>
                        <button class="btn btn-success ml-5 done-btn">Done</button>
                    </div>
                </div>`;
            swiperWrapper.appendChild(card);
            inputField.value = '';

            // Update Swiper to recognize new slide
            swiper.update();

            // Add event listener to the newly created "Done" button
            card.querySelector('.done-btn').addEventListener('click', () => {
                card.remove();
                swiper.update(); // Update Swiper to reflect the removal of the slide
            });
        }
    });

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 95, // Space between slides in pixels
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
document.getElementById('home').addEventListener('click',()=>{
    window.location.href = 'index.html';
});
document.getElementById('about').addEventListener('click',()=>{
    window.location.href = 'about.html';
});