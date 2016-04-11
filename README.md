Front End


User Story:
Users would be able to enter in the food they have in their freezer, fridge, and pantry(cupboard) and they can enter and when it is expired.
Also the User can update and delete their food item. If they delete their item, the app will ask the user what they did with the food : throw away, eat, or donate( give to a friend or donate to shelter ). Afterward the food will disappear from the storage page and appear in the disposal page. The user can see all the items and total count of food items they ate, threw away("trash"), and donated.


wireframe
(https://cloud.githubusercontent.com/assets/16465193/14250417/5f92394c-fa4c-11e5-8c88-ff8ff6ddd5c3.jpg)

first wireframe
(https://cloud.githubusercontent.com/assets/16465193/14377861/11c4e862-fd40-11e5-883b-62787df9e4ea.jpg)

link to backend
https://github.com/Knguyen21/taste-or-waste-api_backend
                                                                            
screenshot of app
![screen shot 2016-04-08 at 4 04 11 am](https://cloud.githubusercontent.com/assets/16465193/14377986/bc576bb0-fd40-11e5-95fb-96d8ece9d6cb.png)

My ERD:
(https://cloud.githubusercontent.com/assets/16465193/14380660/b1b1aed8-fd4e-11e5-824c-c507e825fe6e.png)



I used Ember as a front end framework and Rails for the backend. In addition I used ruby, javascript, html, sass, and heroku.


The very first thing after I thought of my idea, I drew a ERD and created a wireframe. This first step made it smoother for code my functions because I had an idea of how I wanted my app to look and function. Afterward, I worked on the backend. I generated models and updated my controllers and serializer.

Once I tested the CRUD action with curl, I felt confident enought to start  coding in the front end. I tried to make a schedule for myself to make sure I manage my time well. Since I'm not familiar with Ember that much, I did a lot of online research to try to solve my issues and create a product.


It was very challening to use Ember, but I read many online resources and was able to get a bit of a better understanding. I wanted to make a second select option for disposal, but I couldn't find a way to do it in Ember with out Ember making both of the select category for storage and disposal have the same value.
