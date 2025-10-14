let x;
        x=prompt("Enter x value :");
        let num=parseInt(x);
        if(num>0){
            document.getElementById("demo").innerText=num+"num is postive";
        }else{
            document.getElementById("demo").innerText=num+"num is negative";
        }

