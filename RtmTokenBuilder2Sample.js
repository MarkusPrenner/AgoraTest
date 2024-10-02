const RtmTokenBuilder = require("../src/RtmTokenBuilder2").RtmTokenBuilder;
const appId = "c5cb1a94a80844218e4c2448dd3056ca";
const appCertificate = "98053958b5d24800ba4cb3523c6660e6";
const userId = "testuser";
const expirationInSeconds = 3600;

const token = RtmTokenBuilder.buildToken(appId, appCertificate, userId, expirationInSeconds);
console.log(`Rtm Token for user ${userId}:"` + token);