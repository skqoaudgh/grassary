import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
	id: { type: String, unique: true, required: true },
	email: { type: String, required: true },
	name: { type: String, required: true },
	picture: String,
	date: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);
