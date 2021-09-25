// Bước 1 cài require thư viện express
const express = require('express');
// Bước 2 gọi đến đối tượng đại diện cho express
const  app = express();
// Bước 3 : định nghĩa port
const port = 3000;

// Bước 4 : route ( định nghĩa tuyến đường ) , trong app.get có 1 around function trả về response
// Trong dấu '/' chính là định nghĩa đường dẫn muốn viết , ví dụ : '/trang-chu'
app.get('/', (req, res) => {
    res.send('Xin chào Trang Nguyễn ')
})

// 127.0.0.1 --> localhost:
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
