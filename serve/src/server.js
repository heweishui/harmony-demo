const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;



// 设置静态文件目录
// console.log('111111111',__dirname)
// app.use('/dev/emgencyRescue',express.static(path.join(__dirname, '/dev/emgencyRescue')));
app.use('/demo/main',express.static(path.join(__dirname, '../../dist/demo/main')));

// app.get('/dev/emgencyRescue/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/demo/main/index.html'));
});

// // 启动服务器
app.listen(PORT, () => {
    // console.log(`HTTPS Server is running on http://localhost:${PORT}/dev/emgencyRescue`);
    console.log(`HTTPS Server is running on http://localhost:${PORT}`);
});
