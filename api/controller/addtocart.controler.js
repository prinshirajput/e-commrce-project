import cardModel from '../Model/card.model.js'



export const save_card_img = async (req, res) => {
    var obj = {
        card_image: req.body.c_image,
        u_id: req.body.u_id
    };
    // console.log(obj);

    try {
        // Check if a document with the same "u_id" already exists
        const existingCard = await cardModel.findOne({ u_id: obj.u_id ,card_image:obj.card_image});
        if (existingCard) {
            // If a document with the same "u_id" exists, handle the case accordingly
            return res.json({ success: false, status: 501, msg: 'A card with this user ID already exists.' });
        }

        // If no existing document found, save the new card
        const cardModelInstance = new cardModel(obj);
        let result = await cardModelInstance.save();

        res.json({ success: true, status: 200, result: result });
    } catch (err) {
        console.error(err);
        return res.json({ success: false, status: 500, msg: 'Internal server error.' });
    }
};

export const get = async (req, res) => {
    try {
        const data = await cardModel.find({}).sort({ created_at: 1 }).lean().exec();
        return res.json({ data: data, success: true, status: 200 });
    }
    catch (err) {
        console.log("group-get", err)
        return res.json({ success: false, status: 501, err: err, msg: 'Get image data failed.' });
    }
}
export const deleteTest = async (req, res) => {
    console.log(req.query)
    try {
        const u_id = req.query.u_id;
         const card_image = req.query.image;

        // Assuming you have a method in your model to find and delete the project
        let result = await cardModel.findOneAndDelete({ u_id, card_image });

        if (result) {
            res.json({ success: true, msg: 'Deleting data is successful.' });
        } else {
            res.json({ success: false, msg: 'data not found.' });
        }
    } catch (err) {
        console.log("err",err);
        return res.json({ success: false, err: err, msg: 'Deleting data failed.' });
    }
};


export const getnumberof_card = async (req, res) => {
    // console.log(req.query)
  
        // const u_id = req.query.u_id;
        //  const card_image = req.query.image;

        // Assuming you have a method in your model to find and delete the project
        let result = await cardModel.find();
console.log(result)
return res.json({ data: result, success: true, status: 200 });
};

