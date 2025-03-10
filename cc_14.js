//TASK 2, 4

const ticketContainer = document.getElementById('ticketContainer'); // selects the ticket container
const addTicketBtn = document.getElementById('addTicketBtn'); // selects the add ticket button

addTicketBtn.addEventListener('click', function() { 
    addTicket("Cam Watts", "New issue description here", "High"); // adds a test ticket
});

ticketContainer.addEventListener('click', function() { // adds event listener to the ticket container
    console.log('Ticket clicked'); 
});

function addTicket(name, issue, priority) { // creates a support ticket
    const ticket = document.createElement('div'); // creates a div for the ticket
    ticket.classList.add('ticket'); // adds a class to the ticket

    console.log(`Ticket added: ${name}, ${issue}, Priority: ${priority}`);

    const nameHeading = document.createElement('h3'); // creates the heading for the customer’s name
    nameHeading.textContent = name; 

    const issueParagraph = document.createElement('p'); // creates the paragraph for the issue description
    issueParagraph.textContent = issue; 

    const priorityLabel = document.createElement('label'); // creates label for priority level
    priorityLabel.textContent = `Priority: ${priority}`; // sets the priority level

    const resolveButton = document.createElement('button'); // creates the resolve button
    resolveButton.textContent = 'Resolve'; 
    resolveButton.classList.add('resolve-button'); // adds a class for styling

    resolveButton.addEventListener('click', function(event) { // adds event listener (click) to resolve button
        event.stopPropagation(); // stops the event from bubbling
        ticket.remove(); // removes the ticket from the DOM
    });

    // appends elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer'); // selects the ticket container
    ticketContainer.appendChild(ticket); // appends the ticket to the container

    highlightHighPriorityTickets(); // highlights high priority tickets
    enableInlineEditing(ticket); // enables inline editing for the newly added ticket
}

//TASK 3
function highlightHighPriorityTickets() { // highlights high priority tickets
    const highPriorityTickets = document.querySelectorAll('.ticket'); // selects all tickets
    const ticketsArray = Array.from(highPriorityTickets); // converts nodelist to array

    ticketsArray.forEach(ticket => { // loops through each ticket
        const priorityLabel = ticket.querySelector('label'); // selects the priority label of each ticket
        const priorityText = priorityLabel.textContent.trim();
        
        if (priorityText === 'Priority: High') { // checks to see if priority is 'High' 
            ticket.style.backgroundColor = 'red'; // highlights high priority tickets in red 
        } else {
            ticket.style.backgroundColor = ''; // removes any background color if not 'High'
        }
    });
}

//TASK 5

function enableInlineEditing(ticket) { // enables inline editing for a ticket
    ticket.addEventListener('dblclick', function() { // adds event listener for double click
        const nameHeading = ticket.querySelector('h3'); 
        const issueParagraph = ticket.querySelector('p'); 
        const priorityLabel = ticket.querySelector('label');

        const existingSaveButton = ticket.querySelector('button');
        if (existingSaveButton) {
            existingSaveButton.remove(); // removes the existing save button before adding a new one
        }

        // replaces text with input fields
        nameHeading.innerHTML = `<input type="text" value="${nameHeading.textContent}">`;
        issueParagraph.innerHTML = `<input type="text" value="${issueParagraph.textContent}">`;
        priorityLabel.innerHTML = `<input type="text" value="${priorityLabel.textContent}">`;

        const saveButton = document.createElement('button'); // creates a save button
        saveButton.textContent = 'Save'; 
        saveButton.addEventListener('click', function() { // adds event listener to save button
            nameHeading.textContent = nameHeading.querySelector('input').value; 
            issueParagraph.textContent = issueParagraph.querySelector('input').value; 
            priorityLabel.textContent = priorityLabel.querySelector('input').value; 
            ticket.removeChild(saveButton); // removes the save button after updating

            highlightHighPriorityTickets();
        });

        ticket.appendChild(saveButton); // appends the save button to the ticket
    });
}
