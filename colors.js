const allCoffeeLabels = document.querySelectorAll('.colors > li > input');
const green = '#027143';
const pink = '#c86280';
const magenta = '#d450ae';


const mainTitle = document.querySelector('#main-text > h2');
let mainTitleSpan = document.querySelector('#main-text span');
let mainText = document.querySelector('#main-text p');
const mainImage = document.querySelector('#main-image');
const backgroundCircle = document.querySelector('.background');

for (el of allCoffeeLabels){
    el.addEventListener('click',(e)=> {
        let choosenOption = e.target.value;
        switch (choosenOption){
            case 'green':
            mainTitleSpan.innerText = 'Matcha dessert.';
            mainTitleSpan.style.color = green;
            mainText.innerText = 'This blend of sweetened premium matcha green tea inspired dessert, milk and ice-topped off with sweetened whipped cream inspires a delicious boost and good green vibes.';
            mainImage.setAttribute('src', 'images/img1.png');
            mainImage.setAttribute('alt', 'Matcha Dessert Picture');
            backgroundCircle.style.backgroundColor = green;
            break;
        
            case 'pink':
            mainTitleSpan.innerText = 'Sujeonggwa Dessert.';
            mainTitleSpan.style.color = pink;
            mainText.innerText = 'Sujeonggwa is a traditional dessert tea made with fresh ginger root, spices and dried fruit. Cinnamon sticks, persimmon and pears are commonly used. With this tea in mind, we created an ice cream flavor packed with fresh ginger and spices and thought a floral note would leave a delicate touch.';
            mainImage.setAttribute('src', 'images/img2.png');
            mainImage.setAttribute('alt', 'Sujeonggwa Dessert Picture');
            backgroundCircle.style.backgroundColor = pink;
            break;

            case 'magenta':
                mainTitleSpan.innerText = 'Passionfruit Pavlova.';
                mainTitleSpan.style.color = magenta;
                mainText.innerText = 'Part of our Shine a Light ice cream initiative and made in collaboration with one of our favorite noonas, Chef Kristen Kish. We have one word or you: pavlova, pavlova, pavlova! Now imagine it in ice cream form. Imagine cotton candy meets marshmallow meets mousse meets a beautifully textured white cloud.';
                mainImage.setAttribute('src', 'images/img3.png');
                mainImage.setAttribute('alt', 'Passionfruit Pavlova Dessert Picture');
                backgroundCircle.style.backgroundColor = magenta;
                break;

        }
    })
}