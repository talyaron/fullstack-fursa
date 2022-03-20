import accidents from '../model/accidentModel';
import Users from '../model/userModel';


exports.getPreviousAccidents = async (req, res) => {
    console.log('get-previous-accidents');
    try {
        const {email} = req.body;
        // const userid=Users.userID;
        // const userEmail="m.zmiro@hotmail.com";
        const filter ={user:{email:email}}
        const _acc = await accidents.find({filter});
     //   await accident.find({_id:id});
     console.log(_acc);
        res.send({ok :true, accident: _acc });
    } catch (error:any) {
        res.send({ok:false, error: error.message});
    }
}
