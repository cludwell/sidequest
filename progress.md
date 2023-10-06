9/29
-fixed ts errors on new character creation
-fixed bug that had incorrect char creation steps displayed
-added imgUrl to description form
-each part of form directs to next and previous
-confirming equipment redirects to submit button
-made sure character object has all required keys
9/30
-wrote backend route for create char
-made dummy char data to test
-have not tested backend route

10/2
-am able to add a user card to the drawer now
-experimented with drawer work around, could not find one
-backend create character route is working
-created page to display the user's characters and added link to drawer
-delete char thunk
-working on delete char backend route

10/3
-delete works and dynamically removes deleted character from display after button is pressed
-began researching how to hook chatgpt up to my app
-got key and env variables for chatgpt

10/4
-users are prevented from deleting seeded chars in frontend and backend
-solved card/drawer problem on user char page
-fetch to chatGPT is at least getting an error
-state for conversations is set up
-iterating through chat history and displaying chat bubbles
-create character page cleaned up from testing and debugging

10/5
-Paid for 10 bucks worth of credit on Chat api 

TO DO
-pass character object to dungeonmaster page
-create dice buttons
-manage subscription so that chatGPT sends useful response

-Creating update route for characters will have to empty objects on form selections so that spells, languages, etc do not persist


-CRUD for created characters
-hopefully set up AWS for uploading CHARACTER images at a future date
-try to see if you can redirect to next portion of character form on selection


TO DO TODAY
-send the json to the backend route
