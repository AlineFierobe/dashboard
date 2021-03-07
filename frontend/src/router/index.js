import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Accueil.vue";

// PROJECTS
import Project from "../components/project/Read.vue";
import newProject from "../components/project/Create.vue";
import updateProject from "../components/project/Update.vue";
import deleteProject from "../components/project/Delete.vue";

// TASKS
import Task from "../components/task/Read.vue";
import newTask from "../components/task/Create.vue";
import updateTask from "../components/task/Update.vue";
import deleteTask from "../components/task/Delete.vue";

// MEETINGS
import Meeting from "../components/meeting/Read.vue";
import newMeeting from "../components/meeting/Create.vue";
import updateMeeting from "../components/meeting/Update.vue";
import deleteMeeting from "../components/meeting/Delete.vue";

// PROFILE
import Profile from "../components/profile/Read.vue";
import newUser from "../components/profile/Create.vue";
import updateProfile from "../components/profile/Update.vue";
import deleteUser from "../components/profile/Delete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // PROJECTS
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
  {
    path: "/newProject",
    name: "newProject",
    component: newProject,
  },
  {
    path: "/updateProject/:id",
    name: "updateProject",
    component: updateProject,
  },
  {
    path: "/deleteProject/:id",
    name: "deleteProject",
    component: deleteProject,
  },
  // TASKS
  {
    path: "/task/:id",
    name: "Task",
    component: Task,
  },
  {
    path: "/newTask",
    name: "newTask",
    component: newTask,
  },
  {
    path: "/updateTask/:id",
    name: "updateTask",
    component: updateTask,
  },
  {
    path: "/deleteTask/:id",
    name: "deleteTask",
    component: deleteTask,
  },
  // MEETINGS
  {
    path: "/meeting/:id",
    name: "Meeting",
    component: Meeting,
  },
  {
    path: "/newMeeting",
    name: "newMeeting",
    component: newMeeting,
  },
  {
    path: "/updateMeeting/:id",
    name: "updateMeeting",
    component: updateMeeting,
  },
  {
    path: "/deleteMeeting/:id",
    name: "deleteMeeting",
    component: deleteMeeting,
  },
  // PROFILE
  {
    path: "profile/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "newUser",
    name: "newUser",
    component: newUser,
  },
  {
    path: "updateProfile/:id",
    name: "updateProfile",
    component: updateProfile,
  },
  {
    path: "deleteUser/:id",
    name: "deleteUser",
    component: deleteUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
