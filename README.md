# News Angular Frontend

This is a frontend of news aggregator, where I will test out Angular.

## Backend

The service is using a backend service to provide set of APIs to provide data. The endpoint is configured in [config.ts](src/app/config.ts)

## Enhancements

This is a sceleton application just to show some basic approaches. Following is a list of enhancements that could be done to it:

- Make some sort of dynamic loading (like FB feed, when you only load what will be shown while with AJAX load other stuff while the user is scrolling)

- Category and source links to page with given filteres (+ category filter)

- Admin page to register new sources

- Formating and other design (date format, picture positioning)

- Testing!

- Handling the unhappy paths (backend is down and so on).

## Run

To start a local server you can run following which will start a server on [localhost:4200](http://localhost:4200/)

`ng serve`

## Links

[backend](https://github.com/pschoffer/news-dotnet-backend)
