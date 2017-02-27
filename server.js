import express from 'express';
import path from 'path';
import cors from 'cors';
import jwt from 'express-jwt';

const app = express();

app.use(cors());

const authCheck = jwt({
  secret: new Buffer(process.env.AUTHSECRET, 'base64'),
  audience: process.env.AUTHCLIENT
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var contacts = [
  {
    id: 1,
    name: 'Chris Sevilleja',
    email: 'chris@scotch.io',
    image: '//gravatar.com/avatar/8a8bf3a2c952984defbd6bb48304b38e?s=200'
  },
  {
    id: 2,
    name: 'Nick Cerminara',
    email: 'nick@scotch.io',
    image: '//gravatar.com/avatar/5d0008252214234c609144ff3adf62cf?s=200'
  },
  {
    id: 3,
    name: 'Ado Kukic',
    email: 'ado@scotch.io',
    image: '//gravatar.com/avatar/99c4080f412ccf46b9b564db7f482907?s=200'
  },
  {
    id: 4,
    name: 'Holly Lloyd',
    email: 'holly@scotch.io',
    image: '//gravatar.com/avatar/5e074956ee8ba1fea26e30d28c190495?s=200'
  },
  {
    id: 5,
    name: 'Ryan Chenkie',
    email: 'ryan@scotch.io',
    image: '//gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=200'
  }
];

app.get('/api/contacts', (req, res) => {
  
  const allContacts = contacts.map(contact => {
    return { id: contact.id, name: contact.name};
  });
  console.log(allContacts)
  res.json(allContacts);
});

// app.get('/api/contacts/:id', authCheck, (req, res) => {
app.get('/api/contacts/:id', (req, res) => {
  let user = contacts.filter(contact => contact.id === parseInt(req.params.id))[0];
  console.log(user);
  res.json(user);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Listening to this joint on port 3000');
});
