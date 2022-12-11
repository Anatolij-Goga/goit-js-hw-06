const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// <li><img src="" alt=""></li>

const galleryListElement = document.querySelector('.gallery');

const markup = images
  .map(({ url, alt }) => `<li><img src = '${url}' alt = '${alt}' width="320"></li>`)
  .join('');

console.log(markup);

galleryListElement.insertAdjacentHTML('afterbegin', markup);

document.body.style.margin = '5px';

galleryListElement.style.cssText = `display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  `;
