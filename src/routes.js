/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
const handler = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: handler.addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: handler.getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
  },
  {
    method: "POST",
    path: "/notes/{id}",
    handler: handler.editNoteByIdHandler,
  },
];

module.exports = {
  routes,
};
