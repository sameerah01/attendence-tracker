const { log } = require('console');
const fs  = require('fs');
const { search } = require('./routes');

exports.getData = (req, res) => {
    fs.readFile('./Data.json', 'utf8', (error, fileContents) => {
        if(error) {
            console.log("Error reading file");
        } else {
            const data = JSON.parse(fileContents);
            res.send(data); 
        }
    })
}

exports.getAttendance = (req, res) => {
    fs.readFile('./studentDetails.json', 'utf8', (error, fileContents) => {
        if(error) {
            console.log("Error reading file");
        } else {
            const data = JSON.parse(fileContents);
            res.send(data); 
        }
    })
}


exports.addUser =  (req, res) => {
    const studentObj = {
        name: req.body.name,
    }

    fs.readFile('./Data.json', 'utf8', (err, fileContents) => {
        if(err) {
            console.log("Error reading file");
        } else {
            const data = JSON.parse(fileContents);
            const searchUser = data.users.filter(user => {
            const reqUser = JSON.stringify(studentObj.name);
            const match = reqUser.includes(JSON.stringify(user));
            if(match) {
                return true;
            } else {
                return false;
            }
            });
            if(searchUser.length > 0) {
                res.send("User already exists");
            } else {
                data.users.push(studentObj);
                fs.writeFile('./Data.json', JSON.stringify(data), err => {
                    if(err) {
                        console.log("Error writing into a file");
                    } else {
                        res.send(data.users);
                    }
                })
            }
        }
    })
    
}

exports.addAttendance =  (req, res) => {
    console.log(req.body)
    const studentObj = {
        id:req.body.id,
        name: req.body.name,
        date: req.body.date,
        subject: req.body.subject,
        status: req.body.status
    }

    fs.readFile('./studentDetails.json', 'utf8', (err, fileContents) => {
        if(err) {
            console.log("Error reading file");
        } else {
            const data = JSON.parse(fileContents);
            const searchUser = data.users.filter(user => {
                const reqUser = JSON.stringify(studentObj.name);
                const match = reqUser.includes(JSON.stringify(user));
                if(match) {
                    return true;
                } else {
                    return false;
                }
            });
            if(searchUser.length > 0) {
                res.send("User already exists");
            } else {
                data.users.push(studentObj);
                fs.writeFile('./studentDetails.json', JSON.stringify(data), err => {
                    if(err) {
                        console.log("Error writing into a file");
                    } else {
                        res.send(data.users);
                    }
                })
            }
        }
    })
    
}