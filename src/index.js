module.exports = function reverse (number) {
     
        var stringfromNumber = (number + '').split(''); 
        for(var i = 0; i < stringfromNumber.length / 2; i++) { 
            var temp = '';//1 
            temp = stringfromNumber[i]; 
            stringfromNumber[i] = stringfromNumber[stringfromNumber.length - 1 - i];//6 
            stringfromNumber[stringfromNumber.length - 1 - i] = temp; 
        } 
     
        return stringfromNumber.join(''); 
    
        
    
        stringfromNumber(123);

}









    
