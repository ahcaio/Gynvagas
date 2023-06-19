const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Empresa = require('./empresa');
const Candidato = require('./candidato');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/empresa', async (req, res) => {
  const empresa = await Empresa.findAll();
  res.json(empresa);
});

app.get('/empresa/:id', async (req, res) => {
  const empresa = await Empresa.findById(req.params.id);
  if (!empresa) {
    res.status(404).send('Empresa não encontrada');
  } else {res.json(empresa);
  }
});

app.post('/empresa', async (req, res) => {
  const { nome, email } = req.body;
  const empresa = new Empresa(null, nome, email);
  await empresa.save();
  res.json(empresa);
});

app.put('/empresa/:id', async (req, res) => {
  const empresa = await Empresa.findById(req.params.id);
  if (!empresa) {
    res.status(404).send('Empresa não encontrada');
  } else {
    const { nome, email } = req.body;
    empresa.nome = nome;
    empresa.email = email;
    await empresa.save();
    res.json(empresa);
  }
});

app.delete('/empresa/:id', async (req, res) => {
  const empresa = await Empresa.findById(req.params.id);
  if (!empresa) {
    res.status(404).send('Empresa não encontrada');
  } else {
    await empresa.delete();
    res.status(204).send('Empresa removida com sucesso');
  }
});

app.get('/candidatos', async (req, res) => {
  const candidatos = await Candidato.findAll();
  res.json(candidatos);
});

app.get('/candidatos/:id', async (req, res) => {
  const candidato = await Candidato.findById(req.params.id);
  if (!candidato) {
    res.status(404).send('Candidato não encontrado');
  } else {
    res.json(candidato);
  }
});
app.post('/candidatos', async (req, res) => {
  const { nome, login, email} = req.body;
  const candidato = new Candidato(null, nome, login, email);
  await candidato.save();
  res.json(candidato);
  console.log("Candidato inserido com sucesso!")
});

app.put('/candidatos/:id', async (req, res) => {
  const candidato = await Candidato.findById(req.params.id);
  if (!candidato) {
    res.status(404).send('Candidato não encontrado');
  } else {
    const { nome, login, email } = req.body;
    candidato.nome = nome;
    candidato.login = login;
    candidato.email = email;
    await candidato.save();
    res.json(candidato);
  }
});

app.delete('/candidatos/:id', async (req, res) => {
  const candidato = await Candidato.findById(req.params.id);
  if (!candidato) {
    res.status(404).send('Candidato não encontrado');
  } else {
    await candidato.delete();
    res.status(204).send('Candidato removido com sucesso');
    console.log("Candidato deletado com sucesso!")
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
