<?php
session_start();

// ลบ session ทั้งหมด
$_SESSION = array();

// ลบ session cookie
if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 3600, '/');
}

// ทำลาย session
session_destroy();

header('Content-Type: application/json; charset=utf-8');
echo json_encode(['success' => true, 'message' => 'ออกจากระบบสำเร็จ']);
exit();
?>
