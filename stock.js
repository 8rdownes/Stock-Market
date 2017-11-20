function Stock(n,t,i,v,q){



this.name=n;
this.ticker=t;
this.index=i;
this.value=v;
this.quantity=q;


//Initialize the instance variables below





//declare and define totalValue function below


    //declarea and define sell(q) function below


this.totalValue=function(){
return(this.value*this.quantity);

this.sell=function(q){
  if(q<=this.quantity){
    this.quality=this.quality-q;
    return(this.quality*q);
    //return money made
  }






}



module.exports = Stock;
