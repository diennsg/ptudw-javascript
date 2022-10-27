const express = require('express');
const app = express();

// JSON.stringify(data)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// thay $ == [Op.or: ]
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// static: /public: (.html)
app.use(express.static(__dirname  + './public'));
app.use(express.static(__dirname  + './views'));

//=================================================================================
// express-handlebars
const expHbs = require('express-handlebars')
var hbs  = expHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    //handlebars: allowInsecurePrototypeAccess(Handlebars),
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }   
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// sync
app.get('/sync', (req, res)=>{
    let models = require('./models');
    models.sequelize.sync({force: true})
    .then(()=>{
        res.send('ĐÃ TẠO ĐƯỢC TABLES TRONG POSTGRES !')
    });
});

//=================================================================================
// dieu huong routescls\
app.use('/input', require('./routes/inputRouter'));
app.use('/list', require('./routes/listRouter'));
//=================================================================================
// chuong trinh test
app.use('/sinhvien', require('./sinhvienRouter'));
//=================================================================================
// JavaScript Co Ban
app.use('/ex01', require('./routes/EX01Router'));
app.use('/ex02', require('./routes/EX02Router'));
app.use('/ex03', require('./routes/EX05Router'));
app.use('/ex04', require('./routes/EX04Router'));
app.use('/ex05', require('./routes/EX04Router'));
//=================================================================================
// JavaScript nang cao
app.use('/ex06', require('./routes/EX06Router'));
app.use('/ex07', require('./routes/EX07Router'));
app.use('/ex08', require('./routes/EX08Router'));
app.use('/ex09', require('./routes/EX09Router'));
app.use('/ex10', require('./routes/EX10Router'));

//=================================================================================
// trang nhap du lieu: input
app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/html', (req,res)=>{
    res.sendFile(__dirname + '/input.html');
})
//=================================================================================
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`server is running on port ${app.get('port')}`);
});
//=================================================================================