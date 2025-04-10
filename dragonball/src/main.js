import './style.css'
const btn = document.querySelector('#btn');
const fieldName = document.querySelector('#fieldName');
const nameDragonball = document.createElement('h1');

btn.addEventListener('click', () => {
  getAPI();  
})
async function getAPI() {

  try{
    const response = await fetch(`https://dragonball-api.com/api/characters?name=${fieldName.value.toLowerCase()}`);
    const data = await response.json();
  
    const getImgApi = data[0].image;
    const img = document.querySelector('.dragonImg');

    const getFirstLetter = String(fieldName.value).slice(1); // First letter sliced
    const toUppderCase = getFirstLetter.toLowerCase(); // Rest of word
    const getFirstLetterToUpperCase = String(fieldName.value).charAt(0).toUpperCase();

    nameDragonball.innerText = getFirstLetterToUpperCase + toUppderCase;
    nameDragonball.classList.add('dragonball-name');
    document.querySelector('.container').appendChild(nameDragonball);

    img.style.display = 'block';
    img.src = getImgApi;

    fieldName.value = '';
    fieldName.focus();
    console.log(getFirstLetterToUpperCase + toUppderCase);

  }catch(error){
    console.log("Erro: " +error);

    if(fieldName.value.length === 0) alert('Please, enter a DragonBall name.');
  }
}
document.addEventListener('keypress', e => {
  if(e.key === 'Enter') return getAPI();
})