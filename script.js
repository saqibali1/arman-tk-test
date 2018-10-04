// Write all your Javascript here!
function onload(){
        $.ajax({
            url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
            success: function (data) {
                console.log(data);
                
                document.querySelector('#li1').innerHTML= `${data.menuOptions[0]}`
                document.querySelector('#li2').innerHTML= `${data.menuOptions[1]}`
                document.querySelector('#li3').innerHTML= `${data.menuOptions[2]}`
                document.querySelector('#li4').innerHTML= `${data.menuOptions[3]}`
                document.querySelector("#card").innerHTML= `<img id="imgTop" src = "${data.imageURL}" style="width: 80%;" >`
                document.querySelector('#card-text').innerHTML= `${data.info.description}`
                document.querySelector('#heading').innerHTML= `${data.info.heading}`
                document.querySelector('#imgheading').innerHTML= `A Flower A day`

                
            }
        })
    }