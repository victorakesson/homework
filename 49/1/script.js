let str1 = " "

for (let i = 0; i < 10; i++ ) {
    for (let j = 0; j < i; j++) {
        str1 = str1 + "*"
    }
    str1 = str1 + "\n" // Lägg till en radbrytning
}

console.log(str1)

let str2 = " "
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str2 = str2 + ' *' 
    }
    str2 = str2 + '\n' 
}

console.log(str2)

let strsquare = ''
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) { 
        strsquare = strsquare + ' * '
    }
    strsquare = strsquare + '\n' 
}

console.log(strsquare)



let strromb = ''
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        strromb = strromb + ' * '
    }
    strromb = strromb + '\n' // Lägg till en radbrytning
    for (let x = 0; x < i + 1; x++) {
        strromb = strromb + ' '
    }
}

console.log(strromb)



