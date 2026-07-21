const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUlLu41R1j1Zj8Zk2Pc34ilwTNV8_dcd1lSILyu_L_LvmdPLp6VecqpJpZcbAbPF3egg/exec';

async function sendDataToScript(data) {
 try {
 const response = await fetch(SCRIPT_URL, {
 method: 'POST',
 mode: 'cors',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(data)
 });
 
 if (!response.ok) {
 throw new Error(HTTP error! status: ${response.status});
 }
 
 const result = await response.json();
 console.log('Success:', result);
 return
// استدعاء الدالة عند تحميل الصفحة مع إرسال البيانات
sendDataToScript({ message: "Hello from GitHub Pages!" });
