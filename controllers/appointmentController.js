const Appointment = require('../models/Appointment');

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({ where: { UserId: req.user.id } });
    res.json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { date, description } = req.body;
  try {
    const appointment = await Appointment.create({ date, description, UserId: req.user.id });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
