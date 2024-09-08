import React, { useContext, useEffect, useRef, useState } from 'react';
import '../css/Terminal.css';
import { ABOUT_ME, SKILLS, TERMINAL_COMMANDS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AppContextData } from '../contexts/AppContexts';
import { useNavigateTo } from '../hooks/useNavigateTo';

const Terminal = () => {

    const appContextData = useContext(AppContextData);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);
    const navigate = useNavigateTo();

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
            setInput('');
        }
    };

    const handleClose = () => {
        setInput('');
        setHistory([]);
        appContextData.setAppData(prev => ({ ...prev, showTerminal: false }));
        return null;
    }

    const executeCommand = (command) => {
        switch (command) {
            case 'about':
                return ABOUT_ME;
            case 'skills':
                return SKILLS;
            case 'contact':
                return 'You can reach me at: ktanveerahmed8@gmail.com';
            case 'open home':
                navigate('/');
                return 'Opening home...';
            case 'open projects':
                navigate('/projects');
                return 'Opening projects...';
            case 'clear':
                return '';
            case 'exit':
                return handleClose();
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
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight; 
        }
    }, [history]);

    return (
        <div className="terminal" ref={terminalRef} onClick={handleTerminalClick}>
            <div className='d-flex justify-content-end'>
                <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={handleClose} />
            </div>
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
                    id="input-focus"
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
