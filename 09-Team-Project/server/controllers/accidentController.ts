
var fs = require("fs");


import Accident from "../model/accidentModel";

exports.getAllAccidents = async (req, res) => {
  console.log("getAllAccidents");
  try {
    const _acc = await Accident.find({});
    res.send({ ok: true, accidents: _acc });
  } catch (error: any) {
    res.send({ ok: false, error: error.message });
  }
};

exports.getAccidentByID = async (req, res) => {
  console.log("getAccidentByID");
  const { id } = req.body;
  try {
    const _acc = await Accident.findOne({ _id: id.accidentId });
    res.send({ ok: true, accident: _acc });
  } catch (error: any) {
    res.send({ ok: false, error: error.message });
  }
};

exports.getAccidenstByUserName = async (req, res) => {
  console.log("getAccidentByUserName");
  const { userName } = req.body;
  console.log(userName);
  try {
    const _acc = await Accident.find({ "user.name": userName });
    // const _acc = await Accident.findOne({ });
    res.send({ ok: true, accidents: _acc });
  } catch (error: any) {
    res.send({ ok: false, error: error.message });
  }
};

exports.getAccidenstByLocation = async (req, res) => {
    const { location } = req.body;
    if (!location) throw new Error("No location in body");
    console.log(location)
    try {
        const _acc = await accident.find({ address: location});
        res.send({ ok: true, accidents: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}

exports.addNewAccident = async (req, res) => {
  console.log("addNewAccident 1");
  const {
    type,
    emergency,
    date,
    address,
    media,
    call,
    description,
    user,
    org,
  } = req.body;
  /*
        type: String,
        emergency : Boolean || null,
        date: String,
        address:String,
        media: [MediaSchema],
        call: Object,
        description: String,
        user: UserSchema,
        org:OrgSchema
    */
  try {
    //save images

    const _acc = await new Accident({
    //   type: "a",
    //   emergency: true,
    //   date: new Date(),
    //   address: "123",
    //   media: {
    //       src: "String",
    //       type: "String"
    //   },
    //   call: "123",
    //   description: "123",
    //   user: {
    //       userID: 23132132,
    //       name: "String",
    //       email: "String",
    //       password: "String",
    //       phone: "String",
    //       location: "String",
    //       gender: "String",
    //   },
    //   org: {}
      type: type,
      emergency: emergency,
      date: date,
      address: address,
      description: description,
      media: media,
      user: user,
      org: org,
    });
    _acc.save().then("accident saved!");
    res.send({accident:_acc})

    // const _acc = await Accident.findOne({ });
  } catch (error: any) {
    console.log("error 2");
    console.log(error);
    res.send({ ok: false, error: error.message });
  }
};
