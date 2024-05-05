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
