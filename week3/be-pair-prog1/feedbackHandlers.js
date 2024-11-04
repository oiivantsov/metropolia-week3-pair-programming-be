const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAllFeedbacks();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating } = req.body;
    const newFeedback = Feedback.createFeedback(sender, message, rating);

    if (newFeedback) {
        res.json(newFeedback);
    } else {
        res.status(500);
    }

};

const getFeedbackById = (req, res) => {
    const feedbackId = Number(req.params.feedbackId);

    const response = Feedback.getFeedbackById(feedbackId);
    if (response) {
        res.json(response);
    } else {
        res.status(500);
    }
};

const updateFeedback = (req, res) => {

    const feedbackId = req.params.feedbackId;
    const { sender, message, rating } = req.body;

    const response = Feedback.updateFeedback(feedbackId,
        {
            sender,
            message,
            rating
        }
    );

    if (response) {
        res.json(response);
    } else {
        res.status(500);
    }
};

const deleteFeedback = (req, res) => {

    const feedbackId = req.params.feedbackId;

    const response = Feedback.deleteFeedback(feedbackId);

    if (response) {
        res.json(response);
    } else {
        res.status(500);
    }
};

module.exports = {
    getAllFeedbacks,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback,
};