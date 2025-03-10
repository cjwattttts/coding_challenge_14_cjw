//TASK 2
function addTicket(name, issue, priority) { // creates a support ticket
    const ticket = document.createElement('div'); // creates a div for the ticket
    ticket.classList.add('ticket'); // adds a class to the ticket

    const nameHeading = document.createElement('h3'); // creates the heading for the customer’s name
    nameHeading.textContent = name; 

    const issueParagraph = document.createElement('p'); // creates the paragraph for the issue description
    issueParagraph.textContent = issue; 

    const priorityLabel = document.createElement('label'); // creates label for priority level
    priorityLabel.textContent = `Priority: ${priority}`; // sets priority level

    const resolveButton = document.createElement('button'); // creates the resolve button
    resolveButton.textContent = 'Resolve'; 
    resolveButton.classList.add('resolve-button'); // adds a class for styling

    resolveButton.addEventListener('click', function(event) { // adds event listener (click) to resolve button
        event.stopPropagation(); // stops event from bubbling
        ticket.remove(); // removes the ticket from the DOM
    });

    // appends elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer'); // selects the ticket container
    ticketContainer.appendChild(ticket); // appends the ticket to the container
}

