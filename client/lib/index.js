const base_url = "http://localhost:3000"

$(document).ready(function(){
    //sign up manually
    $("#signupBtn").click(function(){
        let name = $("#inputNameSignUp").val();
        let email = $("#inputEmailSignUp").val();
        let password = $("#inputPasswordSignUp").val();
        axios.post(`${base_url}/signup`, {
           name,
           email,
           password
        })
        .then(function (response) {
            let token = response.data.data.token //ini token yg uda kita generate di server
            localStorage.setItem('token', token)
        })
        .catch(function (error) {
            console.log(error);
        });
    });

    //log in manually
    $("#loginBtn").click(function(){
        let name = $("#inputName").val();
        let email = $("#inputEmail").val();
        let password = $("#inputPassword").val();

        axios.post(`${base_url}/login`, {
            name,
            email,
            password
         })
         .then(function (response) {
            let token = response.data.data.token //ini token yg uda kita generate di server
            localStorage.setItem('token', token)
         })
         .catch(function (error) {
             console.log(error);
         });
    });

    $("#inputLocation").on('change',function(){
        console.log('inputLocation')
        $( "#inputRestaurant option").remove();    
        let inputLocation = $("#inputLocation").val();
        axios.get(`${base_url}/search/location?q=${inputLocation}`)
            .then(function(response){
                console.log(response)
                axios.get(`${base_url}/search/restaurants?location=${response.data.data.locationId}`)
                    .then(result => {
                        console.log(result)
                        $.each(result.data.data,function(){
                            $( "#inputRestaurant").append( `<option value="${this.id}">${this.name}, at <span>${this.address}</span></option>` );
                        });
                    })
                     
            })
            .catch(function (error) {
                console.log(error);
            });

    })

    //Be a Host
    $("#invitationBtn").click(function(){
        let token = localStorage.getItem("token")
        if(token){
            let inputEventName          = $("#inputEventName").val();
            let inputEventDescription   = $("#inputEventDescription").val();
            let inputDate               = $("#inputDate").val();
            let inputGuestLimit         = $("#inputGuestLimit").val();
            let inputPrice              = $("#inputPrice").val();
            let inputRestaurant         = $("#inputRestaurant").val();
            
            axios({
                method: 'post',
                url: `${base_url}/user/hosted_meals`,
                data: {
                    event_name: inputEventName,
                    event_description: inputEventDescription,
                    date: inputDate,
                    guest_limit: inputGuestLimit,
                    price: inputPrice,
                    restaurant_id: inputRestaurant
                    },
                headers: {
                    "token": token
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            console.log("No Token")
        }
    });
   
});




