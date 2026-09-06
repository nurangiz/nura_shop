// 30 ta Mahsulotlar Bazasi va Savat/Kalkulyator Mantiqi (Tuzatilgan versiya)

const products = [
  // Kiyimlar (10 ta)
  { id: 1, category: 'kiyim', name: 'Klassik ipak koʻylak', price: 120, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500', desc: 'Yuqori sifatli tabiiy ipakdan tayyorlangan ayollar libosi.' },
  { id: 2, category: 'kiyim', name: 'Yozgi zamonaviy kombinezon', price: 95, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500', desc: 'Yengil va havo oʻtkazuvchi matodan tikilgan yozgi libos.' },
  { id: 3, category: 'kiyim', name: 'Erkaklar kostyum-shim', price: 280, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500', desc: 'Rasmiy uchrashuvlar va toʻylar uchun mos klassik kostyum.' },
  { id: 4, category: 'kiyim', name: 'Daniy kostyum va kurtka', price: 110, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500', desc: 'Kundalik kiyish uchun zamonaviy djinsi kurtka.' },
  { id: 5, category: 'kiyim', name: 'Qishki Charm Kurtka', price: 210, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500', desc: 'Tabiiy charmdan tayyorlangan issiq va uslubli kurtka.' },
  { id: 6, category: 'kiyim', name: 'Sport uslubidagi xudi', price: 65, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500', desc: 'Yumshoq paxtali, kundalik qulay xudi.' },
  { id: 7, category: 'kiyim', name: 'Oq premium futbolka', price: 35, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500', desc: '100% paxtali, minimalist uslubdagi futbolka.' },
  { id: 8, category: 'kiyim', name: 'Klassik trench palto', price: 240, img: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500', desc: 'Bahorgi va kuzgi mavsum uchun nafis palto.' },
  { id: 9, category: 'kiyim', name: 'Jun Sviter', price: 85, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500', desc: 'Issiq tutuvchi va mayin jun sviter.' },
  { id: 10, category: 'kiyim', name: 'Sportiy shim', price: 55, img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500', desc: 'Harakatlanish uchun juda qulay erkin shim.' },

  // Soatlar (10 ta)
  { id: 11, category: 'soat', name: 'Oltinrang Chronograph', price: 320, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', desc: 'Zanglamaydigan poʻlatdan ishlangan oltin rangli premium soat.' },
  { id: 12, category: 'soat', name: 'Minimalist charm soat', price: 150, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500', desc: 'Jigarrang charm tasmali minimalist mexanik soat.' },
  { id: 13, category: 'soat', name: 'Qora Premium Soat', price: 290, img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500', desc: 'Suv oʻtkazmaydigan, qora mat rangli zamonaviy soat.' },
  { id: 14, category: 'soat', name: 'Aqlli Smart Watch', price: 180, img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500', desc: 'Salomatlik va bildirishnomalarni kuzatuvchi smart soat.' },
  { id: 15, category: 'soat', name: 'Kumushrang Klassik Soat', price: 210, img: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500', desc: 'Elegant va har qanday kiyimga mos keluvchi soat.' },
  { id: 16, category: 'soat', name: 'Sport uslubidagi soat', price: 110, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500', desc: 'Zarbalarga chidamli va sekundomerli soat.' },
  { id: 17, category: 'soat', name: 'Mexanik skeletal soat', price: 450, img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500', desc: 'Ichki mexanizmi koʻrinib turuvchi eksklyuziv soat.' },
  { id: 18, category: 'soat', name: 'Titan korpusli soat', price: 380, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500', desc: 'Mustahkam titan korpusli yengil va sifatli soat.' },
  { id: 19, category: 'soat', name: 'Ayollar uchun brillantli soat', price: 270, img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500', desc: 'Nafis va mayda toshlar bilan bezatilgan soat.' },
  { id: 20, category: 'soat', name: 'Retro vintage soat', price: 130, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500', desc: 'Klassik va nostaljik dizaynga ega qoʻl soati.' },

  // Oyoq kiyimlar (10 ta)
  { id: 21, category: 'poyabzal', name: 'Klassik charm tufli', price: 190, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500', desc: 'Tabiiy charm, qulay va uzoqga chidamli tufli.' },
  { id: 22, category: 'poyabzal', name: 'Oq krossovka', price: 110, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500', desc: 'Yengil, kundalik kiyish uchun oq krossovka.' },
  { id: 23, category: 'poyabzal', name: 'Sport yugurish krossovkasi', price: 135, img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500', desc: 'Amortizatsiyali va fitnes uchun moʻljallangan.' },
  { id: 24, category: 'poyabzal', name: 'Baland poshtali poyabzal', price: 160, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500', desc: 'Nafis ayollar uchun baland poshtali charm tufli.' },
  { id: 25, category: 'poyabzal', name: 'Jigarrang Lofer', price: 140, img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500', desc: 'Yozgi va bahorgi mavsum uchun qulay lofer.' },
  { id: 26, category: 'poyabzal', name: 'Qishki etik (Boots)', price: 210, img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500', desc: 'Qalin va issiq qishki charm etik.' },
  { id: 27, category: 'poyabzal', name: 'Basketbol krossovkasi', price: 175, img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500', desc: 'Baland toʻpiqli va harakatlar uchun elastik.' },
  { id: 28, category: 'poyabzal', name: 'Zamsh Lofer', price: 125, img: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500', desc: 'Yumshoq zamsh matoli zamonaviy poyabzal.' },
  { id: 29, category: 'poyabzal', name: 'Sayohat krossovkasi', price: 145, img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500', desc: 'Uzoq masofaga piyoda yurish uchun maxsus tayyorlangan.' },
  { id: 30, category: 'poyabzal', name: 'Klassik qora oksford', price: 220, img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500', desc: 'Biznes uchrashuvlar uchun haqiqiy erkaklar tuflisi.' }
];

let cart = [];

// 1. Render Products
function renderProducts(categoryFilter = 'all') {
  const container = document.getElementById('productsContainer');
  if (!container) return;
  
  container.innerHTML = '';

  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  filteredProducts.forEach(product => {
    const cardHTML = `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product-card h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="product-img-wrapper">
              <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="p-3">
              <span class="badge bg-secondary mb-2 text-uppercase">${product.category}</span>
              <h5 class="fw-bold fs-6 mb-1">${product.name}</h5>
              <p class="small text-muted mb-2">${product.desc}</p>
              <div class="stars mb-2">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div class="p-3 pt-0 d-flex justify-content-between align-items-center">
            <span class="fw-bold text-accent fs-5">$${product.price}</span>
            <button class="btn btn-gold btn-sm fw-bold" onclick="addToCart(${product.id})">
              <i class="fa-solid fa-cart-plus me-1"></i> Qoʻshish
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// 2. Add to Cart & Calculator Logic
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
}

function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

// 3. Update Cart Modal & Real-time Total Calculation
function updateCartUI() {
  const cartBadge = document.getElementById('cartBadge');
  const cartContainer = document.getElementById('cartItemsContainer');
  const totalPriceEl = document.getElementById('cartTotalPrice');

  // Badge count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) cartBadge.textContent = totalItems;

  // Render items
  if (!cartContainer || !totalPriceEl) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="text-center text-muted my-4">Savatingiz hozircha boʻsh.</p>';
    totalPriceEl.textContent = '$0.00';
    return;
  }

  cartContainer.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = Number(item.price) * Number(item.quantity);
    totalPrice += itemTotal;

    cartContainer.innerHTML += `
      <div class="d-flex align-items-center justify-content-between my-2 p-2 border-bottom">
        <div class="d-flex align-items-center gap-3">
          <img src="${item.img}" class="cart-item-img" alt="${item.name}">
          <div>
            <h6 class="mb-0 fw-bold">${item.name}</h6>
            <small class="text-muted">$${item.price} x ${item.quantity}</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary px-2" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span class="fw-bold">${item.quantity}</span>
          <button class="btn btn-sm btn-outline-secondary px-2" onclick="updateQuantity(${item.id}, 1)">+</button>
          <span class="fw-bold ms-3">$${itemTotal}</span>
          <button class="btn btn-sm btn-link text-danger ms-2" onclick="removeFromCart(${item.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  });

  totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
}

// 4. Category Filtering Event
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const category = e.target.getAttribute('data-category');
      renderProducts(category);
    });
  });
});