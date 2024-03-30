# Forms in website

## popup


{
phone : {String}
date :{string}
time :{string}
deletedAt: {Date, when the document is deleted},
isDeleted: {boolean, default: false},
createdAt: {timestamp},
updatedAt: {timestamp},
}

### popup api

#### POST / Popup

- Create a POPUP document from request body.
- save it in the database

* Response format

- On success - Return HTTP status 201. Also return the popup document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

#### get / getPopup

return all the popups which are not deleted

- Response format

* On success - Return HTTP status 200 and returns the user document. The response should be a JSON object
* On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

## enquiry form


{
name :{string},
phone :{string}
email:{string}
model :{string}
date :{string}
time :{string}
deletedAt: {Date, when the document is deleted},
isDeleted: {boolean, default: false},
createdAt: {timestamp},
updatedAt: {timestamp},
}

### enquiry api

#### POST / enquiry

- Create a enquiry document from request body.
- save it in the database

* Response format

- On success - Return HTTP status 201. Also return the enquiry document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

#### get / getEnquiry

- return all the enquiry which are not deleted

* Response format

- On success - Return HTTP status 201. Also return the enquiry document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

## sell cars form



{
brandName :{string}
year :{number}
model :{string}
fuel :{ string}
owership :{string}
variant :{string}
KmDriven :{string}
RegisteredCity :{string}
tansmission :{string}
contact :{
name :{string}
phone :{string}
email:{string}
date :{string}
time :{string}
deletedAt: {Date, when the document is deleted},
isDeleted: {boolean, default: false},
createdAt: {timestamp},
updatedAt: {timestamp},
}

### sell api

#### POST / sellCars

- Create a sell document from request body.
- save it in the database

* Response format

- On success - Return HTTP status 201. Also return the sell document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

}

#### get / getSell

- return all the sell which are not deleted

* Response format

- On success - Return HTTP status 201. Also return the sell document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

## apply loan form


{
name :{string},
phone :{string}
email:{string}
amount :{number}
deletedAt: {Date, when the document is deleted},
isDeleted: {boolean, default: false},
createdAt: {timestamp},
updatedAt: {timestamp},
}

### apply loan api

#### POST / loan

- Create a loan document from request body.
- save it in the database

* Response format

- On success - Return HTTP status 201. Also return the loan document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

#### get / getLoans

- return all the loan which are not deleted

* Response format

- On success - Return HTTP status 201. Also return the loan document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

- ## contact us form
  {
  name :{string},
  phone :{string}
  email:{string}
  message :{string}
  deletedAt: {Date, when the document is deleted},
  isDeleted: {boolean, default: false},
  createdAt: {timestamp},
  updatedAt: {timestamp},
  }

### contact us api

#### POST / contactUs

- Create a contactUs document from request body.
- save it in the database

* Response format

- On success - Return HTTP status 201. Also return the contactUs document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

#### get / getContactUs

- return all the contact us which are not deleted

* Response format

- On success - Return HTTP status 201. Also return the contactUs document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

# admin dashboard forms

- ## user
  {
  name :{string}
  phone :{number}
  email:{string}
  password:{string}
  }

#### POST /register

- Create a user document from request body. Request body must contain image.
  -Save password in encrypted format. (use bcrypt)

* Response format

- On success - Return HTTP status 201. Also return the user document. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

#### POST /login

- Allow an user to login with their email and password.
- On a successful login attempt return the userId and a JWT token contatining the userId, exp, iat.
  NOTE: There is a slight change in response body. You should also return userId in addition to the JWT token.

* Response format

- On success - Return HTTP status 200 and JWT token in response body. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

## post a vehicle

{
location: {string}
satus : {string}
title :{ sting}
brand :{string}
overview :{string}
user type :{string}
category :{ string}
transmission :{string}
body type :{string}
price :{ number}
fuel :{string}
model year :{string}
engine capcity :{string}
registered city :{ string}
color :{string}
registered Number :{string}
km driven :{ number}
images :[ image1 :{string},
image2 :{string},
image3 :{string},
image4 :{string},
image5 :{string},
image6 :{string},
]
}

### POST / vehicle

Create a vehicle document from request body.
Upload vehicle image to cludinary and save image public url in document.
Response format
On success - Return HTTP status 201. Also return the vehicle document. The response should be a JSON object
On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

### GET / vehicles

Returns all vehicles in the collection that aren't deleted.

#### Filters

- vehicle name (The key for this filter will be 'name'). You should return all the vehicles with name containing the substring recieved in this filter
- Price : greater than or less than a specific value. The keys are 'priceGreaterThan' and 'priceLessThan'.
  NOTE: For price filter request could contain both or any one of the keys. For example the query in the request could look like { priceGreaterThan: 500, priceLessThan: 2000 } or just { priceLessThan: 1000 }

#### Sort

- Sorted by vehicle price in ascending or descending. The key value pair will look like {priceSort : 1} or {priceSort : -1} eg /vehicles ?size=XL&name=Nit%20grit

* Response format

- On success - Return HTTP status 200. Also return the vehicle documents. The response should be a JSON object
- On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

### GET /vehicle/:vehicleID

Returns vehicle details by vehicle id

- Response format

* On success - Return HTTP status 200. Also return the vehicle documents. The response should be a JSON object
* On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

### PUT /vehicles/:vehicleID

Updates a vehicle by changing at least one or all fields
Check if the vehicleID exists (must have isDeleted false and is present in collection). If it doesn't, return an HTTP status 404 with a response body

- Response format

* On success - Return HTTP status 200. Also return the updated vehicle document. The response should be a JSON object
* On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object

### DELETE /vehicle/:vehicleID

Deletes a vehicle by vehicle id if it's not already deleted

- Response format

* On success - Return HTTP status 200. The response should be a JSON object
* On error - Return a suitable error message with a valid HTTP status code. The response should be a JSON object
