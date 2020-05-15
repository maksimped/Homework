function val (result){
    form.disp.value = form.disp.value + result;
}

function calculate(){
    if(form.disp.value == ""){
        alert("Please enter number");
    }else{
        form.disp.value = eval(form.disp.value);
    }
} 

var btn = form.veql;//44
btn.addEventListener('dblclick', function(){
    form.disp.value = ""; // Обнуление значения двойным кликом
});