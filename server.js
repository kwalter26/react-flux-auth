import express from 'express';
import path from 'path';
import cors from 'cors';
import jwt from 'express-jwt';

const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
});

app.listen(3000, ()=>{
    console.log('Listening to this joint on port 3000');
})