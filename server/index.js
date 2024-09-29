const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors({
    origin:"https://bookify-peach.vercel.app/",
    credentials:true
}
));


app.get('/api/bookopt', (req, res) => {
    const books = (id, image, name, author, price) => ({id, image, name, author, price});
    const createBook = [
        books(1, 'https://m.media-amazon.com/images/I/71PNGYHykrL._SL1500_.jpg', 'It starts with us', 'Colleen Hoover', '$23'),
        books(2, 'https://m.media-amazon.com/images/I/816rxCOuWvL._AC_UL480_FMwebp_QL65_.jpg', 'Kille Smile','Mary Stone', '$20'),
        books(3, 'https://m.media-amazon.com/images/I/81b1PP4RK1L._AC_UY327_FMwebp_QL65_.jpg', 'That Night', 'Nidhi Upadhyay', '$4'),
        books(4, 'https://m.media-amazon.com/images/I/81zyFvFYZNL._AC_UL480_FMwebp_QL65_.jpg', 'King of wrath', 'Ana Huang', '$7')
    ];
    res.json(createBook);
});

app.get('/api/bookchoices', (req, res) => {
    const books = (id, image, name, author, price) => ({id, image, name, author, price});
    const createBook = [
        books(1, 'https://m.media-amazon.com/images/I/910lg-mg-sL._AC_UL480_FMwebp_QL65_.jpg', 'Trust', 'Hernan Diaz', '$15.8'),
        books(2, 'https://m.media-amazon.com/images/I/81noQg1m14L._AC_UL480_FMwebp_QL65_.jpg', 'Sandwich', 'Catherine Newman', '$16'),
        books(3, 'https://m.media-amazon.com/images/I/71E8VNPC1dL._AC_UL480_FMwebp_QL65_.jpg', 'Ugly Love', 'Colleen Hoover', '$10'),
        books(4, 'https://m.media-amazon.com/images/I/71zMzygiDQL._AC_UL480_FMwebp_QL65_.jpg', 'Beautiful Country', 'J.R Thornton', '$10')
    ];
    res.json(createBook);
});

app.get('/api/reviews', (req, res) => {
    const reviews = (name, review, image, imageDescription) => ({ name, review, image, imageDescription });
    const createReviews = [
        reviews('Misbah Ansari', 'This book was truly captivating and insightful. A must-read!', 'https://m.media-amazon.com/images/I/71PNGYHykrL._SL1500_.jpg', 'A review of It Starts With Us.'),
        reviews('Kylie Jenner', 'A very well-written book with deep insights.', 'https://m.media-amazon.com/images/I/81noQg1m14L._AC_UL480_FMwebp_QL65_.jpg', 'A review of Sandwich.'),
        reviews('Nidhi Upadhyay', 'A beautiful and inspiring story that will leave you in awe.', 'https://m.media-amazon.com/images/I/71E8VNPC1dL._AC_UL480_FMwebp_QL65_.jpg', 'A review of Ugly Love.'),
        reviews('Ana Huang', 'A captivating and thought-provoking read.', 'https://m.media-amazon.com/images/I/71zMzygiDQL._AC_UL480_FMwebp_QL65_.jpg', 'A review of Beautiful Country.')
    ];

    res.json(createReviews);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
