let userDb =[]
let driverDb =[]




//*******************Add User **************************//
function addUser(name,sex,age,userLocation,fare){

  // validations authentication and autorization can be done here




  userNo ={
    name:name,
    sex:sex,
    age:age,
    userLocation:userLocation,
    fare:fare
  }


  userDb.push(userNo)
  return userDb

  
}







//******************update User***************************//

function updateUser(name,...updatedDetails){
  
  let {updatedName,updatedSex,updatedAge,updatedUserLocation} =updatedDetails

 let index =-Infinity

  for (let i = 0;i<userDb.length ;i++){

    if(userDb[i].name ===name){
      index =i

    }
    

  }
  if(index ===-Infinity){
    return " user Not dound "
  }else{
    userDb[index] ={
      name:updatedName,
      sex:updatedSex,
      age:updatedAge,
      userLocation:updatedUserLocation
  
      }

  }
  
    //change on that index
    


  }

//****************************update user Location******************** */

  function updateUserLocation(){


  }
  addUser("Abhishek", "M",23,[1,2])
  addUser("Rahul","M",29,[2,3])
  addUser("Nandini","F",22,[0,0])
  
  updateUser("Abhishek","aarti")

  
console.log(userDb)
  































//////////////////////////Driver Section/////////////////////////////////////////////////////////////




//******************************addDriver********************************* //
function addDriver(driverName,sex,age,vechileDetails,vechileNumber,currentLocation,status){


  driverNo ={
    driverName: driverName,
    sex:sex,
    age:age,
    vechileNo:vechileNumber,

    vechileDetails:vechileDetails,
    currentLocation:currentLocation,
    status:"Available",// default available
    totalEarnings:totalEarnigs
  }

  driverDb.push(driverNo)

  return driverDb


}





//**********************Change driver Status****************************//
function changeDriverStatus(driverName,updatedStatus){


  // by default it is available we can change it 

 // first it will give name then we will check in db as in case we have done in user 
 //

}





//********************** update Driver Location ***********************//
function updateDriverLocation(driverName,updatedLocation){
  // same as above 


}

addDriver("Driver1","M",22,"swift","  KA-01-12345",[10,1])
addDriver("Driver2","M",29,"Dzire","  KA-01-41523",[6,7])
addDriver("Driver3","F",26,"Hyndai","  KA-07-40003",[2,5])



console.log(driverDb)





/////////////////////////   Booking Section ///////////////////////////////////////





let listOfAvailableDrivers=[]

function findRide (userName,source,destination){
  // look for userExit or not 

  //we need location  of every driver 

  
  // can we access it outside the function 
  


  for(let i= 0 ;i<driverDb.length;i++){

    let driverDetails =driverDb[i]

    let driverLocation = driverDb[i].currentLocation // 



    // distance must be less than 5 units 

    // distane bw two cordinates sqaure root of ((x2-x1)*2 -(y2-y1)*2)
    let distance =  Math.sqrt((source[0]-driverLocation[0])*2 -(source[1]=driverLocation[1])*2)

    if(distance<=5){
      listOfAvailableDrivers.push(driverDetails)
    }


    return listOfAvailableDrivers

  }


  

 // also we can send list of nearest driver 
 // let nearestDriver = Math.min(a,b,c)

}

//find_ride(“Abhishek” ,(0,0),(20,1))


function chooseRide(userName ,driverName){



// accessing list of available driver from the previous function 
  // driverName must be from available drivers list 

   // driver status must be available 


  
  // Fare will be added to  user fareSection

 


  

  // earnings will be added tp 



  
}


function calculateBill(userName){
  // total Fare = distance * fare per unit Distance 

  // bill will be showed from the fare section

}



function totalEarningDriver(driverName){

  // will show earning from the section 

}
