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


// загружаем читаем данные
const loadData = async () => {
  const filePath = path.join(__dirname, './db/goods.json')
  // console.log('filePath: ', filePath); /// Просто читаем файл
  const data = await readFile(filePath, 'utf8');
  const obj = JSON.parse(data);
  return obj;
}

// обрабатываем отправляем данные
const sendData = async () => {
  const data = await loadData();
  return data;
}

/*
// // ? middleware use перебивает этот запрос
// app.get('/', async (req, res) => {
//   // todo request loger
//   console.log('server gets / before');
// })

app.get('/', (req, res, next) => {
  const filename = path.basename(req.url);
  const extension = path.extname(filename);
  // log file
  next();
})
app.use(express.static(__dirname));
*/

// обработка статических ссылок
app.use('/', express.static('public'));
app.use('/img', express.static('db/img'));


// обрабатываем запрос на список товаров
app.get('/goods', async (req, res) => {
  try {
    console.log(`Welcome... goods: ${++count}`);
    const updatedGoods = await sendData();
    // оформляем заголовки
    res.header("Access-Control-Allow-Origin", "*");
    // отправляем обновленный список
    res.json(updatedGoods);
  } catch {
    res.send('Server Error 400');
  }
})


// выдаем информацию о товаре номер
app.get("/page", async function(request, response){
  // todo 
  console.log(`\nrequest count: ${++count}`);
  try {
    console.log(url.parse(request.url));
    const queryData = url.parse(request.url, true).query;
    const id = queryData.id;
    console.log('id: ', id);
    const allproducts = await sendData();
    const product = allproducts.filter((item) => {
      return item.id == +id + +count;
    });
    console.log(`product with id ${id}:`);
    console.log(product);
    
    response.header("Access-Control-Allow-Origin", "*");
    // response.send('Lets find product id')
    // response.send(JSON.stringify(product));
    response.json(product);
    // response.send('Lets find product id' + JSON.stringify(product));
    // response.send('Lets find product id' + JSON.stringify(request))
  } catch {
    response.send('Server product Error 404')
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
    console.log('product: ', product);
    console.log('product: ', product[0].img);
    const imgfile = product[0].img;

    res.header("Access-Control-Allow-Origin", "*");
    // res.json(product); // Отправить json
    // const skifile = path.join(__dirname, `./db/img/ski${id}.png`)
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
