// link to back end
const host = "http://localhost:8888/webspacevuejs/dashboard/backend";

export default {
  // all programs needed
  // user
  listUsers: host + "/lists/listUsers.php",
  getUser: host + "/get/getUser.php",
  newUser: host + "/crud/user/createUser.php",
  updateUser: host + "/crud/user/updateUser.php",
  deleteUser: host + "/crud/user/deleteUser.php",

  // project
  listProjects: host + "/lists/listProjects.php",
  getProject: host + "/get/getProject.php",
  newProject: host + "/crud/project/createProject.php",
  updateProject: host + "/crud/project/updateProject.php",
  deleteProject: host + "/crud/project/deleteProject.php",

  // task
  listTasks: host + "/lists/listTasks.php",
  getTask: host + "/get/getTask.php",
  newTask: host + "/crud/task/createTask.php",
  updateTask: host + "/crud/task/updateTask.php",
  deleteTask: host + "/crud/task/deleteTask.php",

  // meeting
  listMeetings: host + "/lists/listMeetings.php",
  getMeeting: host + "/get/getMeeting.php",
  newMeeting: host + "/crud/meeting/createMeeting.php",
  updateMeeting: host + "/crud/meeting/updateMeeting.php",
  deleteMeeting: host + "/crud/meeting/deleteMeeting.php",

  // status
  listStatus: host + "/lists/listStatus.php",
  getStatus: host + "/get/getStatus.php",
};
