function totalEqual(n1, n2, n3){
    if(n1==n2 && n1==n3)
    {
        return 3;
    }else if(n1==n2 || n1==n3 || n2 == n3)
    {
        return 2;
    }else {return 0;}
}
const n1=3
const n2=4
const n3=3

console.log(totalEqual(n1,n2,n3));
