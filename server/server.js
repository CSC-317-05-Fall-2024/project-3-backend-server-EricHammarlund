import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRestaurants, restaurantData } from './data/restaurants.js'; /* Must import data from data directory */
import { getRestaurant } from './data/restaurants.js';
import { backendRouter } from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use("/api", backendRouter);

// set up view engine for ejs template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// paths - using callback function and sendFile
app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, resp) => { // added so that home link in navbar links to '/home', which looks nicer than 'index.hmtl'
    resp.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/attractions", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "attractions.html"));
});

app.get("/newrestaurant", (req, resp) => {
    resp.sendFile(path.join(__dirname, "public", "newRestaurant.html"));
});

// rendering the restaurants page
app.get("/restaurants", (req, resp) => {
    const restaurants = getRestaurants();
    resp.render("restaurants", {restaurants});

});

// get restaurant by id
app.get("/restaurants/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    resp.render("restaurant-details", {restaurant});
});

// Test page - used to test some other styling and formatting. Not exposed to user.
// app.get("/test", (req, resp) => {
//     resp.sendFile(path.join(__dirname, "public", "test.html"));
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
