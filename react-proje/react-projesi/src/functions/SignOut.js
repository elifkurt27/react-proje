export const SignOut =(navigate)=>{
    var isLogin="false";
    sessionStorage.setItem('isLogin',isLogin);
    navigate('/');

}
export const sifreGuncelle =()=>{
    var user = sessionStorage.getItem("user");
    user=user.split(',');
    var oldpass=document.getElementById("oldpass").value;
    var newpass=document.getElementById("newpass").value;
    var repass=document.getElementById("repass").value;
    var sonuc=document.getElementById("sonuc");

    if(user[1]==oldpass ){
        if(newpass==repass){
            user[1]=newpass;
            sessionStorage.setItem("user",user);
            sonuc.innerHTML="Şifreniz güncellenmiştir...";
            
        }
        else{
            sonuc.innerHTML="Yeni parolanız eşleşmiyor...";
        }
    }else{
        
        sonuc.innerHTML="Eski şifrenizi hatalı...";
    }
}
export default SignOut;


