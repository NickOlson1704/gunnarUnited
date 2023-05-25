const express = require('express');
const activityHandlers = require('../handlers/activityHandlers');

const router = express.Router();

router.get('/', activityHandlers.getAllActivities);
router.get('/:id', activityHandlers.getActivity);
router.post('/', activityHandlers.createActivity);
router.put('/:id', activityHandlers.updateActivity);
router.delete('/:id', activityHandlers.deleteActivity);

module.exports = router;