

import * as functions from 'firebase-functions';




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.webhook = functions.https.onRequest((request, response) => {

    console.log("request.body.result.parameters: ", request.body.result.parameters);
    let params = request.body.result.parameters;

    // let token = request.originalRequest.data.user.accessToken

    switch (request.body.result.action) {
        case 'majors':
            response.send({
                speech:
                    `In Lebanese University we have 5 majors:
    1. Management
    2. Banking and finance
    3. Accounting
    4. Marketing
    5. Management Information system
    do you want to know more about these majors ? `
            });
            break;
        case 'partial':
            response.send({
                speech:
                    ` Partial exam will start on 21 june`
            });
            break;
        default:
            response.send({
                speech: "no action matched in webhook"
            })

    }

});








// var admin = require("firebase-admin");
// admin.initializeApp(functions.config().firebase);
// var firestore= admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



// exports.webhook = functions.https.onRequest((request, response) => {

//     console.log("request.body.result.parameters: ", request.body.result.parameters);

//     let params = request.body.result.parameters;

//  firestore.collection('order').add(params)
// .then(()=> {
//         response.send({

//                 speech: 
//                         `your email address ${ params.email } is saved to firebase database`


//                  });

// })

//  .catch((e=>{

//    console.log("error: ", e);

//         response.send({

//         speech: "something went wrong when writing on database"


//                  });


//  }))




//     });
