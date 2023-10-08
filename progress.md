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
-got chat up, responses are being fetched from api and rendered
-chat history is being recorded in state with every submission

10/6
-when user selects a character it navigates to dungeonmaster and records selected char in state
-name and charImg are being rendered
-refactor from drawer to header/drop down layout
-custom box shadowing on header
-have a d20 with spinning animation

10/7

TO DO
-create dice buttons, useState, and send to chat
-utilize pregenerated scenarios and display associated images?
-create user sign up feature
-mini char sheet modal
-Creating update route for characters will have to empty objects on form selections so that spells, languages, etc do not persist
-include text prompts that trigger leveling up or conditionally render exit from dungeon master page ---this could mean automating some sort of leveling up functionality
-perfect prompt to model so that there are some guardrails (example: char should have spells or skills that are erroneously missing from char sheet)

Nit Picks
-if first user message to language model is short, the chat bubble is centered and not aligned to the right


-CRUD for created characters
-hopefully set up AWS for uploading CHARACTER images at a future date
-try to see if you can redirect to next portion of character form on selection


LinkedIn post

Lessons learned

Daisy UI is a great library but some of the components, the Drawer (Sidebar), are incompatible as opacity and z-indices prevent the expected layering behavior. Despite being based on tailwinds, some components lack customizability.

ChatGPT doesnt offer state. A huge drawback to practical uses of an ai API in your app. Imagine an ai customer service rep, having to send all your policies with every request would be expensive. Disappointing as a paid service that this drawback exists.

Redux Toolkit and Next.js
Getting these technologies to work together was pretty challenging as there isnt much documentation out there about using them together. A lot of trial, error, and luck to happen upon the right resources was required to get these two working together.

TypeScript
Used it purely to build my skillset and make myself more marketable as a candidate. A good excercise but would not use otherwise. Benefits of horizontal Next.js file structure are mitigated by clutter of files exporting type definitions.
