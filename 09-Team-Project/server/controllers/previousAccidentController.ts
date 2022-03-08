import accident from '../model/accidentModel';
import Users from '../model/userModel';

exports.getAllAccidents = async (req, res) => {
    console.log('get-previous-accidents');
    try {
        const  id = req.body;
        const userid=Users.userID;
        const userID=23132132;
        const filter ={id:id}
        const _acc = await accident.findOne({ _id: userID });
     //   await accident.find({_id:id});
        res.send({ok :true, accident: _acc });
    } catch (error:any) {
        res.send({ok:false, error: error.message});
    }
}
