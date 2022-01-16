# UFOs

## Overview of the Analysis
This project allows users to filter UFO data by selecting one or multiple filters at the same time. The user has access to the following filters:
 1. Date
 2. City
 3. State
 4. Country
 5. Shape


## Results

There are a total of 111 records in the data set. One or multiple filters can be activated at one time. Once the user fills in the desired search terms the user can filter the data by clicking the `filter table` button.

### Search using one filter

The example below shows that by changing the date filter to `1/13/2010`, the website reduces the number of records from 111 to 3:

<img src="https://github.com/ryanmorin/UFOs/blob/main/static/images/one_filter.png" alt="one_filter" width="250" height="140">

### Search using multiple filters

The example below shows that by changing the date filter to `1/13/2010` AND including a State filter (ms), the website reduces the number of records from 111 to 1:

<img src="https://github.com/ryanmorin/UFOs/blob/main/static/images/many_filters.png" alt="one_filter" width="250" height="140">



### Search fields

The `Enter Date` field has a template indicating the accepted format. All of the data is from 2010.

The `City` field requires the user to type the exact name of the city in lower case.

The `State` field requires the user to type the exact name of the state in lower case.  US states only.

The `Country` field requires the user to type the name of the country in lower case. Presently the page has US data only.

The `Shape` field requires the user to type the name of the shape of the UFO in lower case. The possible selections are:

<img src="https://github.com/ryanmorin/UFOs/blob/main/static/images/shapes.png" alt="shapes_list" width="150" height="111">






## Summary

One drawback of the site is that the data is US specific.  Additional data sources should be included that makes the table a global look at UFO sightings. 

The follow are two suggestions to further improve the site:
1. It would be helpful if the search counted and returned the number of items that satisfied the filter.  
2. Instead of using a text box, some of the filters should be drop down boxes (State and Country). This would improve the user experience of the site because users would know what data they can search for.

