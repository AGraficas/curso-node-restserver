const { response } = require('express');

const usersGet = (req, res = response) => {

    const { id, nombre, juan } = req.query;

    res.json({
        bOK: true,
        msg: 'Get API -- controlador',
        id,
        nombre,
        juan
    });
};

const usersPUT = (req, res) => {

    const { id } = req.params;

    res.json({
        bOK: true,
        msg: 'post API -- controlador',
        id
    });
};

const usersPOST = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        bOK: true,
        msg: 'post API -- controlador' ,
        nombre,
        edad
    });
};

const usersDELETE = (req, res) => {
    res.json({
        bOK: true,
        msg: 'delete API -- controlador'
    });
};

  module.exports = {
    usersGet,
    usersPUT,
    usersPOST,
    usersDELETE
  }