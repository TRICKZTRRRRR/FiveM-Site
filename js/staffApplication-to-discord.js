// Staff Ansøgning
document.addEventListener('DOMContentLoaded', function () {
    const staffForm = document.getElementById('staffApplicationID');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    staffForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Forhindrer standardformularindsendelse

        const webhookURL = 'https://discord.com/api/webhooks/1167054110701391972/iCa1tVNXF1Bvipi99tn8h1qmRNYgq-U7MRxLXJwnfbdb3ci3VD7OkINgbb5QGXcVM_n-'; // Erstat med din webhook URL

        const firstName = document.getElementById('firstname').value;
        const age = document.getElementById('age').value;
        const whyStaff = document.getElementById('whyStaff').value;
        const staffServers = document.getElementById('staffServers').value;
        const experiences = document.getElementById('experiences').value;
        const onlineWeek = document.getElementById('onlineWeek').value;
        const whyYou = document.getElementById('whyYou').value;

        errorMessage.textContent = '';
        successMessage.textContent = '';

        // Tjek om alle inputfelter er udfyldt
        if (firstName && age && whyStaff && staffServers) {
            const payload = {
                content: `**Navn:** \n${firstName}\n\n**Hvorfor vil du gerne være en del af Staff Teamet?:** \n${whyStaff}\n\n**Alder:** \n${age}\n\n**Har du været Staff på andre servere før? (Nævn gerne servere):** \n${staffServers}\n\n**Hvad har du af erfaringer?:** \n${experiences}\n\n**Hvor mange timer om ugen, kan du være online?:** \n${onlineWeek}\n\n**Hvorfor skal vi vælge dig?:** \n${whyYou}`,
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then(response => response.text())
            .then(data => {
                console.log('Besked sendt til Discord:', data);
                // Vis en succesbesked og nulstil inputfelter
                successMessage.textContent = 'Din ansøgning er blevet sendt.';
                staffForm.reset();
            })
            .catch(error => {
                console.error('Fejl ved afsendelse til Discord:', error);
                errorMessage.textContent = 'Der opstod en fejl under afsendelse. Prøv igen senere.';
            });
        } else {
            errorMessage.textContent = 'Alle felter skal udfyldes.';
        }
    });
});

// Politi Ansøgning
document.addEventListener('DOMContentLoaded', function () {
    const policeForm = document.getElementById('policeApplicationID');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    policeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Forhindrer standardformularindsendelse

        const webhookURL = 'https://discord.com/api/webhooks/1167080354092429452/eLbta0KSHfEmJBPY9M5OGY8ET5mFVIy8iCpz8qFZEnV9PPts0Chd3sT5FXDA5jYK-cwU'; // Erstat med din webhook URL

        const firstName = document.getElementById('firstname').value;
        const age = document.getElementById('age').value;
        const whyPolice = document.getElementById('whyPolice').value;
        const policeServers = document.getElementById('policeServers').value;

        errorMessage.textContent = '';
        successMessage.textContent = '';

        // Tjek om alle inputfelter er udfyldt
        if (firstName && age && whyPolice && policeServers) {
            const payload = {
            content: `**Navn:** \n${firstName}\n\n**Hvorfor vil du gerne være en del af Staff Teamet?:** \n${whyPolice}\n\n**Alder:** \n${age}\n\n**Har du været Staff på andre servere før? (Nævn gerne servere):** \n${policeServers}`,
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then(response => response.text())
            .then(data => {
                console.log('Besked sendt til Discord:', data);
                // Vis en succesbesked og nulstil inputfelter
                successMessage.textContent = 'Din ansøgning er blevet sendt.';
                policeForm.reset();
            })
            .catch(error => {
                console.error('Fejl ved afsendelse til Discord:', error);
                errorMessage.textContent = 'Der opstod en fejl under afsendelse. Prøv igen senere.';
            });
        } else {
            errorMessage.textContent = 'Alle felter skal udfyldes.';
        }
    });
});
