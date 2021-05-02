import mongoose from 'mongoose';
import { MONGO_URL } from '../env';

export default const dbconfig = mongoose.connect(MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true
}, () => {
    console.log('db connected')
})
