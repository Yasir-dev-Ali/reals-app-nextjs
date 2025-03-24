import  mongoose, { model, models }  from "mongoose";


export const   Vedio_Dimensions = {
    width: 1080,
    height: 720,
    quailty: 1920
}   

export  interface   IVedio{
    title: string,
    description: string,
    image: string,
    thumbnail: string,
    videoUrl: string,
    controls?: boolean,
    transformations:{
        width: number,
        height: number,
        quailty?: number

    },
    _id: mongoose.Types.ObjectId,
    createdAt?: Date,
    updatedAt?: Date,
}
export interface widthVedio{
    width: 1080,
    height: 720,
    quailty:number,
    createdAt?: Date,
    updatedAt?: Date,
    

}  
const   vedioSchema = new mongoose.Schema<IVedio>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    controls:{
        type: Boolean,
        default: true
    },
    transformations: {
        height: {
            type: Number,
            default: Vedio_Dimensions.height
        },
        width: {
            type: Number,
            default: Vedio_Dimensions.width
        },
        quailty: {
            type: Number,
            default: Vedio_Dimensions.quailty
        }
    }

}, {    
    timestamps: true
});

const Vedio =models?.Vedio || model<IVedio>('Vedio', vedioSchema);

export default Vedio;