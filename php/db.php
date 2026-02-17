<?php
require_once __DIR__ . '/config.php';
try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        throw new Exception("เชื่อมต่อฐานข้อมูลไม่สำเร็จ: " . $conn->connect_error);
    }
} catch (Exception $error) {
    die("ระบบขัดข้อง กรุณาลองใหม่ภายหลัง"); //. $error->getMessage());
}

?> 