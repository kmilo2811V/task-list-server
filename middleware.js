const bodyParser = require('body-parser');
const Joi = require('joi');

const router = require('express').Router();

router.use(bodyParser.json());

const schema = Joi.object({
 title: Joi.string().required(),
 completed: Joi.boolean().required(),
});

const validateBody = (req, res, next) => {
 const result = schema.validate(req.body);
 if (result.error) {
    return res.status(400).send(result.error.details[0].message);
 }
 next();
};

router.post('/', validateBody, (req, res) => {
 // Crea la tarea y retorna una respuesta adecuada
});

router.put('/:id', validateBody, (req, res) => {
 // Actualiza la tarea y retorna una respuesta adecuada
});

module.exports = router;