const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/books', (req, res) => {
    res.json([
        { id: 1, title: 'It Ends with us', description: 'One day, Lily runs into Atlas. He says his life is good enough for Lily now, so if she`s ever ready to fall in love again, he`s there for her. She says she`s ready, and they embrace. He says she can stop swimming. A short summary of Colleen Hoovers It Ends with Us. This free synopsis covers all the crucial plot points of It Ends with Us.', image: 'https://i.pinimg.com/236x/2b/67/60/2b6760353435b8ef1a3437385a381039.jpg' },
        // Add more book data here
    ]);
});

app.get('/api/bookopt', (req, res) => {
    const books = (id, image, name, author, price) => ({id, image, name, author, price});
    const createBook = [
        books(1, 'https://m.media-amazon.com/images/I/71PNGYHykrL._SL1500_.jpg', 'It starts with us', 'Colleen hoover', '$23'),
        books(2, 'https://m.media-amazon.com/images/I/816rxCOuWvL._AC_UL480_FMwebp_QL65_.jpg', 'Kille Smile','Mary Stone', '$20'),
        books(3, 'https://m.media-amazon.com/images/I/81b1PP4RK1L._AC_UY327_FMwebp_QL65_.jpg', 'That Night', 'Nidhi Upadhyay', '$4'),
        books(4, 'https://m.media-amazon.com/images/I/81zyFvFYZNL._AC_UL480_FMwebp_QL65_.jpg', 'King of wrath', 'Ana Huang', '$7')
    ]
    res.json(createBook)
})

app.get('/api/bookchoices', (req, res) => {
    const books = (id, image, name, author, price) => ({id, image, name, author, price});
    const createBook = [
        books(1, 'https://m.media-amazon.com/images/I/910lg-mg-sL._AC_UL480_FMwebp_QL65_.jpg', 'Trust', 'Hernan Diaz', '$15.8'),
        books(2, 'https://m.media-amazon.com/images/I/81noQg1m14L._AC_UL480_FMwebp_QL65_.jpg', 'Sandwich','Catherine Newman', '$16'),
        books(3, 'https://m.media-amazon.com/images/I/71E8VNPC1dL._AC_UL480_FMwebp_QL65_.jpg', 'Ugly Love', 'Colleen Hoover', '$10'),
        books(4, 'https://m.media-amazon.com/images/I/71zMzygiDQL._AC_UL480_FMwebp_QL65_.jpg', 'Beautiful Country', 'J.R Thornton', '$10')
    ]
    res.json(createBook)
})

app.get('/api/reviews', (req, res) => {
    const reviews = (name, review, image, imageDescription)=>({name, review, image, imageDescription});
    const createReviews = [
        reviews('Misbah Ansari', 'This book was truly captivating and insightful. A must-read!', 'https://m.media-amazon.com/images/I/71PNGYHykrL._SL1500_.jpg', 'I was so worried before I picked up the book because of the unrealistic expectations I have for it but….. I feel so complete! You did the right thing writing this book and making it so wholesome. And you know what? I am already expecting a novella or something to know more about Josh! (People, read the book and try to know the good, the bad and the ugly characters).'),
        reviews('John Doe', 'A very well-written book with deep insights.', 'https://via.placeholder.com/150', 'Cover image of the book John reviewed.')
        // Add more reviews as needed
    ];

    res.json(createReviews);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
