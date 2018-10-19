function clicksignin(){
    $(document.getElementById("signinform")).show();
    $(document.getElementById("loginform")).hide();
}
function clicksignin1(){
    $(document.getElementById("signinform")).hide();
    $(document.getElementById("loginform")).show();
}
function logincheck(){
    var login_id = document.forms["login"]["userid"].value;
    var login_pswd = document.forms["login"]["userpasswd"].value;
    if(/^\w+$/.test(login_id)&&/^\w+$/.test(login_pswd))
        return true;
    else{
        document.getElementById("loginidtext").value = "Invalid Value!";
        return false;
    }
}
function signincheck(){
    var sign_id = document.forms["signin"]["userid"].value;
    var sign_pswd = document.forms["signin"]["userpasswd"].value;
    var sign_pswd1 = document.forms["signin"]["userpasswd1"].value;
    if(/^\w+$/.test(sign_id)){
        if(/^\w+$/.test(sign_pswd)&&/^\w+$/.test(sign_pswd1)){
            if(sign_pswd == sign_pswd1){
                return true;
            }                                                        
            else{
                document.getElementById("signinid").value = "Passwd Unequal!";
                return false;
            }
        }
        else{
            document.getElementById("signinid").value = "Invalid Passwd!";
            return false;
        }
    }
    else{
        document.getElementById("signinid").value = "Invalid ID!";
        return false;
    }
}