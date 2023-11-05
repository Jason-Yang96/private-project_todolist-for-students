// Install Mongoose
// npm install mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/student_assignment_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TodoSchema = new mongoose.Schema({
  studentId: String,
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);
