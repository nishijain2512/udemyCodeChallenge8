class parks{
    constructor(parkName, buildYear, area, numberOfTrees){
        this.parkName = parkName;
        this.buildYear = buildYear; 
        this.area = area; 
        this.numberOfTrees = numberOfTrees;
    }

    parkAge(){
        return (new Date().getFullYear() - this.buildYear);
    }

    treeDensity(){
        const density = this.numberOfTrees / this.area;
        console.log(`${this.parkName} has tree density of ${density} trees per square km.`);
    }
}


class streets{
    constructor(streetName, yearofBuild, streetLength){
        this.streetName = streetName;
        this.yearofBuild = yearofBuild;
        this.streetLength = streetLength;
    }

    size(){
        if(this.streetLength < 0.5){
            return('tiny');
        }else if(this.streetLength >= 0.5 && this.streetLength < 1){
            return('small');
        }else if(this.streetLength >= 1 && this.streetLength < 2){
            return('normal');
        }else if(this.streetLength >= 2 && this.streetLength < 3){
            return('big');
        }else if(this.streetLength >= 3){
            return('huge');
        }else{
            return('normal');
        }
        
    }
}
//NOTE: use array for storing individual parks n streets and .foreach method to scan array
const newtownPark = new parks('Newtown Park', 1996, 3.5, 900);
const oceePark = new parks('Ocee Park', 2004, 2.7, 700);
const fowlerPark = new parks('Fowler Park', 2010, 7, 1500);

const brookwoodRoad = new streets('Brookwood Road', 1999, 1.2);
const mathisAirportRoad = new streets('Mathis Airport Road', 1997, 2.1);
const peachtreeParkway = new streets('Peachtree Parkway', 1995, 5.4);
const ronaldReaganBlvd = new streets('Ronald Reagan Blvd', 2005,0.4);

console.log(`**************Parks Report***************`);
// 1. Tree Density of each park in the town.
newtownPark.treeDensity();
oceePark.treeDensity();
fowlerPark.treeDensity();

// 2. Average age of each park in the town.
const averageAge = (newtownPark.parkAge() + oceePark.parkAge() + fowlerPark.parkAge()) / 3;
console.log(`The average age of each park in town is ${averageAge}.`);

// 3. The name of the park that has more than 1000 trees.
let parkWithMoreTrees = new Array();
if(newtownPark.numberOfTrees > 1000){
    parkWithMoreTrees.push('Newtown Park');
}
if(oceePark.numberOfTrees > 1000){
    parkWithMoreTrees.push('Ocee Park');
}
if(fowlerPark.numberOfTrees > 1000){
    parkWithMoreTrees.push('Fowler Park');
}
if(parkWithMoreTrees.length === 0){
    console.log(`None of the parks have more than 1000 trees`);
}else{
    console.log(`${parkWithMoreTrees} has more than 1000 trees`);
}
console.log(`**************Streets Report***************`);
// 4. Total and average length of the town's streets.
const totalLength = brookwoodRoad.streetLength + mathisAirportRoad.streetLength + peachtreeParkway.streetLength + ronaldReaganBlvd.streetLength;
const averageLength = totalLength / 4;
console.log(`Total street lenght of all the roads is ${totalLength} kms and average is ${averageLength} kms.`);

// 5. size classififcation of all the streets.
console.log(`${brookwoodRoad.streetName}, built in ${brookwoodRoad.yearofBuild}, is a ${brookwoodRoad.size()} street.`);
console.log(`${mathisAirportRoad.streetName}, built in ${mathisAirportRoad.yearofBuild}, is a ${mathisAirportRoad.size()} street.`);
console.log(`${peachtreeParkway.streetName}, built in ${peachtreeParkway.yearofBuild}, is a ${peachtreeParkway.size()} street.`);
console.log(`${ronaldReaganBlvd.streetName}, built in ${ronaldReaganBlvd.yearofBuild}, is a ${ronaldReaganBlvd.size()} street.`);