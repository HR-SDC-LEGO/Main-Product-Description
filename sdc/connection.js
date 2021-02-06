const { Client } = require('pg')

const client = new Client ({
  user: "rebrnd",
  password: 'cowboyz',
  host: "localhost",
  port: 5432,
  database: "leggosdc",
});

const query = {
  text: 'INSERT INTO productdetails(productNum, productName, productPrice, productRating, productReviewCount, productInStock, productBackOrder, productStockLimitations, productExclusiveTags, productSeriesTags, seriesName, seriesImage, productAgeRatingBottom, productAgeRatingTop, productPieceCount, vipPoints, chokeWarning, offersFlyer, signUpOffer, offersImageLink) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)',
  values: [10276, 'Colosseum', 549.99, 4.5, 61, 10, 0, 2, 'New/Exclusives', 'Adults Welcome/Buildings/Creator Expert', 'creator-expert', 'https://fecphoto.s3.us-east-2.amazonaws.com/creator_logo_pos_300w.png', 18, 99, 9036, 3575, 0, 'VIP Only! Get a FREE Chariot when you purhcase the exclusive new Colosseum.*', 1, 'https://fecphoto.s3.us-east-2.amazonaws.com/BFCM-live-Promo-Badge-3.png']
}

const deleteQuery = {
  text: 'DELETE FROM productdetails where productNum = ($1)',
  values: [10276]
}

// Promises
client.connect()
  .then(() => console.log('Connected Database Successfully'))
  .then(() => client.query(query))
  .then(() => client.query("select * from productdetails"))
  .then((results) => console.log(results.rows))
  .catch(e => console.log(e))
  .finally(() => client.end())

// execute()

// // Async Await
// async function execute() {
//   try {
//     await client.connect()
//     console.log('Connected successfully')
//     const results = await client.query('select * from people')
//     console.table(results.rows)
//   }
//   catch (ex) {
//     console.log(`Something wrond happend ${ex}`)
//   }
//   finally {
//     await client.end()
//     console.log('disconnected successfully')
//   }
// }
