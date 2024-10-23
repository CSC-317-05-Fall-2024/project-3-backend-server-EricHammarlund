// Fill this in
let restaurantData = [
    {
        id: 0,
        name: "Münstermanns Kontor",
        address: "Hohe Straße 11, Düsseldorf 40213, Germany",
        phone: "(+49) 211 1300416",
        image: "images/restaurant1.png",
    },
    {
        id: 1,
        name: "The Dutchy",
        address: "Königsallee 11, Düsseldorf 40212, Germany",
        phone: "(+49) 211 16090500",
        image: "images/restaurant2.png",
    },
    {
        id: 2,
        name: "Nagaya",
        address: "Klosterstraße 42, Düsseldorf 40211, Germany",
        phone: "(+49) 211 8639636",
        image: "images/restaurant3.png",
    },
    {
        id: 3,
        name: "Konditorei Heinemann",
        address: "Martin-Luther-Platz 32, Düsseldorf 40212, Germany",
        phone: "(+49) 211 132535",
        image: "images/restaurant4.png",
    },
    {
        id: 4,
        name: "Im Schiffchen",
        address: "Kaiserswerther Markt 9, Düsseldorf 40489, Germany",
        phone: "(+49) 211 1489800",
        image: "images/restaurant5.png",
    },
    {
        id: 5,
        name: "Rubens",
        address: "Kaiserstraße 5, Düsseldorf 40210, Germany",
        phone: "(+49) 211 15859800",
        image: "images/restaurant6.png",
    },
    {
        id: 6,
        name: "Takumi",
        address: "Immermannstraße 28, Düsseldorf 40210, Germany",
        phone: "(+49) 211 1793308",
        image: "images/restaurant7.png",
    },
    {
        id: 7,
        name: "Düsseldorfer Gulaschkanone Dauser",
        address: "Carlsplatz, Düsselodrf 40213, Germamy",
        phone: "",
        image: "images/restaurant8.png",
    },
    {
        id: 8,
        name: "Berliner Imbiss Klemensplatz",
        address: "Klemenspl. 9, Düsseldorf 40489, Germany",
        phone: "",
        image: "images/restaurant9.png",
    },
];

let lastId = restaurantData.length - 1; // I adjusted this because my IDs start from 0 and .length for n elements will return n, however the last ID is actually n-1 (prior to adding elements)

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id === id); // using .find on restaurantData and returning element whose id matches the passed id
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const newRestaurantObject = {   // notation used in class demo
        id: getNextId(),
        ...newRestaurant            // used in in-class demo
    }
    restaurantData.push(newRestaurantObject);   // push new restaurant element to restaurantData
    return newRestaurantObject;     // return the new object after updating array of restaurants
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id); // use find function to find the restaurant entry to delete based on id
    if (!restaurantToDelete) {  // check if restaurant with passed id is present in array
        throw Error(`restaurant ${id} not found.`);
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id); // filter as done in class demo (i.e. update restaurantData to only contain elements that do not match the restaurant to be deleted)
    return restaurantToDelete;
};

export { restaurantData, getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };   // must export to use in other files