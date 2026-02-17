<?php
session_start();
require_once __DIR__ . '/db.php';

// ตรวจสอบว่าผู้ใช้ login แล้วหรือยัง
function isLoggedIn() {
    return isset($_SESSION['user_id']) && isset($_SESSION['username']);
}

// ดึงข้อมูลผู้ใช้ปัจจุบัน
function getCurrentUser() {
    global $conn;
    if (!isLoggedIn()) {
        return null;
    }
    
    $user_id = $_SESSION['user_id'];
    $stmt = $conn->prepare("SELECT id, username, email, first_name, last_name, phone, address FROM users WHERE id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        return $result->fetch_assoc();
    }
    return null;
}

// ตรวจสอบว่าต้อง login ก่อนเข้าถึงหน้า
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: ../html/login.html');
        exit();
    }
}

// ตรวจสอบว่าถ้า login แล้วให้ redirect ไปหน้าแรก
function requireGuest() {
    if (isLoggedIn()) {
        header('Location: ../html/index.html');
        exit();
    }
}

?>
