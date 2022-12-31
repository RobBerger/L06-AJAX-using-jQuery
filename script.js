$.ajax(
    'http://www.boredapi.com/api/activity',
    {
        success: function (APIResponse) {
            // Creating a div element
            let myDiv = document.createElement('div');

            // Creating a paragraph element and adding the innerHTML
            let activityTag = document.createElement('p');
            activityTag.innerHTML = "Activity Name: " + APIResponse.activity;

            // Creating another paragraph element and adding the innerHTML
            let participantsTag = document.createElement('p');
            participantsTag.innerHTML = "Number of Participants: " + APIResponse.participants;

            // Appending the paragraph tags to the created div element
            myDiv.appendChild(activityTag);
            myDiv.appendChild(participantsTag);

            document.body.appendChild(myDiv);
        }
    })