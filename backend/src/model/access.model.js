import mongoose , {Schema} from "mongoose";

const accessTokenSchema = new Schema(
    {
        accessToken : {
            type : String,
            required : true
        },
        githubUserId : {
            type : Number,
            required: true
        },
        githubUserName : {
            type : String,
            required : true,
            unique: true
        }

    },
    {
        timestamps: true
    }
)

const accessToken = mongoose.model("accessTokenModel" , accessTokenSchema);

export default accessToken;