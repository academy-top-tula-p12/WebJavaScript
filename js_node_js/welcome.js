let dateCurrent = new Date();
global.date = dateCurrent;

module.exports.logWelcome = function(){
    let welcome = "Good ";
    let time = dateCurrent.getHours();

    if(time > 6 && time < 12)
        welcome += "morning";
    else if(time >= 12 && time < 18)
        welcome += "day";
    else if(time >= 18 && time < 23)
        welcome += "evening";
    else
        welcome += "night";
    
    welcome += " " + global.name;
    console.log(welcome);
};

