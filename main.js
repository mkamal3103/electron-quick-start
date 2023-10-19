// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
var CryptoJS = require("crypto-js");
const path = require('node:path')
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)
var {appendFileSync} = require('fs'); //
const { Console } = require('node:console');
// var appendFileSync = 
// import { appendFileSync } from "fs";


const DeviceData = [
  ["100000", "C2B9C3BCC382C388C2B02F1FC2A9C389"],
  ["100001", "54CB86E28099C2B7C38C57C3961840C2"],
  ["100002", "A2C38744C592C28F5E15C3BCC2B622C2"],
  ["100003", "ABC2B7C3834D04C3BC7C0D0A7AC28F23"],
  ["100004", "C38DC290C5BD2E4F6E48734D4DE282AC"],
  ["100005", "C3BBC2AB797AC385632BC2AC50C3BEC3"],
  ["100006", "9506C2BAC3BDC38F511CC593C3B671C2"],
  ["100007", "BCC2AEC2B5C2B93A13C2B045C2B7C384"],
  ["100008", "C2AAC3B6C395042E264F3EC38FC5B8C3"],
  ["100009", "A97074C389C3BAC3AE38C38B094826E2"],
  ["100010", "8094C3B9C2AC105906C2A467C5A153C3"],
  ["100011", "A5C2B97DC28F16C3862111C2A3C28D09"],
  ["100012", "C380C38267C3BF0CC3BFC39EC3AFC38A"],
  ["100013", "1DE280A0C2A26F58C2A3C39404734FC3"],
  ["100014", "9618563E68212DC38FC5A1C2B77502C3"],
  ["100015", "AB6DC2AC3B25C2AFC3AC67C2A3C3807A"],
  ["100016", "7D55E280B9C2A67F20E2809D59CB9CC3"],
  ["100017", "98CB8613555408753CC29D1F2E1AC3A6"],
  ["100018", "C392C28F42C398C3B2C3A1C29D44C38B"],
  ["100019", "17041FC389C2ADC3BF08442F20E2809A"],
  ["100020", "4431216E5CE2809336C3A946C5BEC396"], 
  ["100021", "6AC38E4139C2A4C2BD5605C5BEE2809E"],
  ["100022", "396AC39CC2A22BC39F25C3B0C2A94B09"],
  ["100023", "C5B8E2809CE280A20D0A05241204C2A8"],
  ["100024", "C3BD3607C38C3DC392391C54C3A3C2B8"],
  ["100025", "5E4041C3896FC387C2A966C3904C594E"],
  ["100026", "C396C3891FC39908C2BAC3A82DC29013"],
  ["100027", "34C2BB4C43666910C28DC2ADC2B2C2A2"],
  ["100028", "40C3A627622722C5A1534FC383C2B7C3"],
  ["100029", "8815C38EC3A428C2B26EE28093370D0A"],
  ["100030", "C3ABC398312355C3B2C39333C2BD4EC2"],
  ["100031", "90C2B437C3924CC2AB38C3ACC2BC31C3"],
  ["100032", "8A401920C3AEC2AF78C2B3076651343C"],
  ["100033", "E284A23F15C2A60D0A716935211D4670"],
  ["100034", "E280A2C2B9073D20C3BD52C2A725C3B8"],
  ["100035", "C2A3C3ADCB9CC38BC3A8C3AF4B22C2A1"],
  ["100036", "2A6627E280B0C3A5C3B9357373C3A3E2"],
  ["100037", "80B9E280B933E280B9C2A5E28094264C"],
  ["100038", "31142F151766C387C3BA13C3A94EC3AD"],
  ["100039", "0D0AC3B438C2BC10C39FC3BAC2814804"],
  ["100040", "7EE280A2C2AE4137C382C2A5C28DC393"],
  ["100041", "C29D06C38AC2AAC3A4C3A5C384C3B7C2"],
  ["100042", "B9E2809C75E280984DC3B363C2BDCB9C"],
  ["100043", "2FC39126E280987AC39D57C3AEC3B8C3"],
  ["100044", "8C15C5A0C3B0C5BDC2AE5DC2ACC3B7E2"],
  ["100045", "80BA21C2B5C390343CC387C38F1359C3"],
  ["100046", "BE2EC385C2B04EE2809C7620011A253D"],
  ["100047", "27C39D5F331D72314DE280A6C2B26CC2"],
  ["100048", "B2C3A924C3952C31C3B201C2A94BC39A"],
  ["100049", "2936C39C31C39D6328C3BB45C2BC4F25"]
];


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var filepath = "D:\\Workspace\\GitRepositories\\ElectronCryptoClient\\HelloWorld.txt";
var key = CryptoJS.enc.Hex.parse("a5c2b97dc28f16c3862111c2a3c28d09");

var iv = CryptoJS.enc.Hex.parse("31303030313131323130323330393030");

var testMessage = "dd0a0646844025a2c48bdb6f8cdb983a82e421773540157ca4c93a497f07a426";

const MAIN_SEARCH_STRING = "EnergieAG";
function ascii_to_hexa(str) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}

const LogsSelector = 0 // 0 -> My Logs, 1 -> Client Logs

class Contact {
    constructor(topic = "", stationNumber="", meterNumber="", data="") {
        this.topic = topic;
        this.stationNumber = stationNumber;
        this.meterNumber = meterNumber;
        this.data = data;
    }
    saveAsCSV() {
        const csv = `${this.topic},${this.stationNumber},${this.meterNumber},${this.data}\n`;
        try {
            if (LogsSelector)
              appendFileSync("./dataClientLogs.csv", csv);
            else
              appendFileSync("./dataMyLogs.csv", csv);
          } catch (err) {
            console.error(err);
        }
    }
}

// const startApp = () => {
//     const contact1 = new Contact("Bill", "+00123456789", "bill@codingthesmartway.com");
//     contact1.saveAsCSV();

//     const contact2 = new Contact("Steve", "+00987654321", "steve@codingthesmartway.com");
//     contact2.saveAsCSV();
// }

function extractDataFromMyLogs(dataLogs) {
  // console.log("The file content is : " + data);
  var totalRecords = 0;
  var failedRecords = 0;
  var theString = dataLogs.split("\n");
  // console.log("Data present: " + (theString.length - 1));
  let deviceNumber = 0;
  var mytopics;
  let NonEncryptData = 0;
  for (i = 0; i < theString.length; i++) {
    
    var str = theString[i];
    /***************************************  BC660K Logs *****************************************/
    // console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    if (str.includes("+QMTRECV:")) {
      
      var newStr = str.split(",");

      var tempstrsub = newStr[2];
      var strsub = tempstrsub.replaceAll("\"", "");

      mytopics = strsub.split("/");

      let l = 0;
      for (l = 0; l < DeviceData.length; l++) {
        if (DeviceData[l][0] == mytopics[2]) {
          deviceNumber = l;
          console.log("Data is of Device nUmber " + l);
          break;
        }
      }
      if (l >= DeviceData.length) {
        console.log("The device not found: " + l); 
        console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
        continue;
      }

      var tempstrsub1 = newStr[3];
      var strsub1 = tempstrsub1.replaceAll("\"", "");

      var realData;
      let finalData;
      if (/*DeviceData[deviceNumber][1].includes("None")*/ strsub1.includes(";") 
                                                          || strsub1.includes(".") 
                                                          || strsub1.includes(",") 
                                                          // || strsub1.includes("H") 
                                                          // || strsub1.includes("F")
                                                          || strsub1.includes(":")) {
        if (mytopics[1].includes("config")) {
          let tempstrsub2 = newStr[4];
          finalData = tempstrsub2.replaceAll("\"", "");
          NonEncryptData = 0;
          console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
          continue;
        }
        else {
          finalData = strsub1;
          NonEncryptData = 1;
        }
      }
      else {
        NonEncryptData = 0;
        const myIV = strsub1.substring(0, 16);
        var tempMessage = strsub1.substring(16);
        if(tempMessage.includes(".") || tempMessage.includes(";") || tempMessage.includes("H")) {
          console.log("Message is not encrypted: " + tempMessage);
          console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
          continue;
        }
        const tempIV = ascii_to_hexa(myIV);
        var MainIV = CryptoJS.enc.Hex.parse(tempIV);

        var MainKey = CryptoJS.enc.Hex.parse(DeviceData[deviceNumber][1]);

        totalRecords++;
        realData = decryptData(tempMessage, MainKey, MainIV);
        if (realData == undefined) continue;
        if (mytopics[1].includes("data")) {
          finalData = DeviceData[deviceNumber][0] + ";" + myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
        }
        else if (mytopics[1].includes("debug")) {
          finalData = myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
        }
      }
      let extData = finalData.split("\n");
      for (m = 0; m < extData.length; m++) {
        const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), extData[m]);
        contact1.saveAsCSV();          
      }  
    }
    else {
      if (NonEncryptData) {

        if (str.includes("]")) 
        {
          let finalData;
          let newStr = str.split("]");
          let finalStr = newStr[1];

          if (mytopics[1].includes("data")) {
            if (finalStr.includes(DeviceData[deviceNumber][0])) {
              finalData = finalStr.replaceAll("\"", "");
            }
            else continue;  
          }
          else {
            if (mytopics[1].includes("debug")) {
              if (finalStr.includes("LVL") && finalStr.includes("ERR")) {
                finalData = finalStr.replaceAll("\"", "");
              }
              else continue;
            }  
            else continue;
          }
          const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), finalData);
          contact1.saveAsCSV();  
        }
        else 
        {
          NonEncryptData = 0;
        }
      }
      else {
          NonEncryptData = 0;
      }
    }
  }
  console.log("Records Failed: " + failedRecords + " / " + totalRecords);
}


function extractDataFromClientLogs(dataLogs) {
    // console.log("The file content is : " + data);
    var totalRecords = 0;
    var failedRecords = 0;
    var theString = dataLogs.split("\n");
    // console.log("Data present: " + (theString.length - 1));
    let deviceNumber = 0;
    var mytopics;
    let NonEncryptData = 0;
    for (i = 0; i < theString.length; i++) {
      
      var str = theString[i];
      /***************************************  ENERGIE AG Logs *****************************************/
      // console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
      // if (str.includes("+QMTRECV:")) {
      if (str.includes(MAIN_SEARCH_STRING)) {
          
        var newStr = str.split(" ");

        // var tempstrsub = newStr[2];
        // var strsub = tempstrsub.replaceAll("\"", "");
        var strsub = newStr[0];

        mytopics = strsub.split("/");

        let l = 0;
        for (l = 0; l < DeviceData.length; l++) {
          if (DeviceData[l][0] == mytopics[2]) {
            deviceNumber = l;
            console.log("Data is of Device nUmber " + l);
            break;
          }
        }
        if (l >= DeviceData.length) {
          console.log("The device not found: " + l); 
          console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
          continue;
        }

        // var tempstrsub1 = newStr[3];
        // var strsub1 = tempstrsub1.replaceAll("\"", "");
        var strsub1 = newStr[1];

        var realData;
        let finalData;
        if (DeviceData[deviceNumber][1].includes("None")) {
          if (mytopics[1].includes("config")) {
            // let tempstrsub2 = newStr[4];
            // finalData = tempstrsub2.replaceAll("\"", "");
            finalData = strsub1;
            NonEncryptData = 0;
            console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
            continue;
          }
          else {
            finalData = strsub1;
            NonEncryptData = 1;
          }
        }
        else {
          NonEncryptData = 0;
          const myIV = strsub1.substring(0, 16);
          var tempMessage = strsub1.substring(16);
          if(tempMessage.includes(".") || tempMessage.includes(";") || tempMessage.includes("H")) {
            console.log("Message is not encrypted: " + tempMessage);
            console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
            continue;
          }
          const tempIV = ascii_to_hexa(myIV);
          var MainIV = CryptoJS.enc.Hex.parse(tempIV);

          var MainKey = CryptoJS.enc.Hex.parse(DeviceData[deviceNumber][1]);
  
          totalRecords++;
          realData = decryptData(tempMessage, MainKey, MainIV);
          if (realData == undefined) continue;
          if (mytopics[1].includes("data")) {
            finalData = DeviceData[deviceNumber][0] + ";" + myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
          }
          else if (mytopics[1].includes("debug")) {
            finalData = myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
          }
        }
        let extData = finalData.split("\n");
        for (m = 0; m < extData.length; m++) {
          const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), extData[m]);
          contact1.saveAsCSV();          
        }  
      }
      else {
        if (NonEncryptData) {

          // if (str.includes("]")) 
          {
            let finalData;
            // let newStr = str.split("]");
            // let finalStr = newStr[1];
            // let newStr = str.split("]");
            let finalStr = str;

            if (mytopics[1].includes("data")) {
              if (finalStr.includes(DeviceData[deviceNumber][0])) {
                // finalData = finalStr.replaceAll("\"", "");
                finalData = finalStr;
              }
              else continue;  
            }
            else {
              if (mytopics[1].includes("debug")) {
                if (finalStr.includes("LVL") && finalStr.includes("ERR")) {
                  // finalData = finalStr.replaceAll("\"", "");
                  finalData = finalStr;
                }
                else continue;
              }  
              else continue;
            }
            const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), finalData);
            contact1.saveAsCSV();  
          }
          // else 
          {
            // NonEncryptData = 0;
          }
        }
        else {
            NonEncryptData = 0;
        }
      }
    }
    console.log("Records Failed: " + failedRecords + " / " + totalRecords);
}

fs.readFile(filepath, 'utf-8', (err, data) => {
    if(err){
      console.log("An error ocurred reading the file :" + err.message);
        return;
    }
    
    /***************************************  ENERGIE AG Logs *****************************************/
    if (LogsSelector)
      extractDataFromClientLogs(data);

    /***************************************  BC660K Logs *****************************************/
    else
      extractDataFromMyLogs(data);


    // console.log("The file content is : " + data);

    // var totalRecords = 0;
    // var failedRecords = 0;
    // var theString = data.split("\n");
    // // console.log("Data present: " + (theString.length - 1));
    // let deviceNumber = 0;
    // var mytopics;
    // let NonEncryptData = 0;
    // for (i = 0; i < theString.length; i++) {
      
    //   var str = theString[i];
    //   /***************************************  ENERGIE AG Logs *****************************************/
    //   // // console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //   // // if (str.includes("+QMTRECV:")) {
    //   // if (str.includes(MAIN_SEARCH_STRING)) {
          
    //   //   var newStr = str.split(" ");

    //   //   // var tempstrsub = newStr[2];
    //   //   // var strsub = tempstrsub.replaceAll("\"", "");
    //   //   var strsub = newStr[0];

    //   //   mytopics = strsub.split("/");

    //   //   let l = 0;
    //   //   for (l = 0; l < DeviceData.length; l++) {
    //   //     if (DeviceData[l][0] == mytopics[2]) {
    //   //       deviceNumber = l;
    //   //       console.log("Data is of Device nUmber " + l);
    //   //       break;
    //   //     }
    //   //   }
    //   //   if (l >= DeviceData.length) {
    //   //     console.log("The device not found: " + l); 
    //   //     console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //   //     continue;
    //   //   }

    //   //   // var tempstrsub1 = newStr[3];
    //   //   // var strsub1 = tempstrsub1.replaceAll("\"", "");
    //   //   var strsub1 = newStr[1];

    //   //   var realData;
    //   //   let finalData;
    //   //   if (DeviceData[deviceNumber][1].includes("None")) {
    //   //     if (mytopics[1].includes("config")) {
    //   //       // let tempstrsub2 = newStr[4];
    //   //       // finalData = tempstrsub2.replaceAll("\"", "");
    //   //       finalData = strsub1;
    //   //       NonEncryptData = 0;
    //   //       console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //   //       continue;
    //   //     }
    //   //     else {
    //   //       finalData = strsub1;
    //   //       NonEncryptData = 1;
    //   //     }
    //   //   }
    //   //   else {
    //   //     NonEncryptData = 0;
    //   //     const myIV = strsub1.substring(0, 16);
    //   //     var tempMessage = strsub1.substring(16);
    //   //     if(tempMessage.includes(".") || tempMessage.includes(";") || tempMessage.includes("H")) {
    //   //       console.log("Message is not encrypted: " + tempMessage);
    //   //       console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //   //       continue;
    //   //     }
    //   //     const tempIV = ascii_to_hexa(myIV);
    //   //     var MainIV = CryptoJS.enc.Hex.parse(tempIV);

    //   //     var MainKey = CryptoJS.enc.Hex.parse(DeviceData[deviceNumber][1]);
  
    //   //     totalRecords++;
    //   //     realData = decryptData(tempMessage, MainKey, MainIV);
    //   //     if (realData == undefined) continue;
    //   //     if (mytopics[1].includes("data")) {
    //   //       finalData = DeviceData[deviceNumber][0] + ";" + myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
    //   //     }
    //   //     else if (mytopics[1].includes("debug")) {
    //   //       finalData = myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
    //   //     }
    //   //   }
    //   //   let extData = finalData.split("\n");
    //   //   for (m = 0; m < extData.length; m++) {
    //   //     const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), extData[m]);
    //   //     contact1.saveAsCSV();          
    //   //   }  
    //   // }
    //   // else {
    //   //   if (NonEncryptData) {

    //   //     // if (str.includes("]")) 
    //   //     {
    //   //       let finalData;
    //   //       // let newStr = str.split("]");
    //   //       // let finalStr = newStr[1];
    //   //       // let newStr = str.split("]");
    //   //       let finalStr = str;

    //   //       if (mytopics[1].includes("data")) {
    //   //         if (finalStr.includes(DeviceData[deviceNumber][0])) {
    //   //           // finalData = finalStr.replaceAll("\"", "");
    //   //           finalData = finalStr;
    //   //         }
    //   //         else continue;  
    //   //       }
    //   //       else {
    //   //         if (mytopics[1].includes("debug")) {
    //   //           if (finalStr.includes("LVL") && finalStr.includes("ERR")) {
    //   //             // finalData = finalStr.replaceAll("\"", "");
    //   //             finalData = finalStr;
    //   //           }
    //   //           else continue;
    //   //         }  
    //   //         else continue;
    //   //       }
    //   //       const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), finalData);
    //   //       contact1.saveAsCSV();  
    //   //     }
    //   //     // else 
    //   //     {
    //   //       // NonEncryptData = 0;
    //   //     }
    //   //   }
    //   //   else {
    //   //       NonEncryptData = 0;
    //   //   }
    //   // }

    //   /***************************************  BC660K Logs *****************************************/
    //   // console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //   if (str.includes("+QMTRECV:")) {
        
    //     var newStr = str.split(" ");

    //     var tempstrsub = newStr[2];
    //     var strsub = tempstrsub.replaceAll("\"", "");

    //     mytopics = strsub.split("/");

    //     let l = 0;
    //     for (l = 0; l < DeviceData.length; l++) {
    //       if (DeviceData[l][0] == mytopics[2]) {
    //         deviceNumber = l;
    //         console.log("Data is of Device nUmber " + l);
    //         break;
    //       }
    //     }
    //     if (l >= DeviceData.length) {
    //       console.log("The device not found: " + l); 
    //       console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //       continue;
    //     }

    //     var tempstrsub1 = newStr[3];
    //     var strsub1 = tempstrsub1.replaceAll("\"", "");

    //     var realData;
    //     let finalData;
    //     if (DeviceData[deviceNumber][1].includes("None")) {
    //       if (mytopics[1].includes("config")) {
    //         let tempstrsub2 = newStr[4];
    //         finalData = tempstrsub2.replaceAll("\"", "");
    //         NonEncryptData = 0;
    //         console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //         continue;
    //       }
    //       else {
    //         finalData = strsub1;
    //         NonEncryptData = 1;
    //       }
    //     }
    //     else {
    //       NonEncryptData = 0;
    //       const myIV = strsub1.substring(0, 16);
    //       var tempMessage = strsub1.substring(16);
    //       if(tempMessage.includes(".") || tempMessage.includes(";") || tempMessage.includes("H")) {
    //         console.log("Message is not encrypted: " + tempMessage);
    //         console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
    //         continue;
    //       }
    //       const tempIV = ascii_to_hexa(myIV);
    //       var MainIV = CryptoJS.enc.Hex.parse(tempIV);

    //       var MainKey = CryptoJS.enc.Hex.parse(DeviceData[deviceNumber][1]);
  
    //       totalRecords++;
    //       realData = decryptData(tempMessage, MainKey, MainIV);
    //       if (realData == undefined) continue;
    //       if (mytopics[1].includes("data")) {
    //         finalData = DeviceData[deviceNumber][0] + ";" + myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
    //       }
    //       else if (mytopics[1].includes("debug")) {
    //         finalData = myIV.substring(6, 8) + "." + myIV.substring(8, 10) + ".20" + myIV.substring(10, 12) + ";" + myIV.substring(12, 14) + ":" + myIV.substring(14, 16) + ":00;" + realData;   
    //       }
    //     }
    //     let extData = finalData.split("\n");
    //     for (m = 0; m < extData.length; m++) {
    //       const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), extData[m]);
    //       contact1.saveAsCSV();          
    //     }  
    //   }
    //   else {
    //     if (NonEncryptData) {

    //       if (str.includes("]")) 
    //       {
    //         let finalData;
    //         let newStr = str.split("]");
    //         let finalStr = newStr[1];

    //         if (mytopics[1].includes("data")) {
    //           if (finalStr.includes(DeviceData[deviceNumber][0])) {
    //             finalData = finalStr.replaceAll("\"", "");
    //           }
    //           else continue;  
    //         }
    //         else {
    //           if (mytopics[1].includes("debug")) {
    //             if (finalStr.includes("LVL") && finalStr.includes("ERR")) {
    //               finalData = finalStr.replaceAll("\"", "");
    //             }
    //             else continue;
    //           }  
    //           else continue;
    //         }
    //         const contact1 = new Contact(mytopics[1], mytopics[2], (mytopics[3] != undefined? mytopics[3] : ""), finalData);
    //         contact1.saveAsCSV();  
    //       }
    //       else 
    //       {
    //         NonEncryptData = 0;
    //       }
    //     }
    //     else {
    //         NonEncryptData = 0;
    //     }
    //   }
  
    // }

    // console.log("Records Failed: " + failedRecords + " / " + totalRecords);
});



// var encrypted = CryptoJS.AES.encrypt("Hello World", key, { 
//   iv: iv,
//   mode: CryptoJS.mode.CFB,
//   padding: CryptoJS.pad.ZeroPadding
// }
// );
// console.log("encrypted: " + encrypted);

// var message1 = "9ac91223d45c178e02cdc459e0fd303027ce4d41e62a2c7b493e0a05d47435202ee23d2c3339c16944f0671f475192d6fde0afe772d8d0438908e77c9421d5caeec464b216d3ef334216a196aeb341d967212aee5ef3a086daa4803b4b55a0b4a1f806307485530e3982cf2cff4d6bc34ed9bce4c6cc48df4d402f6a32c178f0adb0d7b68f24d53ac15610e35294ae6e83ed7c47720972e73fd3eec052b5d63e9c0ad1920c5d9c355edbb4a6bf870f9670ad33a8b7ceafa5808b34c26f238741cae67f672f08b427834329a999e46c2e62f60c584fb1df5c11af2d4dfe808a95bfa49a9e4514f0e785ff278eabd6e93f980a2719da20325a9209fbc35d9a310d";

// var decrypted1 = CryptoJS.AES.decrypt(message1, CryptoJS.enc.Hex.parse("bcc2aec2b5c2b93a13c2b045c2b7c384"), { 
//   iv: CryptoJS.enc.Hex.parse("31303030303731313130323332303035"),
//   mode: CryptoJS.mode.CTR,
//   padding: CryptoJS.pad.ZeroPadding,
//   format: CryptoJS.format.Hex
// });
// try {
//   decrypted1 = decrypted1.toString(CryptoJS.enc.Utf8);    
// } catch (error) {
//   console.log("error: " + error + ". At message IV: " + iv + ", msg: " + message1);  
//   decrypted1 = undefined;
// }
// console.log("decrypted1: " + decrypted1);

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }


function decryptData(mymessage, myKey, myiv) {
  var decrypted = CryptoJS.AES.decrypt(mymessage, myKey, { 
    iv: myiv,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.ZeroPadding,
    format: CryptoJS.format.Hex
  });

  try {
    // decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    var backup = hex_to_ascii(decrypted);    
  } catch (error) {
      console.log("error: " + error + ". message: " + backup);  
      backup = undefined;
    // }
  }
  // console.log("decrypted: " + decrypted);
  return backup;
};

