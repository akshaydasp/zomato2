function validation(){
    let flag=0;
    let search=document.getElementById('search').value.trim()
   
    if(search==''){
        document.getElementById("error").innerHTML="This field is required"
        flag=1;
    }
    if(flag==1){
        return true;
    }

}
function validation2(){
    let flag=0;
    let search=document.getElementById('search1').value.trim()
   
    if(search==''){
        document.getElementById("error1").innerHTML="This field is required"
        flag=1;
    }
    if(flag==1){
        return true;
    }

}