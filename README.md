# MakanYuk
MakanYuk

## List API
---

**Public Route**

| Route      | HTTP   |     Description    |
|------------|--------|:------------------:|
| /signup    | POST   | Sign up a user     |
| /login     | POST   | Manual login       |
| /fblogin   | POST   | Login via facebook |

**Users Route**

| Route      | HTTP   |     Description    |
|------------|--------|:------------------:|
| /users     | GET    | Get users          |
| /users/:id | GET    | Get one user       |
| /users     | POST   | Sign up a user     |
| /users/:id | DELETE | Delete a user      |
| /users/:id | PUT    | Update a user      |

**Search Path**

| Route      | HTTP   |     Description    |
|------------|--------|:------------------:|
| /search/restaurants    | GET   | Search restaurants  |
| /search/location    | GET   | Search Restaurants by location  |




### Users

#### Get All Users
----
  Create user with name email and password

* **URL**

  /users/

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Body Params**

None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
       "message": "users found!",
       "data": [
           {
               "hostedMeals": 0,
               "attendedMeals": 0,
               "_id": "5b6d5046a7533f138a05af0b",
               "name": "oi",
               "email": "asdfasdf",
               "password": "$2a$08$8CHiBwbkipHCmiPvveuxe.PASAUuqAVZ/q/5lsokXs6F5HXftNVgy",
               "created_at": "2018-08-10T08:43:50.239Z",
               "updated_at": "2018-08-10T08:44:33.575Z",
               "__v": 0
           },
           {
               "hostedMeals": 0,
               "attendedMeals": 0,
               "_id": "5b6d529d4143a2150d6fed4a",
               "name": "eri",
               "email": "joanlamrack@gmail.com",
               "password": "$2a$08$cpTc0WZAFxm7Z9/x2w./r.KUE4wVwAoiQr9E48L9D6xpPwjHXXjU2",
               "created_at": "2018-08-10T08:53:49.942Z",
               "updated_at": "2018-08-10T08:53:49.942Z",
               "__v": 0
           }
       ]
    }
    ```
	If no data

	```json
    []
    ```


* **Sample Call:**

  ```javascript
    $.axios.get("/users")
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```


#### Create User
----
  Create user with name email and password

* **URL**

  /users/

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Body Params**

  | key  | required | type   | description |
  |---   | ---      |---     |---          |
  |  name | yes      | string  | name    |
  | email  | yes      | string  | email   |
  |password|(depends on login method)|string|password|

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
		"hostedMeals": 0,
		"attendedMeals": 0,
		"_id": "5b6d386791ddc41cd7663be2",
		"name": "maharamamaharama",
		"email": "maharama@gmail.com",
		"password": "$2a$08$gxJX0kyFQ0AjqWV0wcuaFuBuKQdMvSEQsFVkN/8i39SzIzvPfi4tm",
		"created_at": "2018-08-10T07:01:59.683Z",
		"updated_at": "2018-08-10T07:02:45.136Z",
		"__v": 0
    }
    ```
	If no data

	```json
    {
       "message": "no users found!",
       "data": []
    }
    ```


* **Sample Call:**

  ```javascript
    $.axios.post("/users"{
    name, password, email}
    )
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```


#### Delete User
----
  Delete user by id

* **URL**

  /users/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   id

* **Body Params**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
		"message": "user successfully deleted",
		"data": {
			"n": 1,
			"opTime": {
				"ts": "6588001862333497345",
				"t": 1
			},
			"electionId": "7fffffff0000000000000001",
			"ok": 1,
			"operationTime": "6588001862333497345",
			"$clusterTime": {
				"clusterTime": "6588001862333497345",
				"signature": {
					"hash": "9+RsRa8p/RRTppyzP72lRdsjmz8=",
					"keyId": "6586331472242671617"
				}
			}
		}
	}
    ```
	If no data with such id

	```json
    {
		"message": "user successfully deleted",
		"data": {
			"n": 0,
			"opTime": {
				"ts": "6588001862333497345",
				"t": 1
			},
			"electionId": "7fffffff0000000000000001",
			"ok": 1,
			"operationTime": "6588001862333497345",
			"$clusterTime": {
				"clusterTime": "6588001862333497345",
				"signature": {
					"hash": "9+RsRa8p/RRTppyzP72lRdsjmz8=",
					"keyId": "6586331472242671617"
				}
			}
		}
	}
    ```


* **Sample Call:**

  ```javascript
    $.axios.get("/users/<id user>")
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```


#### Get User by id
----
  Get User by id

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   id

* **Body Params**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "message": "users found!",
    "data": [
        {
            "hostedMeals": 0,
            "attendedMeals": 0,
            "_id": "5b6d386791ddc41cd7663be2",
            "name": "maharama",
            "email": "maramstratos@gmail.com",
            "password": "$2a$08$SUwpNC1N0mwX90/TyfevquUi1muYU.EKego7GicVgZS3XyfyaMlNm",
            "created_at": "2018-08-10T07:01:59.683Z",
            "updated_at": "2018-08-10T07:48:45.802Z",
            "__v": 0
        }
    ]
    ```
	If no data with such id

	```json
    {
		"message": "User successfully retrived",
		"data": null
	}
    ```

* **Sample Call:**

  ```javascript
    $.axios.get("/users/<id user>")
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```

#### Update User by id
----
  update User by id

* **URL**

  /users/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   id

* **Body Params**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
       "message": "user successfully updated!",
       "result": {
           "n": 1,
           "nModified": 1, // one is changed
           "opTime": {
               "ts": "6588010276174430209",
               "t": 1
           },
           "electionId": "7fffffff0000000000000001",
           "ok": 1,
           "operationTime": "6588010276174430209",
           "$clusterTime": {
               "clusterTime": "6588010276174430209",
               "signature": {
                   "hash": "nprDASHEFju7aHr3OxtCt/Kjd+0=",
                   "keyId": "6586331472242671617"
               }
           }
       }
    }
    ```
	If no data with such id

	```json
    {
       "message": "user successfully updated!",
       "result": {
           "n": 0, //no changes
           "nModified": 1,
           "opTime": {
               "ts": "6588010276174430209",
               "t": 1
           },
           "electionId": "7fffffff0000000000000001",
           "ok": 1,
           "operationTime": "6588010276174430209",
           "$clusterTime": {
               "clusterTime": "6588010276174430209",
               "signature": {
                   "hash": "nprDASHEFju7aHr3OxtCt/Kjd+0=",
                   "keyId": "6586331472242671617"
               }
           }
       }
    }
    ```

* **Sample Call:**

  ```javascript
    $.axios.put("/users/<id user>", {
    	name,
        password,
        email
    })
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```

### Search

#### Search Restaurant
----
  Search restaurants near the specified location (latitude, longitude).

* **URL**

  /search/restaurants

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  | key  | required | type   | description |
  |---   | ---      |---     |---          |
  | lat  | yes      | float  | latitude    |
  | lon  | yes      | float  | longitude   |

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "message": "success",
    	"data": {
            "results_found": "53",
            "results_start": "11",
            "results_shown": "10",
            "restaurants": [{
                "id": "16774318",
                "name": "Otto Enoteca & Pizzeria",
                "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
                "location": {
                    "address": "1 5th Avenue, New York, NY 10003",
                    "locality": "Greenwich Village",
                    "city": "New York City",
                    "latitude": "40.732013",
                    "longitude": "-73.996155",
                    "zipcode": "10003",
                    "country_id": "216"
                },
                "average_cost_for_two": "60",
                "price_range": "2",
                "currency": "$",
                "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
                "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
                "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
                "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
                "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
                "user_rating": {
                    "aggregate_rating": "3.7",
                    "rating_text": "Very Good",
                    "rating_color": "5BA829",
                    "votes": "1046"
                },
                "has_online_delivery": "0",
                "is_delivering_now": "0",
                "has_table_booking": "0",
                "deeplink": "zomato://r/16774318",
                "cuisines": "Cafe",
                "all_reviews_count": "15",
                "photo_count": "18",
                "phone_numbers": "(212) 228-2930",
                "photos": [{
                    "id": "u_MjA5MjY1OTk5OT",
                    "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
                    "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
                    "user": {
                        "name": "John Doe",
                        "zomato_handle": "John",
                        "foodie_level": "Super Foodie",
                        "foodie_level_num": "9",
                        "foodie_color": "f58552",
                        "profile_url": "https://www.zomato.com/john",
                        "profile_deeplink": "zoma.to/u/1170245",
                        "profile_image": "string"
                    },
                    "res_id": "16782899",
                    "caption": "#awesome",
                    "timestamp": "1435111770",
                    "friendly_time": "3 months ago",
                    "width": "640",
                    "height": "640",
                    "comments_count": "0",
                    "likes_count": "0"
                }],
                "all_reviews": [{
                    "rating": "5",
                    "review_text": "The best latte I've ever had. It tasted a little sweet",
                    "id": "24127336",
                    "rating_color": "305D02",
                    "review_time_friendly": "2 months ago",
                    "rating_text": "Insane!",
                    "timestamp": "1435507367",
                    "likes": "0",
                    "user": {
                        "name": "John Doe",
                        "zomato_handle": "John",
                        "foodie_level": "Super Foodie",
                        "foodie_level_num": "9",
                        "foodie_color": "f58552",
                        "profile_url": "https://www.zomato.com/john",
                        "profile_deeplink": "zoma.to/u/1170245",
                        "profile_image": "string"
                    },
                    "comments_count": "0"
                }]
            }]
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "invalid location", data: {} }`

* **Sample Call:**

  ```javascript
    $.axios.get("/search/restaurants?lat=-6.260044199999999&lon=106.7817353")
        .then(result => {
            console.log(result)
        })
        .fail(err => {
            console.log(err)
        })
  ```
