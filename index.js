/* Your Code Here */

const createEmployeeRecord = function ([firstName, familyName, title, payPerHour]){
    return {firstName: firstName,
        familyName:familyName,
        title:title,
        payPerHour:payPerHour,
        timeInEvents: [],
        timeOutEvents: []}
}

const createEmployeeRecords = function (arrays){
    return arrays.map(createEmployeeRecord); 
}

function createTimeInEvent(dateTime) {
    let [date, hour] = dateTime.split(" "); 
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,  
        hour: parseInt(hour, 10)  
    });
    return this; 
}

function createTimeOutEvent(dateTime) {
    let [date, hour] = dateTime.split(" ");  // Split date and hour from dateTime string
    this.timeOutEvents.push({
        type: "TimeOut",  // Event type is "TimeOut"
        date: date,       // Date from the dateTime string
        hour: parseInt(hour, 10)  // Hour, parsed as an integer
    });
    return this;  // Return the updated employee record
}

function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    
    return (timeOutEvent.hour-timeInEvent.hour)/100
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(employee => employee.firstName === firstNameString);

}

function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((total, employeeRecord) => {
        return total + allWagesFor.call(employeeRecord);
      }, 0); 
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

