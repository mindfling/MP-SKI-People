// import express from 'express';
// import { PORT } from 'var.js'
// import { readFile } from 'node:fs/promises';
// import path from 'node:path';
// import url from 'node:url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.basename(__filename);


const express = require('express');
const { PORT } = require('./var.js');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const url = require('node:url');


const app = express();
app.use('/img', express.static('db/img'));

const loadData = async () => {
  const filePath = path.join(__dirname, 'db/goods.json')
  const data = await readFile(filePath, 'utf8');
  const obj = JSON.parse(data);
  return obj;
}

const sendData = async () => {
  const data = await loadData();
  return data;
}


app.get('/goods', async (req, res) => {
  try {
    console.log('Welcome... goods');
    const updatedGoods = await sendData();
    // оформляем заголовки
    res.header("Access-Control-Allow-Origin", "*");
    // отправляем обновленный список
    res.json(updatedGoods);
    // res.send('Welcome to our node express server');
    // res.send(JSON.stringify(updatedGoods))
    // console.log('JSON.stringify(updatedGoods): ', JSON.stringify(updatedGoods));
  } catch {
    res.send('Error');
  }
})

app.post('/product', async (req, res) => {
  try {
    console.log('Welcome... PRODUCT post');
    console.log('req: ', req.body);
    // console.log('req: ', req.body);
    // const updatedGoods = await sendData();
    // оформляем заголовки
    res.header("Access-Control-Allow-Origin", "*");
    // res.json(updatedGoods);
    res.send('Welcome to our node express server PRODUCT');
    // res.send(JSON.stringify(updatedGoods))
    console.log('JSON.stringify(updatedGoods): ', JSON.stringify(updatedGoods));
  } catch {
    res.send('Error in product');
  }
})

app.get('/', async (req, res) => {
  res.send('Main page of api server')
  console.log('server gets /');
})

app.listen(PORT, () => {
  console.log(`Server starts at port ${PORT}`);
  // console.log('hello api\n', `we will run at, ${PORT} port`);
})
