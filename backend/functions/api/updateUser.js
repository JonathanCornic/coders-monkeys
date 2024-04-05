const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });


/**
 * Update user identication data
 * @param body {String, Object}
 * @return {String} message success | error
 * @forPlay https://us-central1-coders-monkeys-f3a92.cloudfunctions.net/updateUser
 * @Documentation https://firebase.google.com/docs/auth/admin/manage-users?hl=fr&authuser=0#update_a_user
*/

exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      res.status(500).send(error);
    }
  });
});
