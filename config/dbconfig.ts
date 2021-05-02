import mongoose from 'mongoose';
import { MONGO_URL } from '../env';

const dbconfig = async () => {
    await mongoose.connect(MONGO_URL, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
}

export default dbconfig;
