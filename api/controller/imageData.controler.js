import fs from 'fs'
import path from 'path'
import imageDataModel from '../Model/imageData.model.js'


export const get = async (req, res) => {
    try {
        const data = await imageDataModel.find({}).sort({ created_at: 1 }).lean().exec();
        return res.json({ data: data, success: true, status: 200 });
    }
    catch (err) {
        console.log("group-get", err)
        return res.json({ success: false, status: 501, err: err, msg: 'Get image data failed.' });
    }
}

export const add = async (req, res) => {
    console.log("heloo")
    var obj = {
        p_image: req.body.p_image,
        img_size: req.body.size,
        img_color: req.body.color,
        img_quantity: req.body.quantity
    }
    const newImageDataModel = new imageDataModel(obj);

    try {
        let result = await newImageDataModel.save();
        res.json({ success: true, status: 200, result: result })
    } catch (err) {

        console.log("err", err)
        return res.json({ success: false, status: 501, msg: 'Error in adding group.' });
    }
}


export const update = async (req, res) => {
    var id = req.body.id;
    if (id === undefined) {
        return res.json({ success: false, status: status.NOTFOUND, msg: 'Id Parameter Not Available' });
    }
    delete req.body.id;
    try {
        let result = await imageDataModel.findOneAndUpdate({ _id: id }, {
            $set: {
                img_size: req.body.img_size,
                img_color: req.body.img_color,
                img_quantity: req.body.img_quantity
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

export const deleteImageData = async (req, res) => {
    try {
        const id = req.query.id;
        if (id === undefined) {
            return res.json({ success: false, status: status.NOTFOUND, msg: "Id parameter not available" });
        }
        let result = await imageDataModel.findOneAndDelete({ _id: id }).lean().exec();
        if (result) {
            res.json({ success: true, status: 200, msg: 'Image Data is Deleted successfully.' });

        } else {
            return res.json({ success: false, err: err, msg: 'Delete Group Message failed.' });

        }

    } catch (err) {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });

    }
}

export const getGroupsById = async (req, res) => {
    try {
        const result = await imageDataModel.aggregate([
            {
                $lookup: {
                    from: 'Prodect_collection',
                    localField: 'p_id',
                    foreignField: '_id',
                    as: 'productData'
                }
            },
            {
                $unwind: '$productData'
            }
        ]);

        res.json({ data: result, success: true });
       
    } catch (err) {
        console.error(err);
        res.json({ success: false, msg: 'Error in getting grouped data.' });
    }
};

      
    // try {
    //     let id = req.body.id;
    //     if (id === undefined) {
    //         return res.json({ success: false, msg: 'Id Parameter Not Available' });
    //     }
    //     const data = await imageDataModel.findOne({ _id: id }).lean().exec();
    //     if(!data){
    //         return res.json({ success: false,  msg: 'Image Data not found with the given ID' });
    //     }
    //     return res.json({ data: data, success: true,  });
    // }
    // catch (err) {
    //     console.log("error", err);
    //     return res.json({ success: false, err: err, msg: 'Get Image Data failed.' });
    // }

