CREATE DATABASE leggosdc;

\c leggosdc

CREATE TABLE productdetails(
  productNum serial PRIMARY KEY NOT NULL,
  productName varchar(150) NOT NULL,
  productPrice decimal (6,2) NOT NULL,
  productRating decimal (2,1),
  productReviewCount int NOT NULL,
  productInStock int NOT NULL,
  productBackOrder int NOT NULL,
  productStockLimitations int,
  productExclusiveTags varchar(150),
  productSeriesTags varchar (150),
  seriesName varchar (100),
  seriesImage varchar(350),
  productAgeRatingBottom int,
  productAgeRatingTop int,
  productPieceCount int,
  vipPoints int,
  chokeWarning boolean,
  offersFlyer varchar(250),
  signUpOffer int,
  offersImageLink varchar(250)
);

CREATE TABLE checkout (
  userNum serial PRIMARY KEY NOT NULL,
  activeUser boolean,
  wishList boolean,
  watchList boolean,
  userCart int[]
);