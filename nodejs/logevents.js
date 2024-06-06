const fspromise= require('fs').promises;
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');
const path = require('path');
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    
    try {
        const logsDir = path.join(__dirname, 'logs'); 
        if (!fs.existsSync('logs')) {
            await fspromise.mkdir('logs');
        }const logFilePath = path.join(logsDir, 'eventLogs.txt');
        await fspromise.appendFile(logFilePath, logItem);
    } catch (err) {
        console.error(err);
    }
};
module.exports=logEvents

        
