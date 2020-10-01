var result = "";
for(var y = 1; y<=9;y++){
    for(var x = 1; x<=9;x++){
        if(y<x){
            break;
        }

        result += y + ' * ' + x + ' = ' + (y*x) + ' ';
    }
    
    console.log(result);
    result="";
}