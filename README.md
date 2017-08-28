# Node-Weather-App
A weather application that lets you input an address to retrieve the weather. For this app I used NPM Packages (colors, yargs, axios(app-promise.js), request (app.js)) and API's (Google Maps and Darksky).

## How app works
### Help
Access help by using the `--help` or `-h` flag
```
node app.js --help   or   node app-promise.js --help
```

![1](https://user-images.githubusercontent.com/28790452/29786379-91c77774-8bf0-11e7-8095-b298aa5248d3.gif)

### Possible entries

Address, Zipcode, Street Address, City, Street, State, Country.

![2](https://user-images.githubusercontent.com/28790452/29786561-39d3af46-8bf1-11e7-91c2-1b3d4c5f1c16.gif)

## Project Installation
There are two methods to download the repository.

#### Method I: Familiar with Git?
Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/Node-Weather-App.git
> cd Node-Weather-App
> npm install
```

#### Not Familiar with Git?
Click [here](https://github.com/artprofi91/Node-Weather-App) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
```

## app-promise.js vs app.js
* app-promise.js
   * ES6 Promises to chain asynchronous requests
   * Code is easier to maintain (not nesting a ton of callbacks to achieve the same result)
   * npm axios, promise based HTTP client
* app.js
   * Uses callbacks to chain asyncronous requests
   * Code is harder to maintain (a bunch of nested functions which results in heavy indentation)
   * npm request, simplified HTTP request client 

