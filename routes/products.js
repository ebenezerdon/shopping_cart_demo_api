const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    products: [
      {
        id: '1',
        name: 'Denim Pocket Print T-shirt',
        price: 2300,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1552005452/poudb0j6gptbggxztfre.jpg'
      },
      {
        id: 2,
        name: 'Vestidos Vintage Wear',
        price: 5342,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1552004888/imaqrrefbqaq4xa87p4r.jpg'
      },
      {
        id: 3,
        name: 'Block Fleece Hoodie',
        price: 4988,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1552003606/ihuf0noo3hihkmfzk2gn.jpg'
      },
      {
        id: 4,
        name: 'Jasmine Bell Sleeve Dress',
        price: 5400,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1552002566/noyqvnskvy8kw3zznwmo.jpg'
      },
      {
        id: 5,
        name: "Men's Hoodie Sweat Shirt",
        price: 4020,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1551993378/ky6i07onnyudpe2thlrv.jpg'
      },
      {
        id: 6,
        name: 'Short Sleeve T-shirt - White',
        price: 1399,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1551993159/w2jnj2oh47yids0skskl.jpg'
      },
      {
        id: 7,
        name: 'Long Sleeve Hooded T Shirt',
        price: 2999,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1551992156/hrqinxdgqaxeqwdqbll9.jpg'
      },
      {
        id: 8,
        name: 'Generic Colourful Face Towels',
        price: 12350,
        imageUrl: 'http://res.cloudinary.com/learnground/image/upload/v1551992462/cxockdhiymgit9vmb1lo.jpg'
      }
    ]
  })
});

module.exports = router;
