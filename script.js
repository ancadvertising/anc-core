const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

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