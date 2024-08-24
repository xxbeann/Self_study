const express = require('express');
const app = express();
const port = 3000;

// 모델: 가상의 데이터
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.set('view engine', 'ejs'); // 뷰 템플릿 엔진 설정
app.use(express.urlencoded({ extended: false }));

// 뷰: 뷰 템플릿 사용
app.get('/', (req, res) => {
  res.render('index', { items });
});

// 컨트롤러: 라우트 처리와 로직
app.get('/item/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);
  res.render('item', { item });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
