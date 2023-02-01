var connection = new siqnalR.HubConnectionBuilder().withUrl("/cathub").build();
connection.Start();
connection.on("ReceiveMessage", message => {
    $("#notify").html(message);
    $("#notify").fadeIn(2000, () => { });
});
