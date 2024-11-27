// backend/index.js
const express = require('express');
 
const PORT = 3010;//5500;//process.env.PORT || 3456;//3010;
//const PORT = process.env.PORT || 8000;
// "set PORT=3005 && react-scripts start"
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
/*app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});*/

//Следующий код создает эндпоинт /api/todo-items. React приложение будет отправлять GET запрос на этот эндпоинт.
const todoItems = require('./api/todo-items.json');//require('./api/todo-items.json');
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});