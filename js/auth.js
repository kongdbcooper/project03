// Auth JavaScript

// Toggle password visibility
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

// Show message
function showMessage(message, type = 'success') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = message;
    messageEl.className = `message show ${type}`;
    
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 5000);
}

// Clear all error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('input, textarea').forEach(el => {
        el.style.borderColor = '#d7ccc8';
    });
}

// Show error
function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + 'Error');
    const inputEl = document.getElementById(fieldId);
    
    if (errorEl) {
        errorEl.textContent = message;
    }
    if (inputEl) {
        inputEl.style.borderColor = '#d84315';
    }
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone
function validatePhone(phone) {
    if (!phone) return true; // Optional field
    const re = /^[0-9\-\s]{9,}$/;
    return re.test(phone);
}

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        clearErrors();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Validation
        if (!username) {
            showError('username', 'กรุณากรอกชื่อผู้ใช้หรืออีเมล');
            return;
        }
        
        if (!password) {
            showError('password', 'กรุณากรอกรหัสผ่าน');
            return;
        }
        
        // Disable submit button
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'กำลังเข้าสู่ระบบ...';
        
        try {
            const response = await fetch('php/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    rememberMe: rememberMe
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('เข้าสู่ระบบสำเร็จ! กำลังเปลี่ยนหน้า...', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showError('username', data.message);
                showError('password', '');
                showMessage(data.message, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'เข้าสู่ระบบ';
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'เข้าสู่ระบบ';
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        clearErrors();
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        
        let isValid = true;
        
        // Validation
        if (!username) {
            showError('username', 'กรุณากรอกชื่อผู้ใช้');
            isValid = false;
        } else if (username.length < 3 || username.length > 50) {
            showError('username', 'ชื่อผู้ใช้ต้องมีความยาว 3-50 ตัวอักษร');
            isValid = false;
        }
        
        if (!email) {
            showError('email', 'กรุณากรอกอีเมล');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'รูปแบบอีเมลไม่ถูกต้อง');
            isValid = false;
        }
        
        if (!password) {
            showError('password', 'กรุณากรอกรหัสผ่าน');
            isValid = false;
        } else if (password.length < 6) {
            showError('password', 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
            isValid = false;
        }
        
        if (!confirmPassword) {
            showError('confirmPassword', 'กรุณายืนยันรหัสผ่าน');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmPassword', 'รหัสผ่านไม่ตรงกัน');
            isValid = false;
        }
        
        if (phone && !validatePhone(phone)) {
            showError('phone', 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Disable submit button
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'กำลังสมัครสมาชิก...';
        
        try {
            const response = await fetch('php/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone,
                    address: address
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage('สมัครสมาชิกสำเร็จ! กำลังเปลี่ยนหน้า...', 'success');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                if (data.message.includes('ชื่อผู้ใช้') || data.message.includes('username')) {
                    showError('username', data.message);
                } else if (data.message.includes('อีเมล') || data.message.includes('email')) {
                    showError('email', data.message);
                } else {
                    showMessage(data.message, 'error');
                }
                submitBtn.disabled = false;
                submitBtn.textContent = 'สมัครสมาชิก';
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'สมัครสมาชิก';
        }
    });
}

// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('php/check_session.php');
        const data = await response.json();
        
        if (data.logged_in && data.user) {
            // Update navigation if needed
            updateNavigation(data.user);
        }
    } catch (error) {
        console.error('Error checking session:', error);
    }
});

// Update navigation with user info
function updateNavigation(user) {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        // Check if login/logout link already exists
        let authLink = navLinks.querySelector('.auth-link');
        
        if (!authLink) {
            authLink = document.createElement('li');
            authLink.className = 'auth-link';
            navLinks.appendChild(authLink);
        }
        
        authLink.innerHTML = `
            <a href="#" onclick="logout(); return false;">
                👤 ${user.first_name || user.username} | ออกจากระบบ
            </a>
        `;
    }
}

// Logout function
async function logout() {
    if (!confirm('คุณต้องการออกจากระบบหรือไม่?')) {
        return;
    }
    
    try {
        const response = await fetch('php/logout.php');
        const data = await response.json();
        
        if (data.success) {
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error:', error);
        window.location.href = 'index.html';
    }
}
