const activityController = require('../controllers/activityController');

module.exports = {
  getAllActivities: activityController.getAllActivities,
  getActivity: activityController.getActivity,
  createActivity: activityController.createActivity,
  updateActivity: activityController.updateActivity,
  deleteActivity: activityController.deleteActivity
};