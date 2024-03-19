import mongoose , {Schema} from "mongoose";

const frameWorkSchema = new Schema(
    {
        name : {
            type : String,
            required  : true,
            unique : true
        } ,
        fileNames : {
            type : [String],
            required  : true
        }
    } ,
    {
        timestamps : true
    }
)

const Framework = mongoose.model("Framework" , frameWorkSchema);

export default Framework ;