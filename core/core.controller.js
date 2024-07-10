import { BuscarClienteService } from "./service/BuscarCliente.service"
const express = require('express')
const router = express.router()

const buscarCliente = new BuscarClienteService()

router.get('/buscarClientesPorEmpresa', async(req, res) => {
  return await buscarCliente.buscarPorEmpresa(req.nome);
})

module.exports = router