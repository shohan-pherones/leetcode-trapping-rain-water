const trap = (number) => {
  let len = number.length;
  if (!len) return 0; 
  
  let result = 0;
  let left = 0, right = len - 1;
  let maxLeft = 0, maxRight = 0;
  
  while(left<=right){
    if(number[left] <= number[right]){
      if(number[left] >=maxLeft) maxLeft = number[left];
      else result += maxLeft-number[left];
      left++;
    }
    
    else{
      if(number[right] >= maxRight) maxRight = number[right];
      else result += maxRight-number[right];
      right--;
    }        
  }
  
  return result;
};
