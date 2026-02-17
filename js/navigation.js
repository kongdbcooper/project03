// Navigation script for updating login/logout links

async function updateNavigation() {
    try {
        const response = await fetch('php/check_session.php');
        const data = await response.json();
        
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;
        
        // Remove existing auth link if any
        const existingAuthLink = navLinks.querySelector('.auth-link');
        if (existingAuthLink) {
            existingAuthLink.remove();
        }
        
        // Add login/logout link
        const authLi = document.createElement('li');
        authLi.className = 'auth-link';
        
        if (data.logged_in && data.user) {
            const displayName = data.user.first_name || data.user.username;
            authLi.innerHTML = `
                <a href="#" onclick="logout(); return false;">
                    👤 ${displayName} | ออกจากระบบ
                </a>
            `;
        } else {
            authLi.innerHTML = `
                <a href="login.html">🔐 เข้าสู่ระบบ</a>
            `;
        }
        
        navLinks.appendChild(authLi);
    } catch (error) {
        console.error('Error updating navigation:', error);
        // If error, show login link by default
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const existingAuthLink = navLinks.querySelector('.auth-link');
            if (!existingAuthLink) {
                const authLi = document.createElement('li');
                authLi.className = 'auth-link';
                authLi.innerHTML = `<a href="login.html">🔐 เข้าสู่ระบบ</a>`;
                navLinks.appendChild(authLi);
            }
        }
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

// Update navigation on page load
document.addEventListener('DOMContentLoaded', updateNavigation);
