//Gallery JS Start
const imagesPerPage = 20;
        const totalImages = 60; // 20 images per page * 3 pages

        function loadPage(page) {
            const gallery = document.getElementById('gallery-images');
            gallery.innerHTML = '';
            
            const start = (page - 1) * imagesPerPage;
            const end = start + imagesPerPage;

            for (let i = start; i < end; i++) {
                const imgElement = document.createElement('img');
                imgElement.src = `https://picsum.photos/200/200?random=${i + 1}`;
                imgElement.classList.add('gallery-image', 'm-2');
                imgElement.dataset.bsToggle = 'modal';
                imgElement.dataset.bsTarget = '#imageModal';
                imgElement.onclick = () => {
                    document.getElementById('modal-image').src = imgElement.src;
                };
                gallery.appendChild(imgElement);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadPage(1);
        });

// Gallery JS End