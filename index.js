// Code your solution in this file!
const logDriverNames = function(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
};

const logDriversByHometown = function(drivers, hometown) {
    drivers.forEach(function(driver) {
        driver.hometown === hometown ? console.log(driver.name) : null;
    });
};

const driversByRevenue = function(drivers) {
    return drivers.slice().sort(function(driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue
    });
};

const driversByName = function(drivers) {
    return drivers.slice().sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name)
    });
};

const totalRevenue = function(drivers) {
    return drivers.reduce((total, driver) => {
        return driver.revenue + total
    }, 0)
};

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length
};
