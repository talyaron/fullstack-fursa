import accidents from '../model/accidentModel';


exports.getPreviousAccidents = async (req, res) => {
    console.log('get-previous-accidents');
    try {
        const { email } = req.body;
        const _acc = await accidents.find({ "user.email": email });
        res.send({ ok: true, accident: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}
