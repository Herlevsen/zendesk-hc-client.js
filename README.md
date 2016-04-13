# Zendesk Help Center API Client for Javascript
Still under development. Right now pagination is unavailable.

Intended for querying publicly available data from your Zendesk Help Center's Api. This can be usefull if for example you want to show other sections in the same category as the section currently being browsed. This can be loaded with javascript.

## Usage
jQuery must be loaded before this script.

### Initialize the API Client
To initialize the client, you have to provide your subdomain and optionally a localization code. If no locale is specified, the requests will be for all languages. Subdomain is your domain at zendesk, eg: 'mysite' for mysite.zendesk.com
```javascript
var zClient = new ZendeskClient('mysite', 'en-us');
```

### Get all categories
```javascript
zClient.getCategories(function(data) {
    console.log(data);
});
```

### Get all sections
```javascript
zClient.getSections(function(data) {
    console.log(data);
});
```

### Get all sections in a specific category
```javascript
zClient.getSectionsByCategoryId(200568842, function(data) {
    console.log(data);
});
````

### Get all articles
```javascript
zClient.getArticles(function(data) {
    console.log(data);
});
```

### Get all articles in a specific category
```javascript
zClient.getArticlesByCategoryId(200568842, function(data) {
    console.log(data);
});
```

### Get all articles in a specific section
```javascript
zClient.getArticlesBySectionId(201204642, function(data) {
    console.log(data);
});
```

Feel free to contribute by making a pull request.