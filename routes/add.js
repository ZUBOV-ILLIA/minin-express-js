const { Router } = require('express');
const Course = require('../models/course.js')
const router = Router('../models/course.js');

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const course = new Course(req.body.title, req.body.price, req.body.img);

  course.save();

  res.redirect('/courses');
});

module.exports = router;
