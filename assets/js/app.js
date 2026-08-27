/**
 * Style Kish / Persian Luxe - Main Application Logic
 * Vanilla JavaScript - Zero Build Step - GitHub Pages Ready
 */

// Configuration
const CONFIG = {
  brandName: "استایل کیش",
  brandEnglish: "Style Kish",
  telegramUsername: "StyleKish_Support", // Replace with your telegram username or bot
  whatsappNumber: "+989123456789", // VIP concierge support
  currencyUnit: "تومان",
};

// Utilities
function formatPrice(num) {
  if (num === undefined || num === null || isNaN(num)) return '۰';
  return Number(num).toLocaleString('fa-IR');
}

function toPersianDigits(str) {
  if (str === null || str === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.toString().replace(/\d/g, x => farsiDigits[x]);
}

// Toast Notifications
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'check_circle';
  if (type === 'info') icon = 'info';
  if (type === 'telegram') icon = 'send';
  if (type === 'error') icon = 'error';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${icon}</span>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Shopping Cart Management
const Cart = {
  getItems() {
    try {
      const items = localStorage.getItem('stylekish_cart');
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem('stylekish_cart', JSON.stringify(items));
    this.updateUI();
  },

  addItem(product, size = null, color = null, quantity = 1) {
    const items = this.getItems();
    const chosenSize = size || (product.sizes ? product.sizes[0] : 'استاندارد');
    const chosenColor = color || (product.colors ? product.colors[0].name : 'پیش‌فرض');

    const existingIndex = items.findIndex(
      item => item.id === product.id && item.selectedSize === chosenSize && item.selectedColor === chosenColor
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        sku: product.sku || 'SKU-00',
        name: product.name,
        subtitle: product.subtitle || '',
        price: product.price,
        originalPrice: product.originalPrice || product.price,
        image: product.image,
        selectedSize: chosenSize,
        selectedColor: chosenColor,
        quantity: quantity
      });
    }

    this.saveItems(items);
    showToast(`«${product.name}» به سبد خرید افزوده شد`, 'success');
  },

  removeItem(index) {
    const items = this.getItems();
    const removed = items.splice(index, 1);
    this.saveItems(items);
    if (removed.length) {
      showToast(`«${removed[0].name}» از سبد خرید حذف شد`, 'info');
    }
  },

  updateQuantity(index, delta) {
    const items = this.getItems();
    if (items[index]) {
      items[index].quantity += delta;
      if (items[index].quantity <= 0) {
        items.splice(index, 1);
      }
      this.saveItems(items);
    }
  },

  clear() {
    localStorage.removeItem('stylekish_cart');
    this.updateUI();
  },

  getTotal() {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  updateUI() {
    const count = this.getCount();
    const countBadges = document.querySelectorAll('.cart-count-badge');
    countBadges.forEach(badge => {
      badge.textContent = toPersianDigits(count);
      if (count > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });

    this.renderCartDrawer();
  },

  renderCartDrawer() {
    const container = document.getElementById('cart-drawer-items');
    const totalEl = document.getElementById('cart-drawer-total');
    const emptyEl = document.getElementById('cart-drawer-empty');
    const footerEl = document.getElementById('cart-drawer-footer');

    if (!container) return;

    const items = this.getItems();
    if (items.length === 0) {
      container.innerHTML = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
      if (footerEl) footerEl.classList.add('hidden');
      return;
    }

    if (emptyEl) emptyEl.classList.add('hidden');
    if (footerEl) footerEl.classList.remove('hidden');

    let html = '';
    items.forEach((item, index) => {
      html += `
        <div class="flex gap-4 p-4 border-b border-gray-100 dark:border-neutral-800 items-center justify-between">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover rounded bg-neutral-100 shrink-0">
          <div class="flex-grow">
            <h4 class="font-serif text-sm font-bold text-neutral-900">${item.name}</h4>
            <p class="text-xs text-neutral-500 mt-1">سایز: ${item.selectedSize} | رنگ: ${item.selectedColor}</p>
            <div class="text-xs text-neutral-900 font-semibold mt-1 font-sans">
              ${formatPrice(item.price)} ${CONFIG.currencyUnit}
            </div>
            <div class="flex items-center gap-2 mt-2">
              <button onclick="Cart.updateQuantity(${index}, -1)" class="w-6 h-6 rounded border border-neutral-200 flex items-center justify-center text-xs hover:bg-neutral-100 transition">-</button>
              <span class="text-xs font-semibold px-2">${toPersianDigits(item.quantity)}</span>
              <button onclick="Cart.updateQuantity(${index}, 1)" class="w-6 h-6 rounded border border-neutral-200 flex items-center justify-center text-xs hover:bg-neutral-100 transition">+</button>
            </div>
          </div>
          <button onclick="Cart.removeItem(${index})" class="text-neutral-400 hover:text-red-500 p-1 transition" title="حذف">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
    if (totalEl) {
      totalEl.textContent = `${formatPrice(this.getTotal())} ${CONFIG.currencyUnit}`;
    }
  },

  checkoutViaTelegram() {
    const items = this.getItems();
    if (items.length === 0) {
      showToast('سبد خرید شما خالی است', 'info');
      return;
    }

    let message = `🛍️ *ثبت سفارش جدید از وب‌سایت استایل کیش*\n`;
    message += `──────────────────\n`;
    
    items.forEach((item, i) => {
      message += `${toPersianDigits(i + 1)}. *${item.name}*\n`;
      message += `   ▫️ کد: \`${item.sku}\`\n`;
      message += `   ▫️ سایز: ${item.selectedSize} | رنگ: ${item.selectedColor}\n`;
      message += `   ▫️ تعداد: ${toPersianDigits(item.quantity)} عدد\n`;
      message += `   ▫️ قیمت واحد: ${formatPrice(item.price)} تومان\n\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *مبلغ کل سفارش:* ${formatPrice(this.getTotal())} تومان\n\n`;
    message += `لطفاً جهت ثبت نهایی آدرس و مشخصات تحویل را تأیید فرمایید.`;

    const encoded = encodeURIComponent(message);
    const telegramUrl = `https://t.me/${CONFIG.telegramUsername}?text=${encoded}`;
    
    showToast('در حال هدایت به تلگرام جهت ثبت سفارش...', 'telegram');
    window.open(telegramUrl, '_blank');
  }
};

// Direct Telegram Purchase for a single product
function buyViaTelegram(productId, size = null, color = null) {
  const products = getProductsData();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const chosenSize = size || (product.sizes ? product.sizes[0] : 'استاندارد');
  const chosenColor = color || (product.colors ? product.colors[0].name : 'پیش‌فرض');

  let message = `✨ *استعلام و خرید مستقیم از استایل کیش*\n`;
  message += `──────────────────\n`;
  message += `▫️ *نام محصول:* ${product.name}\n`;
  message += `▫️ *کد کالا:* \`${product.sku}\`\n`;
  message += `▫️ *سایز انتخابی:* ${chosenSize}\n`;
  message += `▫️ *رنگ انتخابی:* ${chosenColor}\n`;
  message += `▫️ *قیمت:* ${formatPrice(product.price)} تومان\n`;
  if (product.isSale && product.originalPrice > product.price) {
    message += `▫️ *تخفیف:* ${toPersianDigits(product.discountPercent)}٪ (قیمت قبل: ${formatPrice(product.originalPrice)} تومان)\n`;
  }
  message += `──────────────────\n`;
  message += `سلام، مایل به خرید این محصول هستم. لطفاً موجودی و نحوه ارسال را اعلام فرمایید.`;

  const encoded = encodeURIComponent(message);
  const telegramUrl = `https://t.me/${CONFIG.telegramUsername}?text=${encoded}`;
  
  showToast('در حال انتقال به تلگرام...', 'telegram');
  window.open(telegramUrl, '_blank');
}

// Wishlist Management
const Wishlist = {
  getItems() {
    try {
      const items = localStorage.getItem('stylekish_wishlist');
      return items ? JSON.parse(items) : [];
    } catch (e) {
      return [];
    }
  },

  toggle(productId) {
    let items = this.getItems();
    const index = items.indexOf(productId);
    if (index > -1) {
      items.splice(index, 1);
      showToast('محصول از علاقه‌مندی‌ها حذف شد', 'info');
    } else {
      items.push(productId);
      showToast('محصول به علاقه‌مندی‌ها افزوده شد', 'success');
    }
    localStorage.setItem('stylekish_wishlist', JSON.stringify(items));
    this.updateUI();
  },

  has(productId) {
    return this.getItems().includes(productId);
  },

  updateUI() {
    const count = this.getItems().length;
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => {
      b.textContent = toPersianDigits(count);
      if (count > 0) b.classList.remove('hidden');
      else b.classList.add('hidden');
    });

    document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-btn');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) {
        if (this.has(id)) {
          icon.classList.add('fill', 'text-red-600');
        } else {
          icon.classList.remove('fill', 'text-red-600');
        }
      }
    });
  }
};

// Quick View Modal
function openQuickView(productId) {
  const products = getProductsData();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop';
    document.body.appendChild(modal);
  }

  const discountBadge = product.isSale && product.discountPercent > 0
    ? `<span class="bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded">${toPersianDigits(product.discountPercent)}٪ تخفیف</span>`
    : (product.isNew ? `<span class="bg-neutral-900 text-white text-[11px] font-bold px-2 py-1 rounded">جدید</span>` : '');

  const sizesHtml = product.sizes && product.sizes.length > 0
    ? product.sizes.map((s, i) => `
        <button type="button" onclick="selectQuickSize(this, '${s}')" class="quick-size-btn py-2 px-3 border border-neutral-300 text-xs rounded transition hover:border-neutral-900 ${i === 0 ? 'border-neutral-900 bg-neutral-900 text-white' : 'text-neutral-800'}">
          ${s}
        </button>
      `).join('')
    : '<span class="text-xs text-neutral-500">تک سایز</span>';

  const colorsHtml = product.colors && product.colors.length > 0
    ? product.colors.map((c, i) => `
        <button type="button" onclick="selectQuickColor(this, '${c.name}')" title="${c.name}" class="quick-color-btn w-6 h-6 rounded-full border border-neutral-300 relative transition ${i === 0 ? 'ring-2 ring-offset-2 ring-neutral-900' : ''}" style="background-color: ${c.hex}">
        </button>
      `).join('')
    : '';

  modal.innerHTML = `
    <div class="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onclick="closeQuickView()"></div>
    <div class="relative bg-white dark:bg-neutral-900 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden z-10 modal-content grid grid-cols-1 md:grid-cols-2">
      <button onclick="closeQuickView()" class="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white/80 dark:bg-neutral-800 text-neutral-700 hover:text-black flex items-center justify-center">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>

      <!-- Image -->
      <div class="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" id="quick-view-main-img">
        <div class="absolute top-3 right-3">${discountBadge}</div>
      </div>

      <!-- Content -->
      <div class="p-6 md:p-8 flex flex-col justify-between text-right">
        <div>
          <span class="text-xs text-neutral-400 tracking-wider uppercase font-sans">${product.sku}</span>
          <h3 class="font-serif text-2xl text-neutral-900 dark:text-white mt-1 mb-2 font-bold">${product.name}</h3>
          <p class="text-xs text-neutral-500 mb-4">${product.subtitle}</p>

          <div class="flex items-center gap-3 justify-start mb-6">
            <span class="text-xl font-bold text-neutral-900 dark:text-white font-sans">${formatPrice(product.price)} ${CONFIG.currencyUnit}</span>
            ${product.isSale && product.originalPrice > product.price ? `<span class="text-sm text-neutral-400 line-through font-sans">${formatPrice(product.originalPrice)} تومان</span>` : ''}
          </div>

          <p class="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">${product.description}</p>

          <!-- Color selection -->
          ${product.colors ? `
            <div class="mb-4">
              <label class="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">رنگ: <span id="quick-selected-color" class="font-normal text-neutral-500">${product.colors[0].name}</span></label>
              <div class="flex gap-2">${colorsHtml}</div>
            </div>
          ` : ''}

          <!-- Size selection -->
          ${product.sizes ? `
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-semibold text-neutral-700 dark:text-neutral-300">سایز</label>
                <button onclick="openSizeGuideModal()" class="text-[11px] text-neutral-500 underline">راهنمای سایز</button>
              </div>
              <div class="flex gap-2 flex-wrap" id="quick-size-container">${sizesHtml}</div>
            </div>
          ` : ''}
        </div>

        <div class="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <button onclick="addQuickToCart('${product.id}')" class="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-4 rounded text-xs font-semibold transition flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
            افزودن به سبد خرید
          </button>
          <button onclick="buyViaTelegram('${product.id}')" class="w-full border border-neutral-900 text-neutral-900 hover:bg-neutral-50 py-3 px-4 rounded text-xs font-semibold transition flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">send</span>
            خرید مستقیم از تلگرام
          </button>
          <a href="product-detail.html?id=${product.id}" class="block text-center text-xs text-neutral-500 hover:text-black mt-2 underline">
            مشاهده صفحه اختصاصی محصول
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  window.currentQuickProduct = product;
  window.selectedQuickSize = product.sizes ? product.sizes[0] : 'استاندارد';
  window.selectedQuickColor = product.colors ? product.colors[0].name : 'پیش‌فرض';
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('active');
}

function selectQuickSize(btn, size) {
  document.querySelectorAll('.quick-size-btn').forEach(b => {
    b.classList.remove('border-neutral-900', 'bg-neutral-900', 'text-white');
    b.classList.add('text-neutral-800');
  });
  btn.classList.add('border-neutral-900', 'bg-neutral-900', 'text-white');
  btn.classList.remove('text-neutral-800');
  window.selectedQuickSize = size;
}

function selectQuickColor(btn, colorName) {
  document.querySelectorAll('.quick-color-btn').forEach(b => {
    b.classList.remove('ring-2', 'ring-offset-2', 'ring-neutral-900');
  });
  btn.classList.add('ring-2', 'ring-offset-2', 'ring-neutral-900');
  const label = document.getElementById('quick-selected-color');
  if (label) label.textContent = colorName;
  window.selectedQuickColor = colorName;
}

function addQuickToCart(productId) {
  const products = getProductsData();
  const product = products.find(p => p.id === productId);
  if (!product) return;
  Cart.addItem(product, window.selectedQuickSize, window.selectedQuickColor, 1);
  closeQuickView();
  toggleCartDrawer(true);
}

// Drawer Controls
function toggleCartDrawer(open = true) {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  if (!backdrop || !panel) return;

  if (open) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    Cart.renderCartDrawer();
  } else {
    backdrop.classList.remove('active');
    panel.classList.remove('active');
  }
}

function toggleMobileMenu(open = true) {
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const panel = document.getElementById('mobile-menu-panel');
  if (!backdrop || !panel) return;

  if (open) {
    backdrop.classList.add('active');
    panel.classList.add('active');
  } else {
    backdrop.classList.remove('active');
    panel.classList.remove('active');
  }
}

// Search Drawer / Modal
function toggleSearchModal(open = true) {
  let modal = document.getElementById('search-modal');
  if (!modal && open) {
    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 modal-backdrop';
    modal.innerHTML = `
      <div class="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onclick="toggleSearchModal(false)"></div>
      <div class="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 z-10 modal-content text-right">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-200 mb-4">
          <h3 class="font-serif text-lg font-bold">جستجوی هوشمند در محصولات</h3>
          <button onclick="toggleSearchModal(false)" class="text-neutral-500 hover:text-black">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="relative mb-6">
          <input type="text" id="live-search-input" oninput="handleLiveSearch(this.value)" placeholder="نام لباس، جنس پارچه، شال، مانتو، کد کالا..." class="w-full bg-neutral-100 border-none rounded-lg py-3 pr-10 pl-4 text-sm focus:ring-2 focus:ring-neutral-900 text-right">
          <span class="material-symbols-outlined absolute right-3 top-3 text-neutral-400">search</span>
        </div>
        <div id="live-search-results" class="max-h-[360px] overflow-y-auto space-y-3">
          <p class="text-xs text-neutral-400 text-center py-6">کلمه مورد نظر خود را تایپ کنید...</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  if (!modal) return;

  if (open) {
    modal.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('live-search-input');
      if (input) input.focus();
    }, 100);
  } else {
    modal.classList.remove('active');
  }
}

function handleLiveSearch(query) {
  const container = document.getElementById('live-search-results');
  if (!container) return;

  if (!query || query.trim().length < 2) {
    container.innerHTML = `<p class="text-xs text-neutral-400 text-center py-6">حداقل ۲ حرف وارد کنید...</p>`;
    return;
  }

  const products = getProductsData();
  const q = query.trim().toLowerCase();
  const results = products.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.subtitle.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.sku.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    container.innerHTML = `<p class="text-xs text-neutral-400 text-center py-6">هیچ محصولی با عبارت «${query}» یافت نشد.</p>`;
    return;
  }

  let html = '';
  results.forEach(p => {
    html += `
      <a href="product-detail.html?id=${p.id}" class="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-50 border border-neutral-100 transition">
        <img src="${p.image}" class="w-12 h-16 object-cover rounded bg-neutral-100">
        <div class="flex-grow">
          <h4 class="font-serif text-sm font-bold text-neutral-900">${p.name}</h4>
          <p class="text-xs text-neutral-500">${p.subtitle}</p>
          <span class="text-xs font-semibold text-neutral-900 mt-1 inline-block">${formatPrice(p.price)} تومان</span>
        </div>
        <span class="material-symbols-outlined text-neutral-400 text-sm">chevron_left</span>
      </a>
    `;
  });

  container.innerHTML = html;
}

// Size Guide Modal
function openSizeGuideModal() {
  let modal = document.getElementById('size-guide-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'size-guide-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop';
    modal.innerHTML = `
      <div class="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onclick="closeSizeGuideModal()"></div>
      <div class="relative bg-white w-full max-w-xl rounded-xl shadow-2xl p-6 z-10 modal-content text-right">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-200 mb-4">
          <h3 class="font-serif text-lg font-bold">راهنمای جامع سایزبندی استایل کیش</h3>
          <button onclick="closeSizeGuideModal()" class="text-neutral-500 hover:text-black">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <p class="text-xs text-neutral-500 mb-4">تمامی اندازه‌ها بر اساس سانتی‌متر و استاندارد طراحی دوخت لوکس ایرانی می‌باشند.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-right border-collapse">
            <thead>
              <tr class="bg-neutral-100 text-neutral-800">
                <th class="p-2 border border-neutral-200">سایز</th>
                <th class="p-2 border border-neutral-200">دور سینه</th>
                <th class="p-2 border border-neutral-200">دور کمر</th>
                <th class="p-2 border border-neutral-200">دور باسن</th>
                <th class="p-2 border border-neutral-200">سایز معادل</th>
              </tr>
            </thead>
            <tbody class="text-neutral-600">
              <tr>
                <td class="p-2 border border-neutral-200 font-bold">XS / ۳۶</td>
                <td class="p-2 border border-neutral-200">۸۲ - ۸۶</td>
                <td class="p-2 border border-neutral-200">۶۴ - ۶۸</td>
                <td class="p-2 border border-neutral-200">۸۸ - ۹۲</td>
                <td class="p-2 border border-neutral-200">Small</td>
              </tr>
              <tr class="bg-neutral-50">
                <td class="p-2 border border-neutral-200 font-bold">S / ۳۸</td>
                <td class="p-2 border border-neutral-200">۸۶ - ۹۰</td>
                <td class="p-2 border border-neutral-200">۶۸ - ۷۲</td>
                <td class="p-2 border border-neutral-200">۹۲ - ۹۶</td>
                <td class="p-2 border border-neutral-200">Medium</td>
              </tr>
              <tr>
                <td class="p-2 border border-neutral-200 font-bold">M / ۴۰</td>
                <td class="p-2 border border-neutral-200">۹۰ - ۹۶</td>
                <td class="p-2 border border-neutral-200">۷۲ - ۷۸</td>
                <td class="p-2 border border-neutral-200">۹۶ - ۱۰۲</td>
                <td class="p-2 border border-neutral-200">Large</td>
              </tr>
              <tr class="bg-neutral-50">
                <td class="p-2 border border-neutral-200 font-bold">L / ۴۲</td>
                <td class="p-2 border border-neutral-200">۹۶ - ۱۰۲</td>
                <td class="p-2 border border-neutral-200">۷۸ - ۸۴</td>
                <td class="p-2 border border-neutral-200">۱۰۲ - ۱۰۸</td>
                <td class="p-2 border border-neutral-200">X-Large</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6 text-center">
          <button onclick="closeSizeGuideModal()" class="px-6 py-2 bg-neutral-900 text-white rounded text-xs">متوجه شدم</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.classList.add('active');
}

function closeSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) modal.classList.remove('active');
}

// Generate Standard Product Card HTML
function renderProductCard(p) {
  const isWishlisted = Wishlist.has(p.id);
  const discountBadge = p.isSale && p.discountPercent > 0
    ? `<span class="absolute top-3 right-3 bg-[#ba1a1a] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm z-10">${toPersianDigits(p.discountPercent)}٪ تخفیف</span>`
    : (p.isNew ? `<span class="absolute top-3 right-3 bg-[#000000] text-white text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded shadow-sm z-10">جدید</span>` : '');

  return `
    <article class="product-card group relative flex flex-col" data-product-id="${p.id}" data-category="${p.category}" data-gender="${p.gender}" data-price="${p.price}">
      <div class="relative w-full aspect-[3/4] bg-[#eeeeee] mb-4 product-card-img-wrapper rounded">
        ${discountBadge}
        
        <!-- Wishlist Button -->
        <button onclick="event.preventDefault(); event.stopPropagation(); Wishlist.toggle('${p.id}')" data-wishlist-btn="${p.id}" class="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:text-red-600 transition shadow-sm z-10">
          <span class="material-symbols-outlined text-[18px] ${isWishlisted ? 'fill text-red-600' : ''}">favorite</span>
        </button>

        <a href="product-detail.html?id=${p.id}" class="block w-full h-full">
          <img src="${p.image}" alt="${p.name}" class="object-cover w-full h-full product-card-img" loading="lazy">
        </a>

        <!-- Hover Action Bar -->
        <div class="absolute bottom-3 left-0 right-0 px-3 quick-action-bar flex gap-2 justify-center z-10">
          <button onclick="event.preventDefault(); buyViaTelegram('${p.id}')" class="flex-1 bg-black/90 hover:bg-black text-white py-2.5 px-3 text-[11px] font-semibold backdrop-blur-md rounded shadow-lg transition flex items-center justify-center gap-1.5 whitespace-nowrap">
            <span class="material-symbols-outlined text-[16px]">send</span>
            خرید از تلگرام
          </button>
          <button onclick="event.preventDefault(); openQuickView('${p.id}')" class="bg-white/95 hover:bg-white text-neutral-900 w-9 h-9 rounded flex items-center justify-center shadow-lg transition" title="مشاهده سریع">
            <span class="material-symbols-outlined text-[18px]">visibility</span>
          </button>
        </div>
      </div>

      <div class="flex flex-col text-right">
        <a href="product-detail.html?id=${p.id}" class="hover:text-neutral-600 transition">
          <h3 class="font-serif text-[17px] text-[#1a1c1c] font-normal mb-1 leading-snug">${p.name}</h3>
        </a>
        <p class="text-xs text-[#5f5e5b] mb-2">${p.subtitle || ''}</p>
        <div class="flex items-center gap-2 justify-start mt-auto">
          <span class="font-sans text-[15px] font-bold text-[#1a1c1c]">${formatPrice(p.price)} <span class="text-xs font-normal">تومان</span></span>
          ${p.isSale && p.originalPrice > p.price ? `<span class="font-sans text-xs text-[#747878] line-through">${formatPrice(p.originalPrice)} تومان</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

// Global Init on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateUI();
  Wishlist.updateUI();

  // Newsletter form submission handling
  document.querySelectorAll('form.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('ایمیل شما با موفقیت در خبرنامه ثبت گردید.', 'success');
        input.value = '';
      }
    });
  });
});
