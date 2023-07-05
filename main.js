name_of_the_student_array=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
    
}
function sort(){
    name_of_the_student_array.sort()
    document.getElementById("display_name").innerHTML=name_of_the_student_array;
}