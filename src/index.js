module.exports = function reverse (n) {
   
     
        var stringfromNumber = (n + '').split(''); 
        if (n < 0) {
            var stringfromNumber = (n + '').split(''); 
            stringfromNumber.shift();
        }
        for(var i = 0; i < stringfromNumber.length / 2; i++) { 
           
            var temp = '';//1 
            temp = stringfromNumber[i]; 
            stringfromNumber[i] = stringfromNumber[stringfromNumber.length - 1 - i];//6 
            stringfromNumber[stringfromNumber.length - 1 - i] = temp; 
        } 
     
        return stringfromNumber.join(''); 
    
        
}









    
