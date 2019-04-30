$(document).ready(function(){

    var clientId = "351821389838-870dshniioi5i1rmdulq7o1cglhfgii1.apps.googleusercontent.com"; 	// clientId

    var redirect_uri = "http://localhost:8080/google_drive_upload/upload.html";

    var scope = "https://www.googleapis.com/auth/drive";

    var url = "";

    $("#login").click(function(){
        signIn(clientId,redirect_uri,scope,url);
    });

    function signIn(clientId,redirect_uri,scope,url){
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
            +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
            +"&access_type=offline";
        window.location = url;
    }
});