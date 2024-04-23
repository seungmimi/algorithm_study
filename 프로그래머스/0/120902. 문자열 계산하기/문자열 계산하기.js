function solution(my_string) {
            var arr = my_string.replace(',','').split(' ');
            let res = parseInt(arr[0]);
            for(let i = 1; i < arr.length; i++){
                if(arr[i] === '+'){
                    res += parseInt(arr[i+1]);
                }else if(arr[i] === '-'){
                    res -= parseInt(arr[i+1]);
                }else{
                    continue
                }
            }
            return(res);
    
}