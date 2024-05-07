
const params = new URLSearchParams(window.location.search);

const paramId = params.get("id");

document.addEventListener('DOMContentLoaded', async() => {
    //apiiden verileri al
    const res = await fetch ("../db.json");
    const data = await res.json();
    console.log(paramId, data.menu);
    //veriler arasında url'deki id'ye denk gelen veriyi al
    if (paramId) {
        const product = data.menu.find((item) => item.id == paramId);
        if (product) {
            renderPage(product);
        } else {
            // URL'de geçersiz bir id parametresi var, belki bir hata mesajı gösterilebilir
            console.error("Geçersiz ürün idsi:", paramId);
        }
    } else {
        // URL'de id parametresi yok, belki varsayılan bir sayfa gösterilebilir
        console.error("id parametresi bulunamadı");
    }
});
 
const outlet = document.getElementById("outlet");

function renderPage(product){
    console.log(product);
    outlet.innerHTML = `
    <!----ÜST KISMI------>
    <div class="d-flex justify-content-between fs-5">
        <a href="/">
            <img width="40px" src="/images/home.png" alt="">
        </a>
        <p>Anasayfa / ${product.category} / ${product.title.toLowerCase()}</p>
    </div>

    <!----İÇERİK KISMI------>
    <h1 class="text-center my-3">${product.title}</h1>

    <img style="border-radius:20px" src="${product.img}" alt="oreo">

    <h3 class="mt-4">
        <span>Ürünün Kategorisi:</span>
        <span class="text-primary">${product.category}</span>
    </h3>

    <h3 class="mt-4">
        <span>Ürünün Fiyatı:</span>
        <span class="text-primary">${product.price *3}₺</span>
    </h3>
    <p class="lead">
        ${product.desc}
    </p>
    `
}

