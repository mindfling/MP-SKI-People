// ? import ? для node > 18
import express from 'express';
import { APP_NAME, PORT } from './var.js'
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ? require ? для node 16
// const express = require('express');
// const { PORT } = require('./config.js'); // commonjs config
// const { readFile } = require('node:fs/promises');
// const path = require('node:path');
// const url = require('node:url');


const app = express();
let count = 0;
const counter = () => console.log(`\nrequest count: ${++count}`);


// обработка статических ссылок
app.use('/', express.static('public'));
app.use('/img', express.static('db/img'));



// читаем данные из файла
const loadData = async () => {
  const filePath = path.join(__dirname, 'db/goods.json');
  const data = await readFile(filePath, 'utf8');
  const obj = JSON.parse(data);
  return obj;
}

// обрабатываем отправляем данные
const sendData = async () => {
  const data = await loadData();
  return data;
}


// обрабатываем запрос на список товаров goods
app.get('/goods', async (req, res) => {
  try {
    counter();
    console.log('goods request');
    const updatedGoods = await sendData();
    // оформляем заголовки
    res.header("Access-Control-Allow-Origin", "*");
    // отправляем список 2 раза перепарсенный json
    res.json(updatedGoods);
  } catch {
    res.send('Server Error 400');
  }
})


// todo а что если клиенту отправить просто
// СЫРУЮ строку из файла goods.json ?
app.get('/allgoods', async (req, res) => {
  counter();
  console.log('allgoods request');
  const filepath = path.join(__dirname, 'db/goods.json');
  try {
    const data = await readFile(filepath, 'utf8');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (e) {
    res.send(`Server read Error 400 ${e.message}`);
  }
})




// выдаем информацию о товаре номер
app.get("/page", async function(request, response){
  counter();
  try {
    const queryData = url.parse(request.url, true).query;
    const id = queryData.id;
    const products = await sendData();
    const product = products.filter((item) => {
      return item.id == id;
    });
    console.log(`product with id ${id}:`, product);
    response.header("Access-Control-Allow-Origin", "*");
    response.json(product); // Отправляем json product
  } catch { 
    response.send('Server page Error 404');
  }
})


app.get('/product', async (req, res) => {
  console.log(`\nrequest count: ${++count}`);
  try {
    const query = url.parse(req.url, true).query;
    const id = query?.id;
    console.log('id: ', id);
    const products = await loadData();
    const product = products.filter( item => item.id == id);
    console.log('product: ', product[0].img);
    const imgfile = product[0].img;

    res.header("Access-Control-Allow-Origin", "*");
    const skifile = path.join(__dirname, `./db/img/${imgfile}`);
    console.log('Отправляем файл: ', skifile);
    res.sendFile(skifile); // Отправиль файл
  } catch {
    res.send('Server product Error 404')
  }
});

// запускаем сервер
app.listen(PORT, () => {
  // console.log(`Server starts at port ${PORT}\nApplication ${APP_NAME} working at dir: ${__dirname}`);
  console.log('Server starts ');
})
