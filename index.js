const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())


const categories = require('./data/categories.json')
const news = require('./data/news.json')



// Testing the api
app.get('/', (req, res) => {
    res.send("server is running now- okay . thank you ?? ")
})



// All news loader
app.get('/news', (req, res) => {
    res.send(news)
})


// News categories List
app.get('/news-categories', (req, res) => {
    res.send(categories)
})

// Category Wise News List
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if( id === '08') {
        res.send(news)
    }
    else{
        const category_news = news.filter( n => n.category_id === id) 
        res.send(category_news)
    }
})

// News Details with News ID
app.get('/news/:id', (req, res) => {
    const id  = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})




// Server running test
app.listen(port, () => {
    console.log(`Server running On ${port}`)
})