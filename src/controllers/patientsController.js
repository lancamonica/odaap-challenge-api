const Patient = require("../models/patient");

module.exports = {
  async store(req, res) {
    const { name, age, city, state } = req.body;

    const createdAt = new Date();

    const patient = await Patient.create({
      name: name.trim(),
      age: age.trim(),
      city: city.trim(),
      state: state.trim(),
      created_at: createdAt
    });
    return res.json(patient);
  },

  async index(req, res) {
    const patients = await Patient.find();
    return res.json(patients);
  },

  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.findOne({ _id: id });
    return res.json(patient);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, age, city, state } = req.body;

    const updatedAt = new Date();

    await Patient.updateOne(
      { _id: id },
      {
        name: name.trim(),
        age,
        city: city.trim(),
        state: state.trim(),
        updated_at: updatedAt
      }
    );
    return res.json({
      _id: id,
      name,
      age,
      city,
      state
    });
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Patient.deleteOne({ _id: id });
    return res.json({ status: "deleted ok" });
  }
};
