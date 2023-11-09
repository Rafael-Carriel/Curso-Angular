"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAuthentication = void 0;
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-api-password');
        resp.json({
            name: dbUser.name,
            email: dbUser.email,
            accessToken: token
        });
    }
    else {
        resp.status(403).json({ message: 'Dados Inválidos.' });
    }
};
exports.handleAuthentication = handleAuthentication;
function isValid(user) {
    console.log("entrou");
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
