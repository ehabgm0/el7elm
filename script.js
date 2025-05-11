const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', UserSchema);

const newUser = new User({ name: 'Ahmed', email: 'ahmed@example.com' });
newUser.save().then(() => console.log('User saved!'));
