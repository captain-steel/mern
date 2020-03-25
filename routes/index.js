import express from 'express';
let indexRouter = express.Router();

indexRouter.get('/', function (req, res, next) {
  res.send({
    name: 'MongoDB',
    cookies: req.cookies
  });
});

export default indexRouter;
