export const API_KEY='AIzaSyCDXTLuTVEUbb_0Q-pi-u76i7MnthKICFk'
export const valueConverter=(value)=>{
   if(value>=1000000){
      return (value/1000000).toFixed(0)+'M'
   }else if(value>=1000){
      return (value/1000).toFixed(0)+'K'
   }
   else{
      return value
   }
}