var div=document.getElementById("div");
var input=document.getElementById("input");
var S_btn=document.getElementById("S_btn");
var btn_1=document.getElementById("1_btn");
var btn_2=document.getElementById("2_btn");
var select=document.getElementById("select");

var STATUS_OK=200;

S_btn.addEventListener("click",function(event)
                                {
                                  alert("Data Saved Successfully")
                                  var request = new XMLHttpRequest();
                                  if(select.value === "first")
                                  {
                                    request.open('POST',"/1")
                                    request.send(JSON.stringify({text:input.value}))
                                  }
                                  if(select.value === "second")
                                  {
                                    request.open('POST',"/2")
                                    request.send(JSON.stringify({text:input.value}))
                                  }
});

btn_1.addEventListener("click",function(event)
                                {
                                  //alert()
                                  var request = new XMLHttpRequest();
                                  request.open('GET', "/1");
                                  request.send();
                                  request.onload=function()
                                  {
                                    if (request.status === STATUS_OK)
                                    {
                                      var tasks = JSON.parse(request.responseText);
                                      div.innerHTML=JSON.parse(request.responseText);
                                    }
                                    console.log(request.responseText);
                                  }

                                });

btn_2.addEventListener("click",function(event)
                                {
                                  var request = new XMLHttpRequest();

                                request.open('GET', "/2");
                                request.send();
                                request.onload=function()
                                {
                                  if (request.status === STATUS_OK)
                                  {
                                    var tasks = JSON.parse(request.responseText);
                                    div.innerHTML=JSON.parse(request.responseText);
                                  }
                                  console.log(request.responseText);
                                }
                                });
