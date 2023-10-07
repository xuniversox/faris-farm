
var lander_image = new Image();

Land_Level_One = [
    [3, 3, 3],
    [0, 0, 1],
    [0, 2, 2]
];

var xstep = 0, ystep = 0;

class Lander {
    load() {
        lander_image.src = "/img/Modern_Farm_Alpha_v0.2/RPG_Maker_MV/Modern_Farm_Terrains_A2.png";


       
    }

    update() {
        //    console.log("update");
    }
    draw() {
        
        
        for (xstep = 0; xstep <= 2; xstep++) {
            for (ystep = 0; ystep <= 2; ystep++) {
                
                console.log(Land_Level_One[ystep][xstep]);
                switch (Land_Level_One[ystep][xstep])
                {
                    case 0:
                        ctx.drawImage(lander_image,
                            //source
                            16, 0,
                            16, 16,
                            //dest
                            16 * xstep, 16 * ystep,
                            16, 16);

                        break;
                       case 3:
                        ctx.drawImage(lander_image,
                            //source
                            80, 30,
                            16, 16,
                            //dest
                            16 * xstep, 16 * ystep,
                            16, 16);

                        break;
                     case 2:
                        ctx.drawImage(lander_image,
                            //source
                            24, 10,
                            16, 16,
                            //dest
                            16 * xstep, 16 * ystep,
                            16, 16);

                        break;
                }
                
                    
            }
                }
        }
               
    }      
    
    var lander = new Lander();