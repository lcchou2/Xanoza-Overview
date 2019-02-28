## CRUD API ROUTES

| Endpoint                  | Type   | Operation                 |
|---------------------------|--------|---------------------------|
| `/api/overview/:listingId`| GET    | Get a listings            |
| `/api/overview`           | POST   | Add a listing             |
| `/api/overview/:listingId`| DELETE | Delete a listing          |
| `/api/overview/:listingId`| PUT    | Update a listing          |


## GET

`/api/overview/:listingId`

##### Example

```js
{
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
        hours: [{
          brunch_hrs: String,
	  lunch_hrs: String,
	  dinner_hrs: String
        }]
	,
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
}
```
##### On Success

`200 OK`

##### On Error

`400 Error`


## POST

`/api/overview`

##### Example

```js
{
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
        hours: [{
          brunch_hrs: String,
	  lunch_hrs: String,
	  dinner_hrs: String
        }]
	,
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
}
```
##### On Success

`201 CREATED`

##### On Error

`400 Error`

## DELETE

`/api/overview/:listingId`

##### Example

```js
{
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
        hours: [{
          brunch_hrs: String,
	  lunch_hrs: String,
	  dinner_hrs: String
        }]
	,
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
}
```

##### On Success

`200 OK`

##### On Error

`400 Error`

## PUT

`/api/overview/:listingId`

##### Example

```js
{
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
        hours: [{
          brunch_hrs: String,
	  lunch_hrs: String,
	  dinner_hrs: String
        }]
	,
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
}
```

##### On Success

`201 CREATED`

##### On Error

`400 Error`


