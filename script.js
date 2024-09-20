const terminalContent = document.getElementById('terminal-content');
const commandInput = document.getElementById('command-input');

// Define the commands for the terminal
const commands = {
    help: 'Available commands: about, skills, projects, contact, linkedin, github, email, clear',
    about: 'Hi, I\'m Kshitij, a passionate web developer with experience in HTML, CSS, and JavaScript.',
    skills: 'Skills: HTML, CSS, JavaScript, React, Node.js',
    projects: `
1. Portfolio Website - A personal portfolio to showcase my projects.
2. E-commerce App - An online store built using React and Node.js.
3. To-Do List - A simple to-do list app built with vanilla JavaScript.`,
    contact: 'You can reach me via email or check out my profiles on LinkedIn and GitHub.',
    linkedin: 'LinkedIn profile: https://www.linkedin.com/in/98kshitij',
    github: 'GitHub profile: https://github.com/98kshitij',
    email: 'Email: kmr.kshitij@gmail.com',
    clear: ''
};

// Typing animation for terminal output
function typeEffect(text, element, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(type, 50); // Speed of typing
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Function to handle commands
function handleCommand(input) {
    const outputElement = document.createElement('div');
    const promptElement = document.createElement('span');
    promptElement.classList.add('prompt');
    promptElement.innerHTML = '[portfolio@kshitij]$ ';
    outputElement.appendChild(promptElement);

    // Display the typed command
    outputElement.innerHTML += `${input}`;
    terminalContent.appendChild(outputElement);

    const responseElement = document.createElement('div');

    if (commands[input]) {
        if (input === 'clear') {
            terminalContent.innerHTML = ''; // Clear the terminal content
        } else {
            typeEffect(commands[input], responseElement, () => {
                if (input === 'linkedin') {
                    window.open('https://www.linkedin.com/in/98kshitij', '_blank');
                } else if (input === 'github') {
                    window.open('https://github.com/98kshitij', '_blank');
                } else if (input === 'email') {
                    window.open('mailto:kmr.kshitij@gmail.com');
                }
            });
        }
    } else {
        typeEffect(`Command not found: ${input}`, responseElement);
    }

    // Append the response
    terminalContent.appendChild(responseElement);

    // Scroll to the bottom after output
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Event listener for the command input
commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim().toLowerCase();
        handleCommand(input);
        commandInput.value = ''; // Clear the input field after each command
    }
});
