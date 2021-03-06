# Streamday #
Streamday is an example application for BossmodeCG. Unlike some competitors we're not leaving it up to you to try to build something out of a jumble of parts (though if there's anything in here you don't like, you're 100% welcome to!), but rather offering a mostly-configurable out-of-the-box example of what BossmodeCG can help you do.

Streamday (and BossmodeCG in general) was originally built for the [Gamers With Jobs Extra Life 2017](https://www.gamerswithjobs.com/node/1300759) team, and so there is probably some GWJ- and Extra Life-specific stuff in here. There's an Extra Life overlay logo, for example, and twelve different iterations of the Gamers With Jobs "Stan" logo. You are officially and completely encouraged to take Streamday, fork it on GitHub, and run off of one that's modified however you need.

And if you come up with a neat feature that would be great to contribute back, open a pull request! If it's something with some widespread value, we should definitely talk about bringing it into mainline for other people to use. In particular, I'd be _very_ interested in collaborating on a frontend framework that encourages component reuse and helps more people be able to build their own presentation environment; thoughts and help to that end would be awesome.

Thanks for checking out Streamday and BossmodeCG!

-[Ed Ropple](https://twitter.com/edropple)

## High-Level Overview ##
Streamday is built out of three parts, just like any other BossmodeCG application: the _server_, the _management backend_, and the _frontend_.

### The Server ###
The server is a modular framework for hosting an arbitrary set of _modules_. Each module (such as `clientele` or `simplestore`) has its own state, persisted to disk on the server, and an event bus that is propagated out both to any other module that's running in the server as well as all clients.

The server uses [socket.io](https://socket.io/) under the hood, if you're curious. (I've been thinking about extending the web server that manages the socket.io clients to allow for HTTP requests to individual modules. If this would be useful to you, let me know and we can talk about how it's best done.)

### The Management Backend ###
The management backend is using the `@bossmodecg/management-react` framework (which is easily the least mature part of BossmodeCG, but I tried to design it with an eye towards future growth). That backend consumes _widgets_, which are panels that are displayed on the backend web app. Those widgets communicate with the server and, through the server, can effect changes on the frontend. Or on other systems entirely, even--triggering scene switches through the `obsstudio` widget (which talks to the `obsstudio` server module) instead of getting all clicky on the OBS side of things.

### The Frontend ###
The frontend is where a lot of the magic happens. The frontend here is written in React (but, unlike the backend, this is pretty easily pulled down to the studs--I've used [pixi.js](http://www.pixijs.com/) as well). Because we're using React we have some room for using state changes rather than just using events, which makes this whole thing a little easier to manage, but the lessons 

## Specific Streaming Features ##

### Countdown ###
_Countdown_ is a pausable countdown timer for use in Extra Life that renders in the sidebar.

### LNF ###
_LNF_ (look-and-feel, get it?) is a set of tools that allow some level of customization of your Streamday presentation without needing to be an HTML wizard. It's not the be-all, end-all, but it supports colorization, playspace-corner logos, and controlling the background on the 16:9 playspace letterboxes.

### Gameshow ###
_Gameshow_ is a set of features that work together to allow you to sync up parts of your presentation with its content. Gamevault connects to the Giant Bomb API to select games and find box art, then renders it as the background of your sidebar. It also will update Twitch's "Now Playing" when you trigger a change.
