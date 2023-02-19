import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

function getSandwich() {
  return api('/menu/sandwich', {
    method: 'GET',
  });
}

function getSalad() {
  return api('/menu/salad', {
    method: 'GET',
  });
}

function getMenu() {
  return axios.all([getSandwich(), getSalad()]);
}

function getBread() {
  return api('/step/bread', {
    method: 'GET',
  });
}

function getCheese() {
  return api('/step/cheese', {
    method: 'GET',
  });
}

function getVegetable() {
  return api('/step/vegetable', {
    method: 'GET',
  });
}

function getSauce() {
  return api('/step/sauce', {
    method: 'GET',
  });
}

function getTopping() {
  return api('/step/topping', {
    method: 'GET',
  });
}

function getCombo() {
  return api('/step/combo', {
    method: 'GET',
  });
}

export {
  getSandwich,
  getSalad,
  getMenu,
  getBread,
  getCheese,
  getVegetable,
  getSauce,
  getTopping,
  getCombo,
};
