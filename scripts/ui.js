import {buttonData} from "./constants.js";

const buttonsArea = document.getElementById("buttons");

// MENU LİST DİVİNİ ÇAĞIRMA
const menuList = document.getElementById('menu-list');
// Arayüz değişikliği yapılan bütün dosyalar
export const renderMenuItems = (data) => {
//data dizisindeki her bir obje için bir tane kart htmli oluştur.
// join metodu diziyi metine çeviriyor
const cardsHTML = data
  .map(
    (item) => ` 
   <a
      id="card" 
      href="#" 
      class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
      <img
      class="rounded shadow img-fluid"
      src="${item.img}"
    />
     <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price *32).toFixed(2)}₺</p>
        </div>
        <p class="lead">${item.desc}
        </p>
     </div>
 </a>
`).join('');

menuList.innerHTML = cardsHTML;
};

// dizideki ger bir eleman için ekrana buton bas
export const renderButtons = (activeText) =>{
  //eski oluşturulan butonları kaldırma
  buttonsArea.innerHTML ='';

  buttonData.forEach((btn)=>{

    //buton elementi oluştur
    const buttonEle = document.createElement('button');

    //class belirle
    buttonEle.className = "btn btn-outline-dark";

    //data-id değerini tanımla
    buttonEle.setAttribute('data-id', btn.value);

    //içindeki yazıyı belirle
    buttonEle.innerText = btn.text

    // eğer ki butonun yazısı aktif yazı ile eşleşirse siyah yap
    if(btn.text === activeText){
      buttonEle.classList.add('btn-dark', 'text-white');
    }

    // butonu dom (html)e gönder
    buttonsArea.appendChild(buttonEle);
  });
};
