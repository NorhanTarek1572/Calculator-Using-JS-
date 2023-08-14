function addition (nums){
  
    let result =0
    for( i=0 ; i< nums.length ; i++){
      result =  parseInt (nums[i]) + result
    }
    
   return result
}

function subtraction(nums){
    let result =nums[0]
    for( i=1 ; i< nums.length ; i++){
      result = result- parseInt (nums[i])  
    }
    
   return result
}

function multiplication(nums){
    let result =1
    for( i=0 ; i< nums.length ; i++){
      result = result * parseInt (nums[i])  
    }
    
   return result
}

function dividtion(nums){
    let result =nums[0]

    for( i=1; i< nums.length ; i++){
     
     result = result/ parseInt (nums[i])  
    }
    
   return result
}

module.exports ={ subtraction , multiplication , dividtion ,addition}
