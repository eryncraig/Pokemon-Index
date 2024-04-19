#The Pink Pokedex
###A simple javascript app to showcase some skills

**Description**
I made this app to improve my general Javascript skills as well as to have something that shows them off! It is almost all vanilla js, except for the modals that use jQuery and Bootstrap. They were included since those libraries are so often used with js, but not anywhere else because I wanted to keep the application small and quick.

The other purpose of the app is of course to be used as a pokedex! Eventually I may implement a search feature, but right now you can navigate to the start of each generation of pokemon using the navbar.

To view the app visit this link: [Pink Pokedex](https://eryncraig.github.io/Pokemon-Index/)
To use it, navigate to the name of the pokemon you wish to view more information about, and click on it. A modal will appear with the pokemon image and a few stats.

 **Dependencies and Languages**
Fetch and promise polyfills
Bootstrap
Javascript
CSS
HTML
jQuery

This app is using minified versions to speed the response. It is not entirely necessary for this small of an app, but I still want to stick to best practices.

**Issues**
Currently none, please report them here if they appear.

**To use the code**
It will always run best on Google Chrome, but it is supported elsewhere as well, so you should be able to use your browser of choice. Internet Explorer may cause problems.

Be sure to have javascript allowed on your machine/browser. This app runs on javascript and will not run if js is not allowed or in use.

This application uses the open-source Pokemon API and is linked to that source for asynchronous loading. If the link is broken or missing the application will not work.

The functions in the js file primarily load the API data, then compile it into a list with necessary elements for interaction. There are some instances of deprecated language, such as innerHTML, but they are few and can be updated easily. They are there primarily as a usage example.

The order of the DOM actions: the api is loaded and data pulled; the data is translated into an HTML list, with data properties assigned to the content for each item; each item is then converted into a button which is linked to the action to open a modal with further data for review on the item.

If you reuse or edit this code, pay close attention to the syntax being used. The function to show the modal will use jQuery and Bootstrap simultaneously, and others will use vanilla js.

This app is currently hosted on Github Pages.

**Design Choices**

Clearly, pink is the theme! I wanted to make my pokedex more soft and welcoming in appearance than the usual loud reds and blues it usually comes in. Especially using pink, which typically implies girliness; this was also considered, and I really want to make things like pokemon and 'boyish' games or toys feel more inclusive for girls too. This is not to say all girls like pink! It's more of a stance I felt the project should take, and color is always a good place to start.

This also lead to the round buttons and typeface. While I love sans-serifs, I wanted the whole app to look contiguous and keep that 'soft' feel, so I opted for a typeface with rounded terminals, and styled the buttons to be more pill-shaped. I'm using black for the font right now since it reads so well, but I may change it to a (very) dark pink later.

I also opted for a list of pokemon formatted this way primarily for simplicity in the app. I did not make the app as a design example, it is primarily a coding example. As such, the formatting was left this way. It could easily be arranged into a grid though.

That's all I have to say, and thank you for taking the time to read and review my JS app.

**Cheers!**






