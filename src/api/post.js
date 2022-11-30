export const PostToHPro=async  (hub,endpoint,callback)=>{
    const server ="https://cloudcalls.easipath.com/backend-hpro/api";
    let url = server + "" + endpoint;

    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hub)
    })
        .then((response) => response.json())
        .then((response) => {
            //todo let check if the response code is 401 Unauthorized
            if(typeof response.error !=="undefined"){
                if( response.error ==="Unauthorised access to this resource"){
                    //alert("Unauthorised access to this resource, Please login!")
                    window.location.href = "#/login"
                }
            }
            callback(response, null);
        }).catch((e) => {
        callback(null, e, null);
    });

}