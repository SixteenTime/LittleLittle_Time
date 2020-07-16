var apiUrl="https://zjgsujiaoxue.applinzi.com/index.php/Api"
var appID="wxf721e37fc9199f11"

var config={
  apiUrl,
  appID,
  wxUrl:`${apiUrl}/Weixin/`,//字符串拼接
  userUrl:`${apiUrl}/User/`
};

module.exports=config //对外暴露的接口，也就是定义的三个变量只对外开放config