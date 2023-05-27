
const carouselInner = document.querySelector('.carousel-inner');

fetch('https://randomuser.me/api/?results=3')
  .then(response => response.json())
  .then(data => {
    const users = data.results;

    users.forEach((user, index) => {
      const slideItem = document.createElement('div');
      slideItem.classList.add('carousel-item');

      if (index === 0) {
        slideItem.classList.add('active');
      }

      const userContent = document.createElement('div');
      userContent.classList.add('user-content');
      userContent.innerHTML = `
    <img class="d-block w-100" src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
    <div class="user-details">
      <h3>${user.name.first} ${user.name.last}</h3>
    </div>
  `;

      slideItem.appendChild(userContent);
      carouselInner.appendChild(slideItem);
    });
  })
  .catch(error => {
    console.error(error);
  });