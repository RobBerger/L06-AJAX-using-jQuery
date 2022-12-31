$.ajax('http://www.boredapi.com/api/activity',
    {
        success: function (APIResponse) {
            console.log(APIResponse);
        }
    })