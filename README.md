# 06 Server-Side APIs: Weather Dashboard

* To start off the Weather Dashboard I added a jumbotron for the banner of the app.
* Then I created a container to hold my nav bar and my data content.
* Inside my container I added a row with two columns in it one with a width of three to hold the search bar/ search info and the other with a width of 9 to hold the weather information.
* For the weather information I added a card that would hold all of my data points, for that I created a header, an img, and 5 p tags and gave them point specific IDs to make them easier to differenciate.
* Below that in a separate row I added another container to hold the 5 day forecast cards, and left it blank to dynamicly introduce them in the Javascript.
* In the Javascript first I created two consts for the search bar and the search button.
* Next I added an Event listener on the submit button for the search bar. While also creating a list element to hold all of the past city searches.
* For the first function I created a fetch request to pull from the open weather map api pulling the current weather of which ever city is searched. Getting the response in json I then appended the data returned to its proper ID location. As well as returning the information from the next two functions I was about to call.
* Next comes the function for calling the 5 day forecast. Using another fetch request I pulled from the same API only this time instead of weather we pulled from forecast. Here I also added a for loop that would go through the objects returned and called the function to append all of the data to my forecast section.
* The next function that I called was my final fetch request that calls from the UV Index API. Here I added a conditional that divides the index into three categories, Favorable, Moderate, and Severe. Using inline styling I said if the UV index is 4 or lower to return a green indecator, if 6 or lower return a yellow indecator, or if 7 or higher to return a red indicator. Green = Favorable, Yellow = Moderate, and Red = Severe.
* For the last function, I created one that would take all of the forecast data and create a card for each day and return to the user. First I created variables that would create elements in the HTML. Using the addClass function and the attr function I added style and classes to the new elements. Using .text I added the information to be returned to the user.
* Finally I used .appened to append all the wanted data to the dataRow in the HTML.

<img src="./assets/Screenshot 2020-11-07 200519.png"/>
<img src="./assets/Screenshot 2020-11-07 200737.png"/>
<img src="./assets/Screenshot 2020-11-07 200803.png"/>
<img src="./assets/Screenshot 2020-11-07 200821.png"/>
