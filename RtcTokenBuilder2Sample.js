const RtcTokenBuilder = require('../src/RtcTokenBuilder2').RtcTokenBuilder
const RtcRole = require('../src/RtcTokenBuilder2').Role

const appId = "c5cb1a94a80844218e4c2448dd3056ca";
const appCertificate = "98053958b5d24800ba4cb3523c6660e6";
const channelName = "testchannel";
const uid = "testuser"
const role = RtcRole.PUBLISHER
const expirationInSeconds = 3600

const tokenExpirationInSecond = 3600
const privilegeExpirationInSecond = 3600
// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, tokenExpirationInSecond, privilegeExpirationInSecond)
console.log("Token with int uid: " + tokenA)

// Build token with user account
// const tokenB = RtcTokenBuilder.buildTokenWithUserAccount(appID, appCertificate, channelName, account, role, tokenExpirationInSecond, privilegeExpirationInSecond)
// console.log("Token with user account: " + tokenB)

// const tokenC = RtcTokenBuilder.buildTokenWithUidAndPrivilege(appID, appCertificate, channelName, uid,
//     expirationInSeconds, expirationInSeconds, expirationInSeconds, expirationInSeconds, expirationInSeconds)
// console.log("Token with int uid and privilege:" + tokenC)

// const tokenD = RtcTokenBuilder.BuildTokenWithUserAccountAndPrivilege(appID, appCertificate, channelName, account,
//     expirationInSeconds, expirationInSeconds, expirationInSeconds, expirationInSeconds, expirationInSeconds)
// console.log("Token with user account and privilege:" + tokenD)
