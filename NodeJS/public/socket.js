$.ajax({url: "/ip", success: function(ipAddress){
    console.info("The IP Adress is: ", ipAddress, ". The complete URL of the server is ", 'http://'+ipAddress+':9000');
    var socket = io('http://'+ipAddress+':9000');
    socket.on('nuevo nodo', function (data) {
	var dialog = document.querySelector('dialog');
	dialog.showModal();
	console.log(data.resource)

});
    }});


$(document).ready(function () {
    var dialog = document.querySelector('dialog');
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
     window.location.assign("/accidentes")
    });
})
