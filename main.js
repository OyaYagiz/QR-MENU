// diğer dosyalardan alınan veriler
import {renderMenuItems, renderButtons}from './scripts/ui.js';

const buttonsArea = document.getElementById('buttons');

//*datayı global scope'da tanımlama
let data;

//* menu verilerini json dosyasından çekme
async function fetchMenu (){
 
    //* api den verileri al
    const res = await fetch('./db.json');

 //*json verisini js'ye çevir
   data = await res.json();

}
//* olay izleme
window.addEventListener('DOMContentLoaded', async () => {
 //verileri çeken fonksiyonu çalıştır.   
 renderButtons("Hepsi");
fetchMenu()
//fonksiyon başarılı olursa kartları basan fonksiyonu çalıştır.
.then(() => renderMenuItems(data.menu));
});

//butonara tıklanma olayını izle
buttonsArea.addEventListener("click", (event) =>{
    //
    if(event.target.id == "buttons")return;

    //active olan butonu belirlemek için butonları ekrana tekrar bas
    renderButtons(event.target.innerText);

    const selectedCategory = event.target.dataset.id;

    if(selectedCategory === "all"){
        renderMenuItems(data.menu)
    }else{
        const filtred = data.menu.filter(
            (item) => item.category === selectedCategory);

        renderMenuItems(filtred);
    }
    
});



