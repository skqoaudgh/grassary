import mongoose from 'mongoose';

const { Schema } = mongoose;

const DiarySchema = new Schema({
	userId: { type: String, required: true },
	content: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

export default mongoose.model('Diary', DiarySchema);
