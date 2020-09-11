# Fizgig
Server will house an app to display sorting algorithms, and an auto blogger hooked to an app. Just to play around.

- Firebase (for realtime updates to blogger)
- Mongo (for testing)
- Vue (because its just super convenient)

TODO: docker setup

#### Getting started
The blog app uses firebase for blog posts. Combined with Vue this will make your posts realtime as the phone app sends 
them to firebase. This should probably be two repos but I did it this way so people can see how webpack works
within an app build. This is how I do it. Hope it helps you all!

Set up firebase. Not gonna walk through that part but here's a link https://firebase.google.com/.
Next create your .env files in you app and in your server. They are separate since they handle them differently.
##### Keep them secret, keep them safe.

- in server .env
    -- PORT=####
    -- MONGOPORT=#####
    -- MONGOHOST='#.#.#.#'
- (in root) run npm install
- in app
    -- FIREKEY=from firebase
    -- FIREID=firebase id from setup
    -- DEVCLIENTPORT=####
- cd ./client/blog/ 
- run npm install
- npm run serve

#### While you work
You can use app blog as a base. Thing to note is it will run independently while you are building it. 
To run use "npm run serve" this is visible in the package.json
After you are done run "npm run build". This will package you app into a route in the server and the server will auto 
magically add the url route. For your convenience!

Have fun!