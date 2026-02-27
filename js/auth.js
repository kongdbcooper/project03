/**
 * auth.js
 * ไฟล์จัดการฟอร์มลงทะเบียนและเข้าสู่ระบบ
 * ทำงานร่วมกับ navigation.js โดยใช้ CSRF Token ที่ถูกสร้างไว้
 */

// ✅ ฟังก์ชันจัดการการแสดงผลรหัสผ่าน (Show/Hide)
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// ✅ แสดงข้อความแจ้งเตือนสถานะ (Toast Message)
function showMessage(message, type = 'success') {
    const messageEl = document.getElementById('message');
    if (!messageEl) return;
    
    messageEl.textContent = message;
    messageEl.className = `message show ${type}`;
    
    // ซ่อนข้อความอัตโนมัติหลังจาก 5 วินาที
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 5000);
}

// ✅ ล้างค่าการแจ้งเตือนข้อผิดพลาดทั้งหมดในฟอร์ม
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('input, textarea').forEach(el => {
        el.style.borderColor = '#d7ccc8'; // กลับเป็นสีปกติ
    });
}

// ✅ แสดงข้อผิดพลาดเฉพาะช่องข้อมูล
function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + 'Error');
    const inputEl = document.getElementById(fieldId);
    
    if (errorEl) errorEl.textContent = message;
    if (inputEl) inputEl.style.borderColor = '#d84315'; // เน้นสีแดงเมื่อผิด
}

// ✅ ฟังก์ชันตรวจสอบรูปแบบข้อมูลเบื้องต้น (Validation)
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --------------------------------------------------
// 🔐 ส่วนจัดการฟอร์มเข้าสู่ระบบ (Login)
// --------------------------------------------------
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // ป้องกันการรีโหลดหน้าปกติ
        clearErrors();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // ตรวจสอบความว่างเปล่าเบื้องต้น
        if (!username) { showError('username', 'กรุณากรอกชื่อผู้ใช้หรืออีเมล'); return; }
        if (!password) { showError('password', 'กรุณากรอกรหัสผ่าน'); return; }
        
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true; // ป้องกันการกดซ้ำ (Double Submit)
        submitBtn.textContent = 'กำลังเข้าสู่ระบบ...';
        
        try {
            const response = await fetch('../php/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCsrfToken() // 🛡️ ส่ง Token ที่ navigation.js เตรียมไว้
                },
                body: JSON.stringify({ username, password, rememberMe })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('เข้าสู่ระบบสำเร็จ!', 'success');
                setTimeout(() => { window.location.href = 'index.html'; }, 1000);
            } else {
                showError('username', data.message);
                showMessage(data.message, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'เข้าสู่ระบบ';
            }
        } catch (error) {
            console.error('Login Error:', error);
            showMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'เข้าสู่ระบบ';
        }
    });
}

// --------------------------------------------------
// 📝 ส่วนจัดการฟอร์มสมัครสมาชิก (Register)
// --------------------------------------------------
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        clearErrors();
        
        // รวบรวมข้อมูลจากฟอร์ม
        const payload = {
            username: document.getElementById('username').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
            first_name: document.getElementById('firstName').value.trim(),
            last_name: document.getElementById('lastName').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            address: document.getElementById('address').value.trim()
        };
        
        // ตรวจสอบข้อมูลฝั่ง Client (Client-side Validation)
        let isValid = true;
        if (payload.username.length < 3) { showError('username', 'ชื่อผู้ใช้สั้นเกินไป'); isValid = false; }
        if (!validateEmail(payload.email)) { showError('email', 'รูปแบบอีเมลไม่ถูกต้อง'); isValid = false; }
        if (payload.password.length < 6) { showError('password', 'รหัสผ่านต้องมี 6 ตัวอักษรขึ้นไป'); isValid = false; }
        if (payload.password !== payload.confirmPassword) { showError('confirmPassword', 'รหัสผ่านไม่ตรงกัน'); isValid = false; }
        
        if (!isValid) return;

        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'กำลังประมวลผล...';

        try {
            const response = await fetch('../php/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCsrfToken() // 🛡️ ยืนยันความปลอดภัย CSRF
                },
                body: JSON.stringify(payload)
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('ลงทะเบียนสำเร็จ! กำลังไปหน้าล็อกอิน...', 'success');
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
            } else {
                showMessage(data.message, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'สมัครสมาชิก';
            }
        } catch (error) {
            console.error('Register Error:', error);
            showMessage('เกิดข้อผิดพลาด กรุณาลองใหม่', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'สมัครสมาชิก';
        }
    });
}
