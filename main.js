// Character classes and retreat prompt:

class UssShip {
    constructor(hull, firepower, accuracy, alive) {
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = 0.7,
        this.alive = true
    }
}

class AlienShip {
    constructor(hull, firepower, accuracy, alive) {
        // Math.floor(Math.random() * (max - min + 1)) + min (use this logic to randomize between ranges)
        this.hull = Math.floor(Math.random() * (4) + 3)  // range between 3 and 6
        this.firepower = Math.floor(Math.random() * (3) + 2) // range between 2 and 4
        this.accuracy = Math.random() * (0.2) + 0.6 // range between 0.6 and 0.8
        this.alive = true
    }
}

function retreatOption() {
    console.log("Do you want to continue fighting or retreat?")
    // Player would choose option to continue or retreat
    // If player chooses to retreat, the game is over 
    // If play chooses to continue, the battle continues
}



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



function game() {

    // Introductions of characters:
    console.log("")
    console.log("------------------------------------------------")
    console.log("------------------------------------------------")
    console.log("")

    // this is the USS ship:
    const uss = new UssShip
    console.log("This is the USS HelloWorld Ship:")
    console.log(uss)

    console.log("")
    console.log("------------------------------------------------")
    console.log("")

    // this is the array of 6 alien ships:
    let groupOfAliens = []
    function buildAliens() {
        for (let i = 1; i <= 6; i++) {
            let alien = new AlienShip
            groupOfAliens.push(alien)
        }
    }

    buildAliens()

    console.log("This is the Alien Ship array:")
    console.log(groupOfAliens)

    console.log("")
    console.log("------------------------------------------------")
    console.log("")


    ///////////// The battle begins ///////////// 


    console.log("")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("")

    console.log("Let the battle begin!")

    console.log("")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("")


    // Using a do while loop to perform the battling between player and aliens:

    do {

        // defining attack functions:
        
        function ussAttack() {

            // console prompts:
            console.log("")
            console.log("It's USS HellowWorld's turn to attack...")

            console.log("")
            console.log("------------------------------------------------")
            console.log("------------------------------------------------")
            console.log("")

            console.log("USS HelloWorld's current stats:")
            console.log(`Hull: ${uss.hull}   Firepower: ${uss.firepower}`)

            console.log("")
            console.log("------------------")
            console.log("")

            console.log("Alien Ship's current stats:")
            console.log(`Hull: ${groupOfAliens[0].hull}   Firepower: ${groupOfAliens[0].firepower}`)
            
            console.log("")
            console.log("-------------------------------------------------")
            console.log("-------------------------------------------------")
            console.log("")

            // possible outcomes:
            if (uss.hull <= 0) {
                uss.alive = false
                return // game is over

            } else if (Math.random() < uss.accuracy) {
                console.log(("USS HelloWorld attacks successfully"))
                groupOfAliens[0].hull = groupOfAliens[0].hull - uss.firepower
                console.log(`Alien Ship's hull is now ${groupOfAliens[0].hull}`)

                console.log("")
                console.log("-------------------------------------------------")
                console.log("-------------------------------------------------")
                console.log("")

            } else {
                console.log("USS HelloWorld missed")

                console.log("")
                console.log("------------------------------------------------")
                console.log("------------------------------------------------")
                console.log("")

            }
        }


        function alienAttack() {

             // console prompts:
             console.log("")
             console.log("It's the Alien's turn to attack...")

             console.log("")
             console.log("------------------------------------------------")
             console.log("------------------------------------------------")
             console.log("")
 
             console.log("USS HelloWorld's current stats:")
             console.log(`Hull: ${uss.hull}   Firepower: ${uss.firepower}`)
 
             console.log("")
             console.log("------------------")
             console.log("")
 
             console.log("Alien Ship's current stats:")
             console.log(`Hull: ${groupOfAliens[0].hull}   Firepower: ${groupOfAliens[0].firepower}`)

             console.log("")
             console.log("-------------------------------------------------")
             console.log("-------------------------------------------------")
             console.log("")
 
 
            // possible outcomes:
            if (groupOfAliens[0].hull <= 0) {
                groupOfAliens[0].alive = false
                console.log("USS HelloWorld defeated the alien!!! No attack made on the USS HelloWorld.")
                retreatOption() 

                console.log("")
                console.log("-------------------------------------------------")
                console.log("-------------------------------------------------")
                console.log("")

                groupOfAliens.shift()
                console.log(`Aliens remaining: ${groupOfAliens.length}`)
                console.log(groupOfAliens)

                console.log("")
                console.log("-------------------------------------------------")
                console.log("-------------------------------------------------")
                console.log("")

            } else if (Math.random() < groupOfAliens[0].accuracy) {
                console.log("Alien ship attacks successfully")
                uss.hull = uss.hull - groupOfAliens[0].firepower
                console.log(`USS HelloWorld's hull is now ${uss.hull}`)

                console.log("")
                console.log("-------------------------------------------------")
                console.log("-------------------------------------------------")
                console.log("")

            } else {
                console.log("Alien Ship missed")

                console.log("")
                console.log("-------------------------------------------------")
                console.log("-------------------------------------------------")
                console.log("")
            }
        }

        // Calling ussAttack() and alienAttack() to continue looping until there is a winner:
        ussAttack()
        alienAttack()


        // End of the game prompts:
        if (groupOfAliens.length === 0) {
            console.log("There are no more aliens left. USS HelloWorld wins the game!!!")

            console.log("")
            console.log("-------------------------------------------------")
            console.log("-------------------------------------------------")
            console.log("")
        } 

        if (uss.hull <= 0) {
            console.log("Game over. USS HelloWorld was defeated.")

            console.log("")
            console.log("-------------------------------------------------")
            console.log("-------------------------------------------------")
            console.log("")
        }

    } while ((groupOfAliens.length > 0 && uss.hull > 0) || (uss.hull = 0))
}


// Run the game() to play:
game()



