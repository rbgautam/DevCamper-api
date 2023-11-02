const express = require('express');
const router= express.Router();

const {
getBootcamps,
getBootcamp,
createBootcamp,
updateBootcamp,
deleteBootcamp} = require('../controllers/bootcamps')

router.route('/').get(getBootcamps).post(createBootcamp);
// router.route('/').get(getBootcamps) = explicitly included with /:id route
router.route('/:id').get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);


module.exports = router;