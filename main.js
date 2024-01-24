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
  ["100049", "2936C39C31C39D6328C3BB45C2BC4F25"],
  ["100050", "B9C389C692C3A2C3BFC2B1C394632A79"],
  ["100051", "C3AC5C4AC3BBC2BBC5BDC2B0C2ACC2BF"],
  ["100052", "E280BA13C5A05BC398635619C3AFC3AB"],
  ["100053", "E280A04728555A334AC396547CC384C3"],
  ["100054", "B93AC3B6C3994248C39825C38EC2BCC3"],
  ["100055", "B46CC380CB860BC3A1C39A73C2AB09C2"],
  ["100056", "B20D0ACB86C2B4C5A04D78C2A0C5BEC2"],
  ["100057", "AA7E63140BC2A1C3A21FC3A9C5BE2242"],
  ["100058", "C3BEC39BC5BDCB86C386C3BCC39EC2AA"],
  ["100059", "E28093C593C38170C3A1743EC3B5C2BA"],
  ["100060", "2D1D21C398C3BF78C28FC2AE1CC5B875"],
  ["100061", "CB8659C39CC2902CC3817B6B2AE284A2"],
  ["100062", "3BC38247C5A0E280B0C393C2A4C3A4C3"],
  ["100063", "8FC39979C2B3C3BC66C3B6C3B425E280"],
  ["100064", "93594D0BC2A7C38EC3A55114C2B1E280"],
  ["100065", "A151346FE2809EC2BF041B3FC29DC38F"],
  ["100066", "3515C3B3E2809DC39143C3907AC3931F"],
  ["100067", "C38072C3A837E28098C2A7C2B3E280A0"],
  ["100068", "0E47C39E66C3AB3EE28098C3A473C3A4"],
  ["100069", "2CC3AF04C3B5120B20E28094C2A628E2"],
  ["100070", "809AC2B377C3AAE2809869C39514C382"],
  ["100071", "C2A1C3933240C3936EE280A1C2B3C3B7"],
  ["100072", "600F266AC389C3A6C2A6C2A6C2B30311"],
  ["100073", "25CB86C2A84B3FC2A77CC3BEC3A946C2"],
  ["100074", "A3C2A0C39FC3AC2737C3A536707DC2B6"],
  ["100075", "C3B802C2B845C2B1C39807C2A0C3867B"],
  ["100076", "29127C27C3AAC2AC136EC3B2C3A9C3B3"],
  ["100077", "C3ABC381470D0A31C2A7C39769C5A0C3"],
  ["100078", "ACC2B4C2BB2FC386C5A1C2A5C3B2C3A1"],
  ["100079", "66C2A12966E2809AE2809E15E280A0C2"],
  ["100080", "A8C39805082BC29DC3BA2970C2B76104"],
  ["100081", "A4595BC3B1211A11C2817C727219C3A1"],
  ["100082", "31C290C3B875C384C29D32C386C38135"],
  ["100083", "C2BD54C2B0116FC3844C7841C2B2C396"],
  ["100084", "046BC3861E0EE280A2C2B23EC2BEC2B0"],
  ["100085", "C394517A4A2111C3AC034F022113C3AE"],
  ["100086", "C38FC692C28DC38D40C2AF61C3BC5448"],
  ["100087", "C3A3C2A2C2A1C2A5C2B0CB9C1913C389"],
  ["100088", "4AC2A0671272C38FE280980CC3A25B72"],
  ["100089", "C3996E24C2AFE280983E4AC2A9C28103"],
  ["100090", "576FC385C2B45D6EC3A6C28DC3A94016"],
  ["100091", "5AC3B6C2BB5FC5A0300BC38DC2B013C2"],
  ["100092", "B1C2BBC2B9796523E280A055C2A9E280"],
  ["100093", "C2ACC2B74B2861E2809DC5924F3FC281"],
  ["100094", "C3B93AC2ACC2AFC29D41C5BEC389C2B1"],
  ["100095", "C3A83462CB8656C5B8C5BE73616C2741"],
  ["100096", "C3816C2CC2AC38C28DC2812F184931E2"],
  ["100097", "80A0C38FC3800B162DC2A27D33474942"],
  ["100098", "75C3B5C3ACC2B3C2AEE280A1E282ACC2"],
  ["100099", "8DC38EC692C3BF07C3A5E280A6C397C2"],
  ["100100", ""],
  ["100101", ""],
  ["100102", ""],
  ["100103", ""],
  ["100104", ""],
  ["100105", ""],
  ["100106", ""],
  ["100107", ""],
  ["100108", ""],
  ["100109", ""],
  ["100110", ""],
  ["100111", ""],
  ["100112", ""],
  ["100113", ""],
  ["100114", ""],
  ["100115", ""],
  ["100116", ""],
  ["100117", ""],
  ["100118", ""],
  ["100119", ""],
  ["100120", ""],
  ["100121", ""],
  ["100122", ""],
  ["100123", ""],
  ["100124", ""],
  ["100125", ""],
  ["100126", ""],
  ["100127", ""],
  ["100128", ""],
  ["100129", ""],
  ["100130", ""],
  ["100131", ""],
  ["100132", ""],
  ["100133", ""],
  ["100134", ""],
  ["100135", ""],
  ["100136", ""],
  ["100137", ""],
  ["100138", ""],
  ["100139", ""],
  ["100140", ""],
  ["100141", ""],
  ["100142", ""],
  ["100143", ""],
  ["100144", ""],
  ["100145", ""],
  ["100146", ""],
  ["100147", ""],
  ["100148", ""],
  ["100149", ""],
  ["100150", ""],
  ["100151", ""],
  ["100152", ""],
  ["100153", ""],
  ["100154", ""],
  ["100155", ""],
  ["100156", ""],
  ["100157", ""],
  ["100158", ""],
  ["100159", ""],
  ["100160", ""],
  ["100161", ""],
  ["100162", ""],
  ["100163", ""],
  ["100164", ""],
  ["100165", ""],
  ["100166", ""],
  ["100167", ""],
  ["100168", ""],
  ["100169", ""],
  ["100170", ""],
  ["100171", ""],
  ["100172", ""],
  ["100173", ""],
  ["100174", ""],
  ["100175", ""],
  ["100176", ""],
  ["100177", ""],
  ["100178", ""],
  ["100179", ""],
  ["100180", ""],
  ["100181", ""],
  ["100182", ""],
  ["100183", ""],
  ["100184", ""],
  ["100185", ""],
  ["100186", ""],
  ["100187", ""],
  ["100188", ""],
  ["100189", ""],
  ["100190", ""],
  ["100191", ""],
  ["100192", ""],
  ["100193", ""],
  ["100194", ""],
  ["100195", ""],
  ["100196", ""],
  ["100197", ""],
  ["100198", ""],
  ["100199", ""],
  ["100200", ""],
  ["100201", ""],
  ["100202", ""],
  ["100203", ""],
  ["100204", ""],
  ["100205", ""],
  ["100206", ""],
  ["100207", ""],
  ["100208", ""],
  ["100209", ""]
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

const LogsSelector = 2 // 0 -> My Logs, 1 -> Client Logs, 2 -> From veraut Data Logger

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
            switch (LogsSelector) {
              /***************************************  BC660K Logs *****************************************/
              case 0:
                appendFileSync("./dataMyLogs.csv", csv);
                break;
              
              /***************************************  ENERGIE AG Logs *****************************************/
              case 1:
                appendFileSync("./dataClientLogs.csv", csv);
                  break;
          
            /***************************************  Veraut Data Logger Logs *****************************************/
            case 2:
                appendFileSync("./dataVerautLoggerLogs.csv", csv);
                  break;
          
                default:
                  break;
            }
            // if (LogsSelector)
            //   appendFileSync("./dataClientLogs.csv", csv);
            // else
            //   appendFileSync("./dataMyLogs.csv", csv);
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

function extractDataFromVerautLogger(dataLogs) {
  // console.log("The file content is : " + data);
  var totalRecords = 0;
  var failedRecords = 0;
  var theString = dataLogs.split("\n");
  console.log("Data present: " + (theString.length - 1));
  let totalrowsLen = theString.length - 1;
  let timeStampString;
  for (let index = totalrowsLen; index >= 0; index--) {
    totalRecords++;
    const currentRow = theString[index];
    // console.log("current row: " + currentRow);
    if (currentRow.includes(";")) {
      const saveTimeStamp = timeStampString.replaceAll('\r', '');
      if (currentRow.includes(";LVL;") && currentRow.includes(";ERR;")) {
        const contact1 = new Contact(saveTimeStamp, "Debug", "", currentRow);
        contact1.saveAsCSV();          
      }
      else if (currentRow.includes(";SQ;")) {
        const contact1 = new Contact(saveTimeStamp, "Data", "", currentRow);
        contact1.saveAsCSV();          
      }
      else {
        failedRecords++;
      }
    }
    else {
      timeStampString = "";
      timeStampString = currentRow.replaceAll('\n', '');
      // console.log("time string: " + timeStampString);

    }
  }
  console.log("Records Failed: " + failedRecords + " / " + totalRecords);
}




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
        else
          continue;
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

        var realData;
        let finalData;
        var strsub1 = newStr[1];
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

        // var tempstrsub1 = newStr[3];
        // var strsub1 = tempstrsub1.replaceAll("\"", "");

        // if (DeviceData[deviceNumber][1].includes("None")) {
        //   if (mytopics[1].includes("config")) {
        //     // let tempstrsub2 = newStr[4];
        //     // finalData = tempstrsub2.replaceAll("\"", "");
        //     finalData = strsub1;
        //     NonEncryptData = 0;
        //     console.log("<-- Line [%d], str {%s} -->\r\n", (i + 1), str);
        //     continue;
        //   }
        //   else {
        //     finalData = strsub1;
        //     NonEncryptData = 1;
        //   }
        // }
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
    
    switch (LogsSelector) {
    /***************************************  BC660K Logs *****************************************/
    case 0:
        extractDataFromMyLogs(data);
        break;
    
    /***************************************  ENERGIE AG Logs *****************************************/
    case 1:
        extractDataFromClientLogs(data);
        break;

   /***************************************  Veraut Data Logger Logs *****************************************/
   case 2:
        extractDataFromVerautLogger(data);
        break;

      default:
        break;
    }
    // if (LogsSelector)
    //   extractDataFromClientLogs(data);

    // else
    //   extractDataFromMyLogs(data);


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

