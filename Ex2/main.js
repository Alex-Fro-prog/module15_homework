let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
 document.body.offsetHeight, document.documentElement.offsetHeight,
 document.body.clientHeight, document.documentElement.clientHeight
);

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
 document.body.offsetWidth, document.documentElement.offsetWidth,
 document.body.clientWidth, document.documentElement.clientWidth
);

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert(`Текущая ширина экрана: ${scrollWidth}
    Текущая высота экрана: ${scrollHeight} 
    `);
});
