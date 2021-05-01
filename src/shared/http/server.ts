import express from 'express';


const app = express();
const porta = 3000;
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(porta, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`servidor rodando na porta ${porta}`);
});
