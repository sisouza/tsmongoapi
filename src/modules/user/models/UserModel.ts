import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
    fullname: string;
    nickname: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    timestamp: {createdAt: true, updatedAt: true}
  
});

const User = mongoose.model<UserInterface>("User", UserSchema);
export default User;