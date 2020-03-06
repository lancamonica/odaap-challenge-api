const { Router } = require("express");
const patientsController = require("./controllers/patientsController");

const routes = Router();

routes.post("/patients", patientsController.store);
routes.get("/patients/", patientsController.index);
routes.get("/patient/:id", patientsController.show);
routes.put("/patient/:id", patientsController.update);
routes.delete("/patient/:id", patientsController.destroy);

module.exports = routes;
