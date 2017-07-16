$.ajax({url: "/ip", success: function(ipAddress){
    console.info("The IP Adress is: ", ipAddress, ". The complete URL of the server is ", 'http://'+ipAddress+':9000');
    var socket = io('http://'+ipAddress+':9000');
    socket.on('nuevo nodo', function (data) {
    console.log(data.resource)
    alert(data.resource.latitud);
    alert(data.resource.longitud);
    console.log(data.resource)
});
    }});

