function result(){
    var n1 = document.querySelector("#name1").value.trim();
    var n2 = document.querySelector("#name2").value.trim();
    var n3 = "flames"

    n1 = n1.toLowerCase();
    n2 = n2.toLowerCase();
    
    if(n1 === '' || n2 === ''){
        alert("Please enter the names!");
        document.querySelector(h3).innerHTML = '';
    }

    if((n1 === 'jyothi' || n1 === 'upendra') && (n2 === 'upendra' || n2 === 'jyothi')){
        alert("You guys don't need to check!\nyou both are made for each other💘!");
    }

    var l1 = n1.split("");
    var l2 = n2.split("");
    var res = n3.split("");

    var r1 = [];
    var r2 = [];

    for(let i of l1){
        let x = 0;
        for(let j of l2){
            if(x==0){
                if(i==j){
                    r1.push(i);
                    r2.push(j);
                    var f = l2.indexOf(j);
                    l2.splice(f,1);
                    x = 1;
                }
            }
        }
    }

    for (let i of r1) {
        let index = l1.indexOf(i);
        if (index !== -1) {
            l1.splice(index, 1);
        }
    }

    var len = l1.length + l2.length;
    
    var index = 0;
    while(res.length  > 1){
        index = (index + len -1) % res.length;
        res.splice(index,1);
    }

    if(res[0] === 'f'){
        document.getElementById("res").innerHTML = "You two are destined to be the best of friends forever👥!";
    }
    else if(res[0] === 'l'){
        document.getElementById("res").innerHTML = "A beautiful love story 💘 awaits you two🫂!";
    }
    else if(res[0] === 'a'){
        document.getElementById("res").innerHTML = "You both share a deep affection for each other🧲!";   
    }
    else if(res[0] === 'm'){
        document.getElementById("res").innerHTML = "It looks like a marriage proposal is in your future👰🏻‍♂️👰🏻‍♀️!";
    }
    else if(res[0] === 'e'){
        document.getElementById("res").innerHTML = "Uh-oh! Looks like you two are destined to be enemies😤.";
    }
    else if(res[0] === 's'){
        document.getElementById("res").innerHTML = "You two are like siblings, bound by family and love👬!";
    }

    document.querySelector("#name1").value = '';
    document.querySelector("#name2").value = '';
}
