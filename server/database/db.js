import mongoose from 'mongoose';



const DBconnection = async () =>{
    const MONODB_URL = `mongodb://Mahendra:MahendraJaiswal@ac-5o1fmyt-shard-00-00.co5rn3f.mongodb.net:27017,ac-5o1fmyt-shard-00-01.co5rn3f.mongodb.net:27017,ac-5o1fmyt-shard-00-02.co5rn3f.mongodb.net:27017/?ssl=true&replicaSet=atlas-rydtug-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URL,{ useNewUrlParser: true});
        console.log('Database Connected Successfully')
    }
    catch(error)
    {
        console.error('Error while connecting with the DataBase' , error.message);
    }
}

export default DBconnection;
