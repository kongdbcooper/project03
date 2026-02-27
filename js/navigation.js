// Navigation script for updating login/logout links

// ✅ อัปเดตเมนู และรับ CSRF Token ใน Request เดียว
async function updateNavigation() {
    try {
        // ยิง API แค่ 1 ครั้ง ได้ทั้งสถานะ Login และ CSRF Token
        const response = await fetch('../php/check_session.php');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();

        // --------------------------------------------------
        // ส่วนที่ 1: จัดการ CSRF Token
        // --------------------------------------------------
        if (data.csrf_token) {
            let metaToken = document.querySelector('meta[name="csrf-token"]');
            // ถ้าใน HTML ยังไม่มีแท็ก <meta> ให้สร้างขึ้นมาใหม่
            if (!metaToken) {
                metaToken = document.createElement('meta');
                metaToken.name = 'csrf-token';
                document.head.appendChild(metaToken);
            }
            metaToken.setAttribute('content', data.csrf_token);
        }

        // --------------------------------------------------
        // ส่วนที่ 2: จัดการ เมนู Login/Logout
        // --------------------------------------------------
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        
        // ลบปุ่มเดิมออกก่อน
        const existingAuthLink = navLinks.querySelector('.auth-link');
        if (existingAuthLink) existingAuthLink.remove();
        
        const authLi = document.createElement('li');
        authLi.className = 'auth-link';

        // เช็คว่าเข้าระบบอยู่หรือไม่
        if (data.logged_in && data.user) {
            // โค้ดของคุณที่ปลอดภัย 100%
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.classList.add('logout-link');

            const displayName = data.user.first_name || data.user.username;
            const linkText = document.createTextNode(`👤 ${displayName} | ออกจากระบบ`);
            logoutLink.appendChild(linkText);

            // Event listener 
            logoutLink.addEventListener('click', function(e) {
                e.preventDefault();
                logout(); // เรียกฟังก์ชัน logout()
            });

            authLi.appendChild(logoutLink);
        } else {
            // กรณียังไม่ Login
            const loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.textContent = '🔐 เข้าสู่ระบบ';
            authLi.appendChild(loginLink);
        }

        navLinks.appendChild(authLi);

    } catch (error) {
        console.error('Session/CSRF check failed:', error);
        // Fallback: ถ้า API พัง ให้แสดงปุ่ม Login เป็นค่าเริ่มต้น
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && !navLinks.querySelector('.auth-link')) {
            const authLi = document.createElement('li');
            authLi.className = 'auth-link';
            authLi.innerHTML = `<a href="login.html">🔐 เข้าสู่ระบบ</a>`;
            navLinks.appendChild(authLi);
        }
    }
}

// เรียกใช้งานตอนโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', updateNavigation);
