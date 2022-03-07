import accident from '../model/accidentModel';

exports.getAllAccidents = async (req, res) => {
    console.log('getAllAccidents');
    try {
        await accident.find({ });
        res.send({ok :true});
    } catch (error:any) {
        res.send({ok:false, error: error.message});
    }
}