module.exports = function reverse (n) {
   
     
        var stringfromNumber = (n + '').split(''); 
        
        for(var i = 0; i < stringfromNumber.length / 2; i++) { 
            if (n < 0) {
                var temp = '';
            } else {
                
                stringfromNumber[i] = stringfromNumber[stringfromNumber.length - 1]
                stringfromNumber[stringfromNumber.length - 1]; 
            }
            var temp = '';//1 
            temp = stringfromNumber[i]; 
            stringfromNumber[i] = stringfromNumber[stringfromNumber.length - 1 - i];//6 
            stringfromNumber[stringfromNumber.length - 1 - i] = temp; 
        } 
     
        return stringfromNumber.join(''); 
    
        
}









    
