const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAllTours();
    res.json(tours)
};

const createTour = (req, res) => {
    const { name, info, image, price } = req.body;
    const newTour = Tour.createTour(name, info, image, price);

    if (!newTour) return res.status(500)
    else {
        res.json(newTour)
    }
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId;

    const response = Tour.getTourById(tourId);

    if (!response) return res.status(500)
    else return res.json(response)
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId
    const { name, info, image, price } = req.body;

    const response = Tour.updateTour(tourId, { name, info, image, price })

    if (!response) return res.status(500)
    else return res.json(response)
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId
    const response = Tour.deleteTour(tourId);

    if (!response) return res.status(500)
    else return res.json(response)
};

module.exports = {
    getAllTours,
    getTourById,
    createTour,
    updateTour,
    deleteTour,
};
