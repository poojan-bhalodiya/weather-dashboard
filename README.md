# Weather DashBoard Using Node.js
This is a weather dashboad application. you have write your city name to check weather and click Get weather button to show the weather for your screen.

you have get the open weather api for this link. go to the website and sing up add api key and api url to your project and run the code.

**https://openweathermap.org/**

### Get weather request 
```http://localhost:8000/```

### How to run this Project

- Install dependency

```npm i``` 

- Run the Project

```npm run dev```


## Packages

| Name             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| axios | ^1.6.7 |
| dotenv | ^16.4.1 |
| express | ^4.18.2 |
| nodemon | ^3.0.2 |


## API Reference

#### Get weathe data

``` GET || http://localhost:8000/weather?city=${city} ```

add to params to city for check weather

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `city`| `string` | **Required**. city of redirect original URL |


## Screenshots

### Weather Dashboard

![](https://res.cloudinary.com/dhntmsget/image/upload/v1706905285/Projects/Weather%20dashboard/Screen%20short/weather%20dashboard.png)
