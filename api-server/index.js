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


// ? middleware use перебивает этот запрос
app.get('/', async (req, res) => {
  console.log('server gets / before');
})

// обработка статических ссылок
app.use('/', express.static('public'));
app.use('/img', express.static('db/img'));


// обрабатываем запрос на список товаров
app.get('/goods', async (req, res) => {
  try {
    console.log('Welcome... goods');
    const updatedGoods = await sendData();
    // оформляем заголовки
    res.header("Access-Control-Allow-Origin", "*");
    // отправляем обновленный список
    res.json(updatedGoods);
  } catch {
    res.send('Error');
  }
})


// выдаем информацию о товаре номер
app.get('/product/$', async (req, res) => {
  // todo 
})


// запускаем сервер
app.listen(PORT, () => {
  console.log(`Server starts at port ${PORT}\nApplication ${APP_NAME}`);
})
