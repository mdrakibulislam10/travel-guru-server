const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

const allPlaces = require("./data/places.json");
const allHotel = require("./data/hotels.json");

app.get('/', (req, res) => {
    res.send('Hello form travel guru!!!');
});

app.get("/places", (red, res) => {
    res.send(allPlaces);
});

app.get("/places/:id", (req, res) => {
    const id = req.params.id;
    const place = allPlaces.find(p => p.id === id);
    res.send(place);
});

app.get("/hotels", (req, res) => {
    res.send(allHotel);
});

app.get("/hotels/:hotelId", (req, res) => {
    const hotelId = req.params.hotelId;
    const hotels = allHotel.filter(hotel => hotel.hotel_id === hotelId);
    res.send(hotels);
});

app.listen(port, () => {
    console.log(`travel guru listening on port ${port}`);
});