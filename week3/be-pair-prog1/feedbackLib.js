// if (require.main === module) {
//     let result = addOne("John Smith", "message": "Great session on React components! I found the examples very helpful.", 4);
//     console.log(result);
//     console.log("getAll called:", getAll());
//     console.log("findById called:", findById(1));
//     // rest of the tests here
// }

let feedbackArray = [];

let nextId = 0;

function getAllFeedbacks() {
    return feedbackArray;
}

function createFeedback(sender, message, rating) {
    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating, 
    };

    feedbackArray.push(newFeedback);
    return newFeedback;
}

function getFeedbackById(id) {
    const feedback = feedbackArray.find((item) => item.id === Number(id));
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

function updateFeedback(id, updatedFeedback) {

    const feedback = getFeedbackById(id);

    if (feedback) {
        if (feedback.sender) feedback.sender = updatedFeedback.sender;
        if (feedback.message) feedback.message = updatedFeedback.message;
        if (feedback.rating) feedback.rating = updatedFeedback.rating;

        return feedback;

    } else {
        return false;
    }

}

function deleteFeedback(id) {
    const originalLength = feedbackArray.length;
    // Convert `id` to a number to ensure it matches with feedback IDs
    feedbackArray = feedbackArray.filter((item) => item.id !== Number(id));
    // Return true if an item was deleted (i.e., length has changed)
    return feedbackArray.length < originalLength;
}


Feedback = {
    getAllFeedbacks,
    createFeedback,
    getFeedbackById,
    updateFeedback,
    deleteFeedback
};

module.exports = Feedback;