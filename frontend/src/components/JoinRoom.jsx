import { useNavigate } from '@tanstack/react-router';
import { atom, useAtom } from 'jotai';
import React, { useCallback, useEffect } from 'react';

const codeAtom = atom(["", "", "", "", "", ""]);
const focusedIndexAtom = atom(0);

const JoinRoom = () => {
    const [code, setCode] = useAtom(codeAtom);
    const [focusedIndex, setFocusedIndex] = useAtom(focusedIndexAtom);
    const navigate = useNavigate({from:'/'});


    const handleChange = useCallback((e, index) => {
        // const value = e.target.value;
        // setCode((prev) => {
        //     const newCode = [...prev];
        //     newCode[index] = value;
        //     return newCode;
        // });

        // if (value && index < 5) {
        //     const nextCode = document.getElementById(`input-${index + 1}`);
        //     if (nextCode) {
        //         nextCode.focus();
        //     }
        // }
    }, [setCode]);

    const handleKeyDown = useCallback((e) => {
        const regex = /^[a-z0-9]$/i;

        if (regex.test(e.key) && !isControlKey(e.key)) {
            setCode((prev) => {
                const newCode = [...prev];
                newCode[focusedIndex] = e.key;
                return newCode;
            });
            if (focusedIndex < 5) {
                const nextCode = document.getElementById(`input-${focusedIndex + 1}`);
                if (nextCode) {
                    nextCode.focus();
                }
            }
        } else if (e.key === 'Backspace') {
            if (e.target.value) {
                // If current input has a value, clear it
                setCode((prev) => {
                    const newCode = [...prev];
                    newCode[focusedIndex] = '';
                    return newCode;
                });
            } else {
                // If current input is empty, move to previous input and clear it
                if (focusedIndex > 0) {
                    const prevCode = document.getElementById(`input-${focusedIndex - 1}`);
                    if (prevCode) {
                        prevCode.focus();
                        setCode((prev) => {
                            const newCode = [...prev];
                            newCode[focusedIndex - 1] = '';
                            return newCode;
                        });
                    }
                }
            }
        } else if (e.key == 'ArrowLeft') {
            const prevCode = document.getElementById(`input-${focusedIndex - 1}`);
            if (prevCode) {
                prevCode.focus();
            }
        } else if (e.key == 'ArrowRight') {
            const nextCode = document.getElementById(`input-${focusedIndex + 1}`);
            if (nextCode) {
                nextCode.focus();
            }
        }
    }, [focusedIndex, setCode]);

    const handleFocus = useCallback((e, index) => {
        e.target.select();
        setFocusedIndex(index);
    }, [setFocusedIndex]);

    const handlePaste = useCallback((e) => {
        e.preventDefault();

        if (e.clipboardData.getData("text").length !== 6) return;

        const text = e.clipboardData.getData("text").slice(0, 6);

        //validate the pasted code
        //regex to validate alphanumeric 6 characters
        if (text.length !== 6 || !/^[a-z0-9]+$/.test(text)) return;

        const pasted = text.split("");
        setCode(pasted);
    }, [setCode]);

    const isControlKey = (key) => {
        const controlKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab",
            "Enter",
            "Home",
            "End",
        ];
        return controlKeys.includes(key);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div>
            <div className="w-max h-max p-2 m-2 shadow flex flex-col content-center justify-center items-center bg-blue-300 rounded">
                {/* <div className="p-3 m-2 self-start">
                    <p className="text-2xl font-extrabold text-zinc-950">
                        Join
                    </p>
                    <p className="text-zinc-700 font-extrabold text-base">
                        Enter the invite code
                    </p>
                </div> */}

                <div
                    className="m-2 p-3 flex sm:flex-row gap-2"
                    onPaste={handlePaste}
                    style={{ caretColor: 'transparent' }}
                >
                    {code.map((char, index) => (
                        <input
                            type="text"
                            aria-label="inviteCode"
                            key={index}
                            id={`input-${index}`}
                            maxLength={1}
                            value={char || ''}
                            onChange={(e) => handleChange(e, index)}
                            onFocus={(e) => handleFocus(e, index)}
                            className={`w-10 h-12 font-extrabold text-center bg-zinc-900 text-yellow-300 rounded-md text-2xl
                                 focus:bg-yellow-300 focus:text-zinc-900 transition-colors duration-300 no-cursor
                                 ${focusedIndex === index && char === '' ? 'animate-color-change' : ''}`}
                        />
                    ))}
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                <button
                    type='button'
                    className="font-bold py-2 px-4 rounded button bg-accent disabled:bg-gray-400"
                    disabled={code.join('').length != 6}
                    //change color of button when disabled
                    onClick={() => alert(code)}
                >
                    ENTER
                </button>

                <button
                    type="button"
                    className="font-bold py-2 px-4 rounded bg-accent"
                    onClick={() => {navigate({to:'/createRoom'})}}
                >
                    CREATE ROOM
                </button>
            </div>
        </div>
    );
};

export default JoinRoom;
