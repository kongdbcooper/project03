const products = [
    {
        id: 1,
        name: 'Royal Canin สุนัขโต',
        category: 'dog-food',
        price: 850,
        desc: 'อาหารสุนัขโตพันธุ์กลาง-ใหญ่ 3kg',
        emoji: '🐕',
        rating: 4.8,
        badge: 'Hot Deal'
    },
    {
        id: 2,
        name: 'Pedigree Adult',
        category: 'dog-food',
        price: 450,
        desc: 'อาหารสุนัขโตรสเนื้อไก่ 1.5kg',
        emoji: '🐕',
        rating: 4.5,
        badge: null
    },
    {
        id: 3,
        name: 'Smart Heart ลูกสุนัข',
        category: 'dog-food',
        price: 320,
        desc: 'อาหารลูกสุนัขพันธุ์เล็ก 1kg',
        emoji: '🐶',
        rating: 4.7,
        badge: 'New'
    },
    {
        id: 4,
        name: 'Me-O แมวโต',
        category: 'cat-food',
        price: 280,
        desc: 'อาหารแมวโตรสปลาทูน่า 1.2kg',
        emoji: '🐱',
        rating: 4.6,
        badge: null
    },
    {
        id: 5,
        name: 'Royal Canin แมวเปอร์เซีย',
        category: 'cat-food',
        price: 920,
        desc: 'อาหารแมวเปอร์เซีย 2kg',
        emoji: '😺',
        rating: 4.9,
        badge: 'Hot Deal'
    },
    {
        id: 6,
        name: 'Whiskas Kitten',
        category: 'cat-food',
        price: 380,
        desc: 'อาหารลูกแมวรสนม 1.1kg',
        emoji: '🐈',
        rating: 4.4,
        badge: null
    },
    {
        id: 7,
        name: 'Pro Plan สุนัข',
        category: 'dog-food',
        price: 1250,
        desc: 'อาหารสุนัขโตสูตรควบคุมน้ำหนัก 3kg',
        emoji: '🐕',
        rating: 4.8,
        badge: 'Hot Deal'
    },
    {
        id: 8,
        name: 'Kit Cat แมว',
        category: 'cat-food',
        price: 550,
        desc: 'อาหารแมวโตป้องกันก้อนขน 1.4kg',
        emoji: '🐱',
        rating: 4.7,
        badge: null
    },
    {
        id: 9,
        name: 'ปอมเมอเรเนียน (Mini Pomeranian)',
        category: 'dog',
        price: 8900,
        desc: 'ลูกสุนัขแข็งแรง ร่าเริง เหมาะกับครอบครัว',
        emoji: '🐶',
        rating: 4.9,
        badge: 'Hot Deal'
    },
    {
        id: 10,
        name: 'ชิบะอินุ (Shiba Inu)',
        category: 'dog',
        price: 12500,
        desc: 'ฉลาด ขี้เล่น เลี้ยงง่าย (มีใบรับรองสุขภาพ)',
        emoji: '🐕',
        rating: 4.8,
        badge: 'New'
    },
    {
        id: 11,
        name: 'สก็อตติชโฟลด์ (Scottish Fold)',
        category: 'cat',
        price: 14900,
        desc: 'แมวน่ารัก ขี้อ้อน หูพับเอกลักษณ์',
        emoji: '🐱',
        rating: 4.9,
        badge: 'Hot Deal'
    },
    {
        id: 12,
        name: 'บริติชช็อตแฮร์ (British Shorthair)',
        category: 'cat',
        price: 13900,
        desc: 'ขนแน่น หน้ากลม สุขภาพแข็งแรง',
        emoji: '😺',
        rating: 4.8,
        badge: null
    },
    // สุนัข พันธุ์ใหญ่
    {
        id: 17,
        name: 'ไซบีเรียน ฮัสกี้',
        category: 'dog',
        price: 18900,
        desc: 'ขนสวย ซ่องไป งานหนัก เหมาะกับผู้ที่ชอบวิ่น',
        emoji: '🐕'
    },
    {
        id: 18,
        name: 'โกลเด้น เรทรีฟเวอร์',
        category: 'dog',
        price: 16500,
        desc: 'เป็นกันเอง รักษาง่าย สำหรับครอบครัวแม่ลูก',
        emoji: '🐕'
    },
    {
        id: 19,
        name: 'เชาเชา',
        category: 'dog',
        price: 19900,
        desc: 'ลิ้นสีดำ ดูมาก ศักดิ์สิทธิ์และมีเสน่ห์',
        emoji: '🐕'
    },
    {
        id: 20,
        name: 'อเมริกัน บูลด็อก',
        category: 'dog',
        price: 15000,
        desc: 'หน้าเดินชำรุด แต่ใจดี รักการเล่นสนุก',
        emoji: '🐕'
    },
    {
        id: 21,
        name: 'พิทบูล',
        category: 'dog',
        price: 17000,
        desc: 'แข็งแรง กล้าหาญ ต้องการฝึกสอนอย่างสม่ำเสมอ',
        emoji: '🐕'
    },
    {
        id: 22,
        name: 'ร็อทไวเลอร์',
        category: 'dog',
        price: 16000,
        desc: 'ฉลาด สัตย์ซื่อ รักษาบ้านดี เหมาะกับครอบครัว',
        emoji: '🐕'
    },
    {
        id: 23,
        name: 'บางแก้ว',
        category: 'dog',
        price: 25000,
        desc: 'พันธุ์สุนัขไทย แข็งแรง เหมาะกับสภาวะอากาศร้อน',
        emoji: '🐕'
    },
    {
        id: 24,
        name: 'เซนต์เบอร์นาร์ด',
        category: 'dog',
        price: 22000,
        desc: 'ตัวใหญ่ สุขุม อ่อนโยน เหมาะกับครอบครัวใหญ่',
        emoji: '🐕'
    },
    {
        id: 25,
        name: 'เยอรมัน เชพเพิร์ด',
        category: 'dog',
        price: 14000,
        desc: 'ฉลาด ซื่อสัตย์ รักษาบ้านแบบสายหน้า',
        emoji: '🐕'
    },
    {
        id: 26,
        name: 'ซามอยด์',
        category: 'dog',
        price: 20000,
        desc: 'ขนขาวสวย ยิ้มน่ารัก เป็นกันเอง',
        emoji: '🐕'
    },
    {
        id: 27,
        name: 'ไทยหลังอาน',
        category: 'dog',
        price: 12000,
        desc: 'พันธุ์สุนัขไทยแท้ แข็งแรง ลำตัวกำไล',
        emoji: '🐕'
    },
    // สุนัข พันธุ์เล็ก
    {
        id: 28,
        name: 'ปอม (ปอมเมอเรเนียน)',
        category: 'dog',
        price: 8900,
        desc: 'ขนฟูฟ่า ร่าเริง เหมาะสำหรับห้องเก็บ',
        emoji: '🐶'
    },
    {
        id: 29,
        name: 'ชิวาว่า',
        category: 'dog',
        price: 7500,
        desc: 'ตัวเล็ก ช่างซน หูใหญ่ บ้านเล็ก นอนกก้องได้',
        emoji: '🐶'
    },
    {
        id: 30,
        name: 'มอลทีส',
        category: 'dog',
        price: 9500,
        desc: 'ขนยาวสีขาว น่ารัก ขี้อ้อน ต้องการแปรงขน',
        emoji: '🐶'
    },
    {
        id: 31,
        name: 'ยอร์คเชียร์ เทอร์เรีย',
        category: 'dog',
        price: 8500,
        desc: 'ขนยาว หน้าชาญฉลาด อเมาะให้เล่น',
        emoji: '🐶'
    },
    {
        id: 32,
        name: 'ชิสุ (Shih Tzu)',
        category: 'dog',
        price: 7000,
        desc: 'ขนสวย หน้าราบ อ่อนโยน เป็นกันเอง',
        emoji: '🐶'
    },
    {
        id: 33,
        name: 'ดัชชุน',
        category: 'dog',
        price: 6500,
        desc: 'ลำตัวยาว ขาสั้น อัจฉริยะและจอม',
        emoji: '🐶'
    },
    {
        id: 34,
        name: 'พูดเดิ้ล ทอย',
        category: 'dog',
        price: 9000,
        desc: 'ฉลาด ขนม่วง ต้องการแปรงขนสม่ำเสมอ',
        emoji: '🐶'
    },
    {
        id: 35,
        name: 'ปั๊ก',
        category: 'dog',
        price: 6800,
        desc: 'หน้าเดินชำรุด น่ารัก ชอบการนอน',
        emoji: '🐶'
    },
    {
        id: 36,
        name: 'คาวาเลียร์ คิงชาร์ลส์ สแปเนียล',
        category: 'dog',
        price: 10500,
        desc: 'กลมน่ารัก ขี้อ้อน หูยาวสวย ใจดี',
        emoji: '🐶'
    },
    {
        id: 37,
        name: 'เวลส์ คอร์กี้',
        category: 'dog',
        price: 11000,
        desc: 'ขาสั้น ตัวแรง ฉลาด สำหรับกรรมสิทธิ์โลกยง',
        emoji: '🐶'
    },
    {
        id: 38,
        name: 'พาปิยง (Papillon)',
        category: 'dog',
        price: 9500,
        desc: 'หูบิน ฉลาด ชอบการเล่นกีฬา ต้องการออกกำลังกาย',
        emoji: '🐶'
    },
    {
        id: 39,
        name: 'บิชง ฟริเซ่',
        category: 'dog',
        price: 8000,
        desc: 'ขนฟูสีขาว ร่าเริง เก๋ไก่ เหมาะกับการแสดง',
        emoji: '🐶'
    },
    // แมว พันธุ์ต่างๆ
    {
        id: 40,
        name: 'เปอร์เซีย (Persian)',
        category: 'cat',
        price: 16500,
        desc: 'ขนยาว หน้ากลม อ่อนโยน ต้องการแปรงขนสม่ำเสมอ',
        emoji: '🐱'
    },
    {
        id: 41,
        name: 'เมนคูน (Maine Coon)',
        category: 'cat',
        price: 18900,
        desc: 'ตัวใหญ่ ขนหนา เจ้าแบบแมว ใจดี',
        emoji: '🐱'
    },
    {
        id: 42,
        name: 'เบงกอล (Bengal)',
        category: 'cat',
        price: 21500,
        desc: 'ลายเสือสวย ว่องไว ปราดเปรื่อง ชอบการเล่น',
        emoji: '🐱'
    },
    {
        id: 43,
        name: 'แมวแนะ (Manx)',
        category: 'cat',
        price: 12800,
        desc: 'ไม่มีหาง ตัวแรง ฉลาด เป็นกันเอง',
        emoji: '🐱'
    },
    {
        id: 44,
        name: 'สก็อตติช โฟลด์ (Scottish Fold)',
        category: 'cat',
        price: 14900,
        desc: 'หูพับน่ารัก หน้าโล่ง ขี้อ้อน ใจดี',
        emoji: '🐱'
    },
    {
        id: 45,
        name: 'ส์โตดอ (Sphynx)',
        category: 'cat',
        price: 19800,
        desc: 'ไม่มีขน อุ่นใจ ต้องการการดูแลพิเศษ',
        emoji: '🐱'
    },
    {
        id: 46,
        name: 'ชิแนจ (Chinchilla)',
        category: 'cat',
        price: 14200,
        desc: 'ขนหนาแน่น สีเทา น่ารัก สุขภาพแข็งแรง',
        emoji: '🐱'
    },
    {
        id: 47,
        name: 'นอร์วีเจียน โฟเรสต์ (Norwegian Forest)',
        category: 'cat',
        price: 17500,
        desc: 'ขนยาว ตัวใหญ่ เหมาะกับภูมิอากาศหนาว',
        emoji: '🐱'
    },
    {
        id: 48,
        name: 'มันช์กิ้น (Munchkin)',
        category: 'cat',
        price: 13500,
        desc: 'ขาสั้น ตัวเล็ก น่ารัก ว่องไว',
        emoji: '🐱'
    },
    {
        id: 49,
        name: 'เรกดอล (Ragdoll)',
        category: 'cat',
        price: 16200,
        desc: 'ตาสีน้ำเงิน ขี้อ้อน ร่างกายหด ใจนิ่ม',
        emoji: '🐱'
    },
    {
        id: 50,
        name: 'ดีวอน เรกซ์ (Devon Rex)',
        category: 'cat',
        price: 15300,
        desc: 'ขนม้วน หูใหญ่ ขี้เล่น สุดฉลาด',
        emoji: '🐱'
    },
    {
        id: 13,
        name: 'ของเล่นเชือกกัด (สุนัข)',
        category: 'dog-toy',
        price: 129,
        desc: 'เชือกกัดเสริมฟัน ลดความเครียด เล่นเพลิน',
        emoji: '🪢'
    },
    {
        id: 14,
        name: 'ลูกบอลยางเด้ง (สุนัข)',
        category: 'dog-toy',
        price: 99,
        desc: 'ลูกบอลยางเด้ง ทนทาน เหมาะกับสายวิ่ง',
        emoji: '⚽'
    },
    {
        id: 15,
        name: 'คันเบ็ดแมวพร้อมขนนก',
        category: 'cat-toy',
        price: 89,
        desc: 'ของเล่นแมวยอดนิยม กระตุ้นสัญชาตญาณนักล่า',
        emoji: '🪶'
    },
    {
        id: 16,
        name: 'ลูกบอลมีเสียงกรุ๊งกริ๊ง (แมว)',
        category: 'cat-toy',
        price: 79,
        desc: 'ลูกบอลเบา เล่นสนุก มีเสียงดึงดูดความสนใจ',
        emoji: '🔔'
    }
];

let cart = [];
let wishlist = [];
let currentCategory = 'all';
let searchQuery = '';

// localStorage cart management
function saveCart() {
    localStorage.setItem('petfoodCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('petfoodCart');
    cart = saved ? JSON.parse(saved) : [];
    updateCartCount();
}

function saveWishlist() {
    localStorage.setItem('petfoodWishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const saved = localStorage.getItem('petfoodWishlist');
    wishlist = saved ? JSON.parse(saved) : [];
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">ตะกร้าว่างเปล่า</div>';
        document.getElementById('cartTotal').textContent = '฿0';
        return;
    }
    
    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-desc">${item.desc}</div>
                    <div class="cart-item-price">฿${item.price}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">−</button>
                    <input type="number" value="${item.quantity}" readonly class="qty-input">
                    <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <div class="cart-item-total">฿${itemTotal}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `;
    }).join('');
    
    document.getElementById('cartTotal').textContent = `฿${total}`;
}

function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        saveCart();
        renderCartItems();
        updateCartCount();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveCart();
        renderCartItems();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        const itemName = cart[index].name;
        cart.splice(index, 1);
        saveCart();
        renderCartItems();
        updateCartCount();
        showNotification(`ลบ ${itemName} ออกจากตะกร้า`);
    }
}

function renderProducts(category = 'all', searchTerm = '') {
    const grid = document.getElementById('productsGrid');
    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    // Search filter
    if (searchTerm.trim()) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #795548; font-size: 1.1rem;">ไม่พบสินค้า</div>';
        return;
    }
    
    grid.innerHTML = filteredProducts.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        const ratingStars = '⭐'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '✨' : '');
        
        return `
            <div class="product-card">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    ${isWishlisted ? '❤️' : '🤍'}
                </button>
                <div class="product-image">${product.emoji}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-rating">${ratingStars} ${product.rating}</div>
                    <div class="product-desc">${product.desc}</div>
                    <div class="product-price">฿${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        เพิ่มลงตะกร้า
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('ลบออกจากรายการโปรด');
    } else {
        wishlist.push(productId);
        showNotification('เพิ่มลงรายการโปรด ❤️');
    }
    saveWishlist();
    renderProducts(currentCategory, searchQuery);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartCount();
    
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Show notification
    showNotification(`เพิ่ม ${product.name} ลงตะกร้าแล้ว!`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8d6e63 0%, #6d4c41 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(109, 76, 65, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    loadWishlist();
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchQuery = e.target.value;
            renderProducts(currentCategory, searchQuery);
        });
    }
    
    // Tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.dataset.category;
                renderProducts(currentCategory);
            });
        });
        renderProducts();
    }

    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            renderCartItems();
            document.getElementById('cartModal').classList.add('show');
        });
    }

    // Cart close button
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    if (cartCloseBtn) {
        cartCloseBtn.addEventListener('click', function() {
            document.getElementById('cartModal').classList.remove('show');
        });
    }

    // Clear cart button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('ตะกร้าว่างเปล่าแล้ว');
                return;
            }
            if (confirm('คุณแน่ใจหรือว่าต้องการล้างตะกร้า?')) {
                cart = [];
                saveCart();
                renderCartItems();
                updateCartCount();
                showNotification('ล้างตะกร้าแล้ว');
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('ตะกร้าว่างเปล่า');
                return;
            }
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`ขอบคุณที่สั่งซื้อ!\n\nรวม: ฿${total}\n\nเราจะติดต่อคุณในเร็วๆนี้`);
            cart = [];
            saveCart();
            renderCartItems();
            updateCartCount();
            document.getElementById('cartModal').classList.remove('show');
            showNotification('สั่งซื้อสำเร็จ!');
        });
    }

    // Close modal when clicking outside
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                cartModal.classList.remove('show');
            }
        });
    }

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], select, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#d84315';
                } else {
                    input.style.borderColor = '#d7ccc8';
                }
            });
            
            if (!isValid) {
                alert('กรุณากรอกข้อมูลทั้งหมด');
                return;
            }
            
            // Email validation
            const emailInput = contactForm.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('อีเมลไม่ถูกต้อง');
                emailInput.style.borderColor = '#d84315';
                return;
            }
            
            // Phone validation
            const phoneInput = contactForm.querySelector('input[type="tel"]');
            const phoneRegex = /^[0-9\-\s]{10,}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                alert('เบอร์โทรศัพท์ไม่ถูกต้อง');
                phoneInput.style.borderColor = '#d84315';
                return;
            }
            
            // Success
            alert('ขอบคุณที่ติดต่อเรา! เราจะตอบกลับโดยเร็วที่สุด');
            contactForm.reset();
            inputs.forEach(input => input.style.borderColor = '#d7ccc8');
        });
    }
});

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);