import { supriseMePrompts } from '../constants' 


export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * supriseMePrompts.length);

    const randomPrompt = supriseMePrompts[randomIndex];

    if(randomIndex === prompt) {
        return getRandomPrompt(prompt);
    }

    return getRandomPrompt;
}