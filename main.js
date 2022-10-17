const puppeteer = require('puppeteer');

const ans = require("./codes");

const loginURL = "https://www.hackerrank.com/auth/login";

const uname = "mount7788"
const pwd = "@naman2001N"

let browserOpen = puppeteer.launch({
    headless: false,

    args: ['--start-maximized'],

    defaultViewport: null
});
let page;
browserOpen.then(function (browser) {


    let browserOpenPromise = browser.newPage();
    return browserOpenPromise;



}).then(function (newTab) {

    page = newTab;

    let hackerRank = page.goto(loginURL);

    return hackerRank;



}).then(function () {

    let emailisEnter = page.type("input[type='text']", uname, {
        delay: 100
    });
    return emailisEnter
}).then(function () {

    let pwdisEnter = page.type("input[type='password']", pwd, {
        delay: 100
    });
    return pwdisEnter


    //input[type="text"]

    //input[type="password"]button[type='button']

    //button[type="button"]
}).then(function () {

    //let loginEnter=page.click("button[type='button']");
    let loginEnterp = page.click("button[data-analytics='LoginPassword']", {
        delay: 50
    });
    return loginEnterp;
}).then(function () {

    let algoPage = waitAndClick("div[data-automation='algorithms']", page);

    // page.click("div[data-automation='algorithms']",{delay:50});
    return algoPage;


}).then(function () {

    let checkWarm = waitAndClick("input[value='warmup']", page);
    return checkWarm;
}).then(function () {

    let wait3Sec = page.waitFor(5000);
    return wait3Sec;
}).then(function () {


    // document.querySelector $  $$ All

    let allChallenge = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {
        delay: 50
    });
    return allChallenge;

}).then(function (questArr) {

    console.log(questArr.length);

    let questionWillSolved = questionSolver(page, questArr[2], ans.answers[0]);

    return questionWillSolved;



}).catch(function (err) {
    console.log(err);
});







function waitAndClick(selector, cpage) {

    return new Promise(function (resolve, reject) {

        let waitForModule = cpage.waitForSelector(selector);
        waitForModule.then(function () {

            let clickModel = cpage.click(selector);
            return clickModel;
        }).then(function () {

            resolve();
        }).catch(function (err) {

            reject();
        })


    })



}


function questionSolver(page, question, answer) {


    return new Promise(function (resolve, reject) {


        let clickQue = question.click();
        clickQue.then(function () {

            let textAr = waitAndClick(".monaco-editor.no-user-select.vs", page);
            return textAr



        }).then(function () {

            return waitAndClick(".checkbox-input", page);


        }).then(function () {

            return page.waitForSelector("textarea.custominput", page);
        }).then(function () {

            return page.type('textarea.custominput', answer, {
                delay: 5
            })


        }).then(function () {

            let dctrlPress = page.keyboard.down('Control');
            return dctrlPress;
        }).then(function () {

            let aPress = page.keyboard.press('A', {
                delay: 100
            });
            return aPress;
        }).then(function () {

            let xPress = page.keyboard.press('X', {
                delay: 100
            });
            return xPress;
        }).then(function () {

            let cunPress = page.keyboard.up('Control');
            return cunPress;
        }).then(function () {

            let mtextAr = waitAndClick(".monaco-editor.no-user-select.vs", page);
            return mtextAr;
        }).then(function () {

            let ctrlPress = page.keyboard.down('Control');
            return ctrlPress;
        }).then(function () {

            let aPress = page.keyboard.press('A', {
                delay: 100
            });
            return aPress;
        }).then(function () {

            let vPress = page.keyboard.press('V', {
                delay: 100
            });
            return vPress;
        }).then(function () {

            let dctrlPress = page.keyboard.up('Control');
            return dctrlPress;
        }).then(function () {

            return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled", page);
        })
    })







}