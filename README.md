# wdi_16_final_project
WDI 16 Final Project

#Backit
###is a MEAN stack application that enables you to swipe through and back petitions. 


<br>
##How it works
The user signs up and logs in. Post signup the user is redirected to the petitions page. Petitions are then loaded with the title and description in a card. As you swipe to the right, the user signs the petition. A "signed" animation fades in whilst swiping to the right. As you swipe to the left, the user rejects to sign the petition. A "nope" animation fades in whilst swiping to the left. A new petition is loaded after each swipe event. The user then logs out. 

##The build
- MongoDB, Express, AngularJS, Node.js (MEAN) stack application
- API: change.org - The world's platform for change to creating and mobilising support for petitions
- Angular Mobile UI is a mobile UI framework similar to jQuery Mobile but contains AngularJS and Bootstrap. Bootstrap is a popular CSS framework.
- jTinder is a JavaScript library to implement Tinder-style swiping animation for the petitions
- Node.js dependencies including crypto-js and passport
- HTML5 and CSS3

##The Process

Once I had conceived of the idea to create a Tinder-like application for petitions, I created my wireframes on Balsamiq and the MEAN base with user registration, login and logout for my application in small steps. I then focused on implmenting the change.org API and retrieving and populating the data locally. Thereafter, I inserted Mobile Angular UI. Towards the end, I focused on styling. 

##The problems and solutions

1) <strong>Change.org API documentation in PHP</strong>

The change.org API documentation did not provide a step-by-step tutorial to retrieve petition data. The examples provided were coded using PHP. So, I had to convert the PHP code into JavaScript. In order to build a request signature to sign a petition, I required SHA256, a secure hash algorithm that came in the form of a node.js dependency: crypto-js. 

I also implemented a serializer to join all the component strings together that are part of building a request signature. This included the secret and authorization key along with the petition authorization key and parametres.

2) <strong>Angular Mobile UI</strong>

I was successful in implementing Angular Mobile UI in providing a very mobile-friendly and responsive application. However, the feature carousel with drag gestures from Mobile Angular UI that would have provided the swiping feature to my application did not contain any events to sign or dismiss the petition. The swiping events could also not be defined by their transformation by the amount of degrees turned. The degrees that were provided were random.

I therefore had to look for another solution. jTinder, a JavaScript library that provides Tinder-like swiping features enabled me to integrate petitions in a deck of cards. To register the swiping event as having signed a petition, I created a directive that enabled me to make a http post request to the petition.