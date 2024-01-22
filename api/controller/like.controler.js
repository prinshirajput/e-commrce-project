import imageDataModel from '../Model/like.model.js'

export const add = async (req, res) => {
    var obj = {
        like: req.body.like,
        image:req.body.image,
    u_id:req.body.u_id
    }
   
    try {
        // Check if a document with the same "u_id" already exists
        const likedata = await imageDataModel.findOne({ u_id: obj.u_id ,image:obj.image});
        if (likedata) {
            // If a document with the same "u_id" exists, handle the case accordingly
            return res.json({ success: false, status: 501, msg: ' this user ID already exists.' });
        }

        // If no existing document found, save the new card
        const imageDataModelInstance = new imageDataModel(obj);
        let result = await imageDataModelInstance.save();

        res.json({ success: true, status: 200, result: result });
    } catch (err) {
        console.error(err);
        return res.json({ success: false, status: 500, msg: 'Internal server error.' });
    
    }
}

export const get = async (req, res) => {
    
    try {
        const u_id=req.params.u_id
        const data = await imageDataModel.find({u_id}).sort({ created_at: 1 }).lean().exec();
        return res.json({ data: data, success: true, status: 200 });
    }
    catch (err) {
        console.log("group-get", err)
        return res.json({ success: false, status: 501, err: err, msg: 'Get image data failed.' });
    }
}


export const update = async (req, res) => {
    var id = req.body.id;
    try {
        let result = await imageDataModel.findOneAndUpdate({ _id: id }, {
            $set: {
                like: req.body.like,
                image: req.body.image
            }
        }).lean().exec();
        if (result) {
            res.json({ success: true, msg: 'Image Data is update successful' })
        }
        else {
            res.json({ success: false, msg: 'Image Data id not found' })
        }
    }
    catch (err) {
        res.json({ success: false, msg: 'update Image Data failed' })


    }
}