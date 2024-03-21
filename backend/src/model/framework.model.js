import mongoose , {Schema} from "mongoose";

const frameWorkSchema = new Schema(
    {
        name : {
            type : String,
            required  : true,
        } ,
        fileNames : {
            type : [String],
            required  : true
        },
        language : {
            type : String,
            required : true
        },
        buildtool : {
            type :[ String]
        }
    } ,
    {
        timestamps : true
    }
)

const Framework = mongoose.model("Framework" , frameWorkSchema);

export default Framework ;