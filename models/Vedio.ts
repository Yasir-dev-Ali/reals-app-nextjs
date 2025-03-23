import  mongoose    from "mongoose";

export  interface   IVedio{
    title: string,
    description: string,
    image: string,
    thumbnail: string,
    videoUrl: string,
    controls?: boolean,
    transformations?: widthVedio,
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
        type: Object,
        default: {
            width: 1080,
            height: 720,
            quailty: 80
        }
    }

}, {    
    timestamps: true
});

const Vedio = mongoose.models.Vedio || mongoose.model<IVedio>("Vedio", vedioSchema);

export default Vedio;