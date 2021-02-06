const fs = require ('fs');
const csvWriter = require('csv-write-stream')
var writer = csvWriter();
var faker = require('faker')
var counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('productdetails.csv'));
  for (var i = 0; i < 5; i++) {
    writer.write({
      productNum: faker.random.number({ min: 1000, max: 9999 }),
      productName: faker.lorem.words(3),
      productPrice: faker.finance.amount(1, 999, 2),
      productRating: faker.finance.amount(0, 5, 1),
      productReviewCount: faker.random.number(9999),
      productInStock: faker.random.number(1),
      productBackOrder: faker.random.arrayElement([null, faker.random.number(120)]),
      productStockLimitations: faker.random.number(9),
      productExclusiveTags: faker.lorem.words(faker.random.number(3)).split(' ').join('/'),
      productSeriesTags: faker.lorem.words(faker.random.number({ min: 1, max: 4 })).split(' ').join('/'),
      seriesName: faker.lorem.words(1),
      // use LoremFlickr
      seriesImage: 'https://loremflickr.com/320/240/electronics',
      productAgeRatingBottom: faker.random.number(18),
      productAgeRatingTop: faker.random.number({ min: faker.random.number(18) }),
      productPieceCount: faker.random.number(9999),
      vipPoints: faker.random.number(9999),
      chokeWarning: faker.random.number(1),
      offersFlyer: faker.random.arrayElement(['', faker.lorem.sentences(faker.random.number(3), '')]),
      signUpOffer: faker.random.number(1),
      // Use LoremFlicker
      offersImageLink: faker.image.avatar(),
    })
    console.log("currently on : ", i)
  }
  writer.end();
  console.log('done')
}

dataGen()