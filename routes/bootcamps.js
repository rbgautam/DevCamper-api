const express = require('express');
const router= express.Router();

const {
getBootcamps,
getBootcamp,
createBootcamp,
updateBootcamp,
deleteBootcamp} = require('../controllers/bootcamps')


router.route('/').get(getBootcamps)
router.route('/:id').get(getBootcamp);
router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamps).put(updateBootcamp);
router.route('/:id').get(getBootcamps).delete(deleteBootcamp);

module.exports = router;