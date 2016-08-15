    var box=document.getElementById('formName');
    var oSubmit = document.getElementById("btn");
    var userName = document.getElementById('userName'),
        userPs = document.getElementById('password'),
        userPs1 = document.getElementById('password1'),
        userPhone =document.getElementById('phone'),
        userCode =document.getElementById('code'),
        phoneCode = document.getElementById('phoneCode');
    userName.onfocus=function(){
        if(userName.parentNode.lastElementChild.nodeName.toLowerCase()=="span"){
            this.parentNode.removeChild(this.parentNode.lastElementChild);
        }
        utils.removeClass(userName,"warning");

    };
    userName.onblur=function(){
        var regSpace=/\s+/g;
        this.value=this.value.replace(regSpace,"");
        var reg=/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(reg.test(this.value)){
            utils.removeClass(oName,"warning");
            var oTip=document.getElementById("input_tips");

            if(oTip) {
                if (userName.parentNode.lastElementChild.nodeName.toLowerCase() == "span") {
                    this.parentNode.removeChild(this.parentNode.lastElementChild);
                }
            }
        }else{
            var oTip=document.getElementById("input_tips");
            if(this.value==this.defaultValue){
                return;
            }else{
                if(!oTip){
                    oTip=document.createElement("span");
                    oTip.id="input_tips";
                    this.parentNode.insertBefore(oTip,this.nextSibling);
                }
                oTip.className="input_tips";
                oTip.innerHTML="格式错误";
                utils.addClass(userName,"warning");
            }
        }
    };

    oSubmit.onclick=function () {
        var obj = {
            name: userName.value,
            userPs: userPs.value,
            userPs1: userPs1.value,
            userPhone: userPhone.value,
            userCod: userCode.value,
            phoneCode:phoneCode.value
        };

        sendAJAX({
            url: "/register",
            type: "post",
            data: JSON.stringify(obj),
            success: function (data) {
                if (data["code"] == 0) {
                    alert("注册成功!");
                    window.location.href = "login.html";
                }
            }
        });
        return;
    };
