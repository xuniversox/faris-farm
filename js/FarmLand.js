/*

FarmLand System / Stage System

Works by FarmLand_Switcher Label
Determining Which Stage to play

Starts at "Begin" and Stops at "End"
*/

FarmLand_Switcher = "none";

class FarmLand {

    //For Switching Between Different Stages
    
    load() { 
        //LITERALLY LOAD NO SETUP.. LIKE IMAGE FILES...
        lander.load();
        FarmLand_Switcher = "Begin";
    }

    update() {
        switch (FarmLand_Switcher) {
            //START OF FARMLAND GAME
            case 'Begin':
                FarmLand_Switcher = "firstone";
                break;
                
                case 'firstone':
                    //   console.log("firstone");
                // may only run once if farmlandswitcher is changed to current one
                
                lander.update();

              //  FarmLand_Switcher = "secondone";
                break;
                
            case 'secondone':
           //    console.log("secondone");
                break;
            
            //END OF FARMLAND GAME
            case 'End':

                break;
        }
    }

    draw()
    {
        //LITERALLY DRAW FARM LAND
        lander.draw();
    }

}

var fl = new FarmLand();


// STAGE SYSTEM (TOGGLE)