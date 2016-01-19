/* Fill out these functions using Mongoose queries*/
var Listing = require('./ListingSchema.js')
    mongoose = require('mongoose'), 
    config = require('./config');

mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name:'Library West'}, function(err, listing){
    if(err) throw err;
    console.log('\nFinding Library West:\n');
    console.log(listing);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(err, listing){
    if(err) throw err;
    console.log('\nRemoved Cable Listings\n');
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate(
    {code: 'PHL'},
    {address: 'Phelps Lab, Gainesville, FL 32611', latitude: '29.644564', longitude: '-82.348895'}, function(err,listing){
      if(err) throw err;
        console.log('\nUpdated Phelps Memorial to Real UF Phelps Lab Address:\n');
        console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listings){
    if(err) throw err;
    
    console.log('\nRetrieved All of the Listings:\n');
    console.log(listings); 
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();