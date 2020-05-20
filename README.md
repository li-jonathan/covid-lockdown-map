# COVID-19 Lockdown Map
Map of the United States with information about a state's lockdown orders due to the Coronavirus.

## Scrapped due to unresolved bug
New Browserify bundling bug that exposes the API key. Code works server side but does not work client side without having an exposed API.

## Description
This is a web application containing an interactive map of the United States. When a state is clicked on the map, information regarding state lockdown will appear next to the map. User will see information regarding traveling restrictions, gathering regulations, business opening guidelines, and duration of the state mandate.  

Utilizes the Google Spreadsheet API to retrieve data from a Google Sheet containing information about all states.

## Functionality
Partial data included to show website functionality. View Google Spreadsheet below to view how data is organized and can be updated.</br>*Data will not be completed nor further updated, as website will not be commercially deployed and is meant to just show functionality (usage of interactive map and data retrieval using Google API).

## Data
Click [here](https://docs.google.com/spreadsheets/d/1dPAVzaMeYQJWw166GW88Z41HJtbRnMObIvFYoLckJRY/edit#gid=0) to view Google Sheet of data.

## Packages
* npm [6.14.4](https://www.npmjs.com/get-npm)
* nodejs [13.13.0](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* google-spreadsheet [3.0.11](https://www.npmjs.com/package/google-spreadsheet/v/3.0.11)
* browserify [16.5.1](http://browserify.org/#install)

## Demo
Click [here](https://li-jonathan.github.io/covid-lockdown-map/) to see current version of website.

![Screenshot of map](https://github.com/li-jonathan/covid-lockdown-map/blob/master/demo.gif)
