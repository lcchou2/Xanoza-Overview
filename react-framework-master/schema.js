const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var faker = require('faker');
// var db = mongoose.connection;

var Restaurant = mongoose.model('Restaurant', {
	id: Number,
	name: String,
	ratings_num: Number,
	rating: Number,
	description: String,
	price_min: Number,
	price_max: Number,
	food_type: String,
	tag_one: String,
	tag_two: String,
	tag_three: String,
	cross_street: String,
	neighborhood: String,
	brunch_hrs: String,
	lunch_hrs: String,
	dinner_hrs: String,
	dining_style: String,
	dress_code: String,
	payment_options: String,
	chef: String,
	entertainment: String,
	additional_info: String,
	website: String,
	phone_number: String,
	longitude: Number,
	latitude: Number,
	street_address: String
});


for(var i = 1; i <= 100; i++) {

var dummyData = new Restaurant({
	id: i,
	name: faker.lorem.word(),
	rating: Math.random()*(3.9-3.1+1)+3,
	ratings_num: Math.floor(Math.random()*(1000-100+1)+100),
	price_min: Math.floor(Math.random()*(20-15+1)+15),
	price_max: Math.floor(Math.random()*(50-20+1)+20),
	description: faker.lorem.paragraph() + faker.lorem.paragraph(),
	food_type: faker.lorem.word(),
	tag_one: faker.lorem.word(),
	tag_two: faker.lorem.word(),
	tag_three: faker.lorem.word(),
	cross_street: faker.lorem.word(),
	neighborhood: faker.lorem.word(),
	brunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
	lunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
	dinner_hrs: "5:00 pm to 10:00 pm",
	dining_style: faker.lorem.word(),
	dress_code: faker.lorem.word(),
	payment_options: faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	chef: faker.name.firstName(),
	entertainment:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	additional_info:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	website: faker.internet.url(),
	phone_number: faker.helpers.replaceSymbols("(###) ###-####"),
	longitude: faker.address.longitude(),
	latitude: faker.address.latitude(),
	street_address: faker.address.streetAddress()
	});

dummyData.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('SAVED');
  }
});

}