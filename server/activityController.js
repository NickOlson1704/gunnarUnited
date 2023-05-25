const activitiesData = require('../data/activities');

// Get all activities
const getAllActivities = (req, res) => {
  res.json(activitiesData);
};

// Get a specific activity
const getActivity = (req, res) => {
  const { id } = req.params;
  const activity = activitiesData.find((activity) => activity.id === id);
  
  if (activity) {
    res.json(activity);
  } else {
    res.status(404).json({ error: 'Activity not found' });
  }
};

// Create a new activity
const createActivity = (req, res) => {
  const { title, date, location, description } = req.body;
  const newActivity = { id: Date.now().toString(), title, date, location, description };

  activitiesData.push(newActivity);
  res.status(201).json(newActivity);
};

// Update an existing activity
const updateActivity = (req, res) => {
  const { id } = req.params;
  const { title, date, location, description } = req.body;
  const activity = activitiesData.find((activity) => activity.id === id);
  
  if (activity) {
    activity.title = title || activity.title;
    activity.date = date || activity.date;
    activity.location = location || activity.location;
    activity.description = description || activity.description;

    res.json(activity);
  } else {
    res.status(404).json({ error: 'Activity not found' });
  }
};

// Delete an activity
const deleteActivity = (req, res) => {
  const { id } = req.params;
  const index = activitiesData.findIndex((activity) => activity.id === id);
  
  if (index !== -1) {
    const deletedActivity = activitiesData.splice(index, 1);
    res.json(deletedActivity[0]);
  } else {
    res.status(404).json({ error: 'Activity not found' });
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createActivity,
  updateActivity,
  deleteActivity
};