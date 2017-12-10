# Redux Blog Posts
Simple Blog Posts for Redux with React, React Router, Redux Form, Validation and Babel support.

### Quick Setup

1. Open project folder:
```
cd blog-posts
```

2. Build dependencies:
```
npm install
```

3. Start local server:
```
npm start
```

4. Open in web browser:
```
http://localhost:8080
```

### Run tests
```
npm test
```

### Full Setup

1. Modify MongoDB credentials in `blog-posts/api/resources/config/prod.php`:
```
$app['db.server'] = "mongodb://[DB_HOST]:[DB_PORT]";
$app['db.options'] = array(
  "username" => "[DB_USER]",
  "password" => "[DB_PASS]",
  "db" => "[DB_NAME]"
);
```

2. Open API project folder:
```
cd blog-posts/api
```

3. Build dependencies:
```
composer install
```

4. Start API local server:
```
php -S 0:9001 -t web/
```

5. Open in web browser:
```
http://localhost:9001
```

6. Modify `API_ENDPOINT` in `blog-posts/src/actions/index.js` to match:
```
http://localhost:9001/api/v1/posts
```

7. Open React project folder in a new terminal:
```
cd blog-posts
```

8. Build dependencies:
```
npm install
```

9. Start local server:
```
npm start
```

10. Open in web browser:
```
http://localhost:8080
```

### API Reference
[reduxposts.herokuapp.com](http://reduxposts.herokuapp.com/)
