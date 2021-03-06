/* 
    FakeLocation-Server
    File: core.js
    Description: Core code to simulate the server response.
    Author: BobH
    Time: 2022-5-11
    A free and open source api server for app "Fake Location @ 1.3.0.2"
*/

const logger = require('./Logger');
const recommandedVersion = "1.3.0.2";
const fs = require('fs');
const path = require('path');

// enable this so that when there's a login request, the server will check users.json and verify the password
const UseVerification = false;

const sharedToken = "T_CrackedByBobH233"; //do not change this or you can't use FakeLocation!!
const sharedKey = "UsrTjEVxwRaQsvV5hD8I3Db8zrkjuavD/O8hJcVLUOkDimJc6ShgOQEzV5srpEPcOL63J2chFQA=";
const sharedUserId = "BobH233LoveLerist";

function Init(){
    let usersConfigPath = "";
    //TODO: support specific user to login
}

function login(reqBody, res){
    let appVersion = reqBody['versionName'];
    if(appVersion != recommandedVersion){
        logger.LogWarn("Login request shows the version of the app is" + appVersion + ". However, version " + recommandedVersion + " is recommanded.");
    }
    let username = reqBody['loginName'];
    let password = reqBody['loginPwd'];
    logger.LogInfo("[ device: "+ reqBody.deviceModel + " ] Username = " + username + ", password = " + password + " login!");
    if(!UseVerification || true){
        //TODO: support specific user to login
        let retPayload = {
            "body": {
                "regtime": Date.now() - 1000 * 60 * 60,
                "proindate": Date.now() + 1000 * 60 * 60 * 24 * 365,
                "createTime": Date.now() - 1000 * 60 * 60 - 1,
                "loginType": "email",
                "loginName": "BobH" + "Crack",
                "updateTime": 0,
                "type": 1,
                "userId": sharedUserId,
                "key": sharedKey,
                "token": sharedToken
            },
            "code": 200,
            "returnTime": Date.now(),
            "success": true
        };
        res.send(JSON.stringify(retPayload));
    }
}

function checkExist(reqBody, res){
    logger.LogInfo("checkExist request.");
    let retPayload = {
        "body": true,
        "code": 200,
        "returnTime": Date.now(),
        "success": true
    };
    res.send(JSON.stringify(retPayload));
}

function getNotices(reqBody, res){
    logger.LogInfo("getNotices request.");
    let retPayload = [
        {
            "content": "<p><strong>?????????BobH?????????FakeLocationApp???????????????????????????</strong></p>\r\n\r\n<p><strong>????????????????????????????????????????????????????????????????????????</strong></p>\r\n\r\n",
            "createTime": 0,
            "flavor": "*",
            "id": "00008",
            "isAvailable": true,
            "isNeedAgree": true,
            "language": "*",
            "needAgree": true,
            "title": "????????????",
            "type": "text",
            "weight": 100001
        }
    ];
    res.send(JSON.stringify(retPayload));
}

function getAds(reqBody, res){
    logger.LogInfo("getAds request.");
    let retPayload = [
        {
            "available": true,
            "createTime": 0,
            "intervalTime": 30000,
            "isAvailable": true,
            "isRandom": false,
            "language": "*",
            "provider": "BobH",
            "random": false,
            "texts": "??????????????????????????????????????????????????????????????????????????????????????????",
            "urls": "#",
            "weight": 3
        },
        {
            "available": true,
            "createTime": 0,
            "intervalTime": 16000,
            "isAvailable": true,
            "isRandom": false,
            "language": "*",
            "provider": "BobH",
            "random": false,
            "texts": "?????????????????????????????????????????????????????????????????????????????????????????????",
            "urls": "#",
            "weight": 2
        }
    ];
    res.send(JSON.stringify(retPayload));
}

function getRenewalGoodsList(reqBody, res){
    logger.LogInfo("getRenewalGoodsList request.");
    let retPayload = {
        "body": [
            {
                "createTime": 0,
                "description": "",
                "id": "0011",
                "isAvailable": 1,
                "locale": "*",
                "name": "?????????????????????",
                "price": 0,
                "priceUnit": "??",
                "recommend": "BobH",
                "updateTime": 0,
                "value": 30,
                "weight": 4
            }
        ],
        "code": 200,
        "returnTime": Date.now(),
        "success": true
    };
    res.send(JSON.stringify(retPayload));
}

function getAppConfigs(reqBody, res){
    logger.LogInfo("getAppConfigs request.");
    // allow all apps to be simulated
    let retPayload = {
        "body": {
            "createTime": Date.now(),
            "disabledApps": [
    
            ],
            "disabledFuncs": [
    
            ],
            "disabledInfos": [
                
            ],
            "isAllowRun": 1,
            "isAvailable": 1,
            "notice": "",
            "updateTime": 0
        },
        "code": 200,
        "returnTime": Date.now(),
        "success": true
    };
    res.send(JSON.stringify(retPayload));
}

function checkApkUpdate(reqBody, res){
    logger.LogInfo("checkApkUpdate request.");
    let retPayload = {
        "code": parseInt(reqBody.versionCode),
        "message": "??????",
        "returnTime": Date.now(),
        "success": true
    };
    res.send(JSON.stringify(retPayload));
}
function userget(reqBody, res){
    logger.LogInfo("userget request.");
    let retPayload = {
        "body": {
            "regtime": Date.now() - 1000 * 60 * 60,
            "proindate": Date.now() + 1000 * 60 * 60 * 24 * 365,
            "createTime": Date.now() - 1000 * 60 * 60 - 1,
            "loginType": "email",
            "loginName": "BobH" + "Crack",
            "updateTime": 0,
            "type": 1,
            "key": sharedKey,
            "token": sharedToken
        },
        "code": 200,
        "returnTime": Date.now(),
        "success": true
    }
    res.send(JSON.stringify(retPayload));
}


module.exports = { login, Init, checkExist, getNotices, getAds, getRenewalGoodsList, getAppConfigs, checkApkUpdate, userget };