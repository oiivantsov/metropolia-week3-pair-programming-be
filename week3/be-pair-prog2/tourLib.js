const { getTourById, updateTour, deleteTour, createTour } = require("./tourHandlers");

//if (require.main === module) {
//    let result = addOne("7 Days Tour", " Join us for the Best of Helsinki!", "https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
//    console.log(result);
//    console.log("getAll called:", getAll());
//    console.log("findById called:", findById(1));
//    // rest of the tests here
//}

let toursArray = [];
let nextId = 0;

function getAllTours() {
    return toursArray
}

function getTourById(id) {
    const tour = toursArray.find((item) => item.id === Number(id));

    if (!tour) return false
    else return tour;
}

function createTour(name, info, image, price) {
    const newTour = {
        id: nextId++,
        name,
        info,
        image,
        price
    }

    toursArray.push(newTour)
    return newTour;
}

function updateTour(id, updatedTour) {

    const feedback = getFeedbackById(id);

    if (!feedback) return false;
    
    if (tour.sender) tour.sender = updatedTour.sender;
    if (tour.message) tour.message = updatedTour.message;
    if (tour.rating) tour.rating = updatedTour.rating;

    return feedback;
}

function deleteTour(id) {
    const originalLength = toursArray.length;
    toursArray = toursArray.filter((item) => item.id !== Number(id));
    return toursArray.length < originalLength;
}

Tour = {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour
}

module.exports = Tour;