function solution(price) {
    switch(true){
        case price >= 500000 :
            price = parseInt(price - (price/100)*20);
            break;
        case price >= 300000 :
            price = parseInt(price - (price/100)*10);
            break;
        case price >= 100000 :
            price = parseInt(price - (price/100)*5);
            break;
    }
    return price;
}