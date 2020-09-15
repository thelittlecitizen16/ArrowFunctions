let fibonacci = num => 
{
    if(num==null) 
    {  
        num=10;
    }
    let a = 1, b = 0, temp;
    let allNumbers =[];

    while (a < num){
        allNumbers.push(a);
        temp = a;
        a = a + b;
        b = temp;
      } 
      let place=0;

      setInterval(() => {
        if(place<allNumbers.length)
        {
            console.log(allNumbers[place]);
            place++;
        }
      }, 300);
}

fibonacci(10);

function Get(array)
{
    return array.map(a=>a.filter(a=>a %2 ==0));
}
console.log(Get([[1, 2, 3], [4, 6, 9]]));
