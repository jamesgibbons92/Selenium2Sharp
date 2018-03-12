var fs = require('fs');
var path = require('path');


// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) {
    for(var i=0; i < this.length; i++) {
        if(comparer(this[i])) return true;
    }
    return false;
};

// adds an element to the array if it does not already exist using a comparer
// function
Array.prototype.pushIfNotExist = function(element, comparer) {
    if (!this.inArray(comparer)) {
        this.push(element);
    }
};

var typesMap = {
    "get" : "goto",
    "waitForElementPresent" : "testWait",
    "clickElement" : "test",
    "setElementText" : "test",
    "assertElementPresent" : "test",
    "sendKeysToElement" : "test"
};
var types = [];

var stepsSudo = [];
var pObj = [];

function createPageObjects(steps) {
    for (i=0; i<steps.length; i++) {
        var val = step[i]["value"];
        // check what type of selector it is.
        return "By.CssSelector(\""+val+"\")";
    }
}

function createAndWritePageObjects(steps) {
    var stream = fs.createWriteStream("C:\\Users\\james.gibbons\\Documents\\Node Projects\\Selenium2Sharp\\Selenium2Sharp\\test.txt");
    stream.once('open', function(fd) {
        for (i=0; i<steps.length; i++) {
            var val = steps[i];
            stream.write("By.CssSelector(\""+val+"\")");
            stream.write("\n");
        };
        stream.end();
    });

}

function createTests(step) {

}

var file = './data/searchandclickasset.json';
var jsonScript = JSON.parse(fs.readFileSync(file, 'utf8'));


var scriptSteps = jsonScript["steps"];



for (i=0; i<scriptSteps.length; i++)
{
  //  createPageObjects(scriptSteps[i]);
    var type = scriptSteps[i]["type"];
    switch(type) {
        case "waitForElementPresent":
            break;
        case "clickElement":
            break;
        case "assertElementPresent":
            break;
        case "sendKeysToElement":
            break;
        case "setElementText":
            break;
        case "get":
            break;
        default:
            //do stuff
    }
    createAndWritePageObjects(scriptSteps);

}







