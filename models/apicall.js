// const server = require("../server.js");
// const connection = require("../config/config.js");

// const app = express();
// const server = require ("./server.js")

// API CALL TO VISITOR CENTER (NODE AXIOS)

// module.exports = function(sequelize, DataTypes) {
//   const beachInfo = sequelize.define("beachInfo", {
//     county: DataTypes.STRING,
//     siteName: DataTypes.STRING,
//     address: DataTypes.STRING,
//     latitude: DataTypes.STRING,
//     longitude: DataTypes.STRING,
//     website: DataTypes.STRING,
//     startTime: DataTypes.STRING,
//     endTime: DataTypes.STRING,
//     whatToBring: DataTypes.STRING,
//     organization: DataTypes.STRING,
//     phone: DataTypes.BOOLEAN,
//     email: DataTypes.STRING
//   });
//   return beachInfo;
// };

// .then(response => {
//   console.log(response);
//   console.log(response.data);
//   const beachArr = response.data;
//     for (let index = 0; index < beachArr.length; index++) {
//       const beachData = beachArr[index];
//       const beach = sequelize.define("beachInfo", {

//       });

//     for (let index = 0; index < beachArr.length; index++) {
//       const beachData = beachArr[index];
//       const county = beachData.county_region;
//       const siteName = beachData.site_name;
//       const address = beachData.address;
//       const latitude = beachData.latitude;
//       const longitude = beachData.longitude;
//       const website = beachData.website;
//       const startTime = beachData.start_time;
//       const endTime = beachData.end_time;
//       const toBring = beachData.What_to_bring;
//       const organization = beachData.organization;
//       const phone = beachData.phone;
//       const email = beachData.email;

//     //   connection.query("INSERT INTO beachInfo SET ?", {
//     //     county: county,
//     //     beachName: siteName,
//     //     address: address,
//     //     latitude: latitude,
//     //     longitude: longitude,
//     //     website: website,
//     //     startTime: startTime,
//     //     endTime: endTime,
//     //     whatToBring: toBring,
//     //     organization: organization,
//     //     phone: phone,
//     //     email: email
//     //   });

//     //   console.log("you've done it!");
//     // }
//   })
//   .catch(error => {
//     console.log(error);
// });
