function retas(ponto1,ponto2,vetor1, vetor2){
    // [x0,y0,z0], [x1,y1,z1], [abc], [def]
    let reta = ["x","y","z"]
    let t_1_reta = ["tx","ty","tz"]
    let reta2 = ["x","y","z"]
    let t_2_reta = ["tx","ty","tz"]
    let intersecao = ["x","y","z"]
    let h = ["hx","hy","hz"]
   
   /////////DEFINIÇÃO DOS VALORES PASSADOS//////////////
   
    console.log("O ponto A é:("+ponto1+ ")")
    console.log("O ponto B é:("+ponto2+ ")")
    console.log("\nO 1º vetor é:("+vetor1+ ")")
    console.log("O 2º vetor é:("+vetor2+ ")")
    console.log("\nA equação vetorial da 1ª reta é: (" +reta + ") = ("+ponto1 + ") + t(" + vetor1 +")")
    console.log("A equação vetorial da 2ª reta é: (" +reta2 + ") = ("+ponto2 + ") + t(" + vetor2 +")\n")
   
   ////////////EQUAÇÃO PARAMÉTRICA////////////////
   
    const retaX = ponto1[0]+"+"+vetor1[0]+"t"
    const retaY = ponto1[1]+"+"+vetor1[1]+"t"
    const retaZ = ponto1[2]+"+"+vetor1[2]+"t"
    console.log("A equação paramétrica da 1ª reta:\n\t|X = " + retaX + "\n\t|Y = "+retaY+"\n\t|Z = "+retaZ+"\n")
   
    const retaX2 = ponto2[0]+"+"+vetor2[0]+"t"
    const retaY2 = ponto2[1]+"+"+vetor2[1]+"t"
    const retaZ2 = ponto2[2]+"+"+vetor2[2]+"t"
    console.log("A equação paramétrica da 2ª reta:\n\t|X = " + retaX2 + "\n\t|Y = "+retaY2+"\n\t|Z = "+retaZ2+"\n")
   
    console.log("\nCalculo do tipo de retas:\n")
   
    ///////////CALCULO DE IGUALDADE DOS VETORES//////////////
       
     const ad = vetor1[0]/vetor2[0]
     const be =  vetor1[1]/vetor2[1]
     const cf = vetor1[2]/vetor2[2]
     
    /////////////////////RETAS PARALELAS//////////////
       
    if(ad == be && be == cf){
        console.log("\n\nAs reta 1 e 2 são paralela")
        const retaX = ponto1[0]+"+"+vetor2[0]+"t"
        const retaY = ponto1[1]+"+"+vetor2[1]+"t"
        const retaZ = ponto1[2]+"+"+vetor2[2]+"t"
        console.log("\nPara conferir qual o tipo de paralela temos:\n\t|X = " + retaX + "\n\t|Y = "+retaY+"\n\t|Z = "+retaZ + "\n")
       
        t_1_reta[0] = (ponto1[0]-ponto2[0])/vetor2[0]
        t_1_reta[1] = (ponto1[1]-ponto2[1])/vetor2[1]
        t_1_reta[2] = (ponto1[2]-ponto2[2])/vetor2[2]
        console.log("\t|tx = " + t_1_reta[0] + "\n\t|ty = "+t_1_reta[1]+"\n\t|tz = "+t_1_reta[2])
        if(t_1_reta[0] == t_1_reta[1] &&  t_1_reta[1] == t_1_reta[2]){
            console.log("\n As retas são paralelas coincidentes")
        }
        else{
             console.log("\nAs retas são paralelas distintas")
        }
       
        /////////////RETAS CONCORRENTES//////////////
           
    }else{
        const retaX = ponto1[0]+"+"+vetor1[0]+"h"
        const retaY = ponto1[1]+"+"+vetor1[1]+"h"
        const retaZ = ponto1[2]+"+"+vetor1[2]+"h"
        console.log("r1:\n\t|X = " + retaX + "\n\t|Y = "+retaY+"\n\t|Z = "+retaZ+"\n")
       
        const retaX2 = ponto2[0]+"+"+vetor2[0]+"t"
        const retaY2 = ponto2[1]+"+"+vetor2[1]+"t"
        const retaZ2 = ponto2[2]+"+"+vetor2[2]+"t"
        console.log("r2:\n\t|X = " + retaX2 + "\n\t|Y = "+retaY2+"\n\t|Z = "+retaZ2)
       
        /////////////CALCULO DE H E T//////////////
        const h = (ponto2[0] - ponto1[0] + vetor2[0]) / vetor2[0];
        const t = (ponto2[1] - ponto1[1] + vetor2[1]) / vetor1[1];

        /////////////CALCULO DOS NOVOS PONTOS//////////////
        ponto1[0] = (ponto2[0] - ponto1[0] + vetor2[0]) - (vetor2[0] * (ponto2[1] - ponto1[1] + vetor2[1]) / vetor1[1]) / (vetor2[0] - (vetor2[1] * vetor2[0]) / vetor1[1]);
        console.log("\nX0 = " + ponto1[0]);
        
        ponto2[0] = ponto1[0] + h;
        console.log("X1 = " + ponto2[0]);
        
        ponto1[1] = (ponto2[1] - ponto1[1] + vetor2[1]) - (vetor2[1] * (ponto2[0] - ponto1[0] + vetor2[0]) / vetor2[0]) / (vetor1[1] - (vetor2[0] * vetor2[1]) / vetor2[0]);
        console.log("Y0 = " + ponto1[1]);
        
        /////////////CALCULO DE Z//////////////
        const zR1 = ponto1[2] + vetor1[2] * h;
        const zR2 = ponto2[2] + vetor2[2] * t;
        console.log("Z da reta r1 = " + zR1);
        console.log("Z da reta r2 = " + zR2);
        
        if (zR1 === zR2){
            console.log("\nAs retas são concorrentes e se interceptam em:" + ponto1[0] + ", " + ponto1[1]+ ","+zR1);
        }else{
            ///////////////RETAS REVERSAS//////////////
            console.log("\nAs retas 1 e 2 são reversas")
        }
    }
}

console.log("Calculo da equação da reta\n")
retas([2,5,0],[0,0,0],[2,2,2],[1,3,2])
// [x0,y0,z0], [x1,y1,z1], [abc], [def]
