import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
trim: true,
},
email: {
type: String,
required: true,
unique: true,
trim: true,
lowercase: true,
},
password: {
type: String,
required: true,
},
role: {
type: String,
enum: ['user', 'admin'], 
default: 'user',
},
},
{
timestamps: true, 
}
);

// Compile the schema into a model
const User = mongoose.model('User', userSchema);

export default User;