import accident from '../model/accidentModel';
import Users from '../model/userModel';

exports.getAllAccidents = async (req, res) => {
    console.log('get-previous-accidents');
    try {
        const  id = req.body;
        const userid=Users.userID;
        const filter ={id:id}
  
        await accident.find({_id:id});
        res.send({ok :true});
    } catch (error:any) {
        res.send({ok:false, error: error.message});
    }
}