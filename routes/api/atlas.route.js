var express = require('express')

var router = express.Router()
// Getting the Todo Controller that we just created

var ToDoController = require('C:/Users/Terminus/Desktop/Projects/AtlasBackend/controllers/atlast.controller.js');

// Map each API to the Controller FUnctions

router.get('/', ToDoController.getTodos)

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)


// Export the Router

module.exports = router;