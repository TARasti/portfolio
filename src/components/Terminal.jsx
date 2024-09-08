import React, { useEffect, useRef, useState } from 'react';
import '../css/Terminal.css'; // Assuming this path is correct
import { ABOUT_ME, SKILLS, TERMINAL_COMMANDS } from '../constants'; // Import any constant data

const Terminal = () => {

    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const command = input.trim().toLowerCase();
        if (command) {
            const response = executeCommand(command);
            if (response) {
                setHistory([...history, { command: input, response }]);
            } else {
                setHistory([])
            }
            setInput(''); // Clear the input field
        }
    };

    const executeCommand = (command) => {
        switch (command) {
            case 'about':
                return ABOUT_ME;
            case 'skills':
                return SKILLS;
            case 'contact':
                return 'You can reach me at: ktanveerahmed8@gmail.com';
            case 'clear':
                return '';
            case 'help':
                return TERMINAL_COMMANDS;
            default:
                return 'Unknown command. Type "help" for a list of commands.';
        }
    };

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };;

    return (
        <div className="terminal" ref={terminalRef} onClick={handleTerminalClick}>
            <div className="terminal-history">
                {history.map((entry, index) => (
                    <div key={index}>
                        <div className="command">{`> ${entry.command}`}</div>
                        <div className="response">{entry.response}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    autoFocus
                    placeholder="Type a command and press Enter"
                />
            </form>
        </div>
    );
};

export default Terminal;
