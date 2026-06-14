const bookingModel = require("../models/bookingModel");

const addBooking = (req, res) => {
  bookingModel.addBooking(req.body, res);
};

const getAllBookings = (req, res) => {
  bookingModel.getAllBookings(res);
};

const deleteBooking = (req, res) => {
  bookingModel.deleteBooking(req.params.id, res);
};

const updateBooking = (req, res) => {

  bookingModel.updateBooking(req.params.id, data, res);
};

module.exports = { addBooking, getAllBookings, deleteBooking, updateBooking };
