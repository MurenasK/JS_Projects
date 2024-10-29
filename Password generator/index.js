

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSimbols)
{
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbol = "!@#$%^&*";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : "";
    allowedChars += includeUpperCase ? upperCase : "";
    allowedChars += includeNumbers ? numberChar : "";
    allowedChars += includeSimbols ? symbol : "";


    for(let i = 0; i < length; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }



    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSimbols = false;


const password = generatePassword(passwordLength,
                                 includeLowerCase,
                                 includeUpperCase,
                                 includeNumbers,
                                 includeSimbols);

console.log(`Generated password:  ${password}`);