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
            console.log("\n As retas são paralelas coincidentes\n\n")
        }
        else{
             console.log("\nAs retas são paralelas distintas\n\n")
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
        console.log("r2:\n\t|X = " + retaX2 + "\n\t|Y = "+retaY2+"\n\t|Z = "+retaZ2+"\n")
       
        /////////////CALCULO DE H E T//////////////
        const h = (ponto2[0] - ponto1[0] + vetor2[0]) / vetor2[0];
        const t = (ponto2[1] - ponto1[1] + vetor2[1]) / vetor1[1];

        /////////////CALCULO DOS NOVOS PONTOS//////////////
        ponto1[0] = (ponto2[0] - ponto1[0] + vetor2[0]) - (vetor2[0] * (ponto2[1] - ponto1[1] + vetor2[1]) / vetor1[1]) / (vetor2[0] - (vetor2[1] * vetor2[0]) / vetor1[1]);
        console.log("X0 = " + ponto1[0]);
        
        ponto2[0] = ponto1[0] + h;
        console.log("X1 = " + ponto2[0]);
        
        ponto1[1] = (ponto2[1] - ponto1[1] + vetor2[1]) - (vetor2[1] * (ponto2[0] - ponto1[0] + vetor2[0]) / vetor2[0]) / (vetor1[1] - (vetor2[0] * vetor2[1]) / vetor2[0]);
        console.log("Y0 = " + ponto1[1]);
        
        /////////////CALCULO DE Z//////////////
        const zR1 = ponto1[2] + vetor1[2] * h;
        const zR2 = ponto2[2] + vetor2[2] * t;
        console.log("Z da reta r1 = " + zR1);
        console.log("Z da reta r2 = " + zR2);
        
        /////////////CALCULO DO ÂNGULO//////////////
        const produtoEscalar = (vetor1[0]*vetor2[0]+vetor1[1]*vetor2[1]+vetor1[2]*vetor2[2]);
        
        const distV1 = Math.sqrt(Math.pow(vetor1[0],2)+ Math.pow(vetor1[1],2)+Math.pow(vetor1[2],2));
        const distV2 = Math.sqrt(Math.pow(vetor2[0],2)+ Math.pow(vetor2[1],2)+Math.pow(vetor2[2],2));

        const angulo = ((Math.acos(produtoEscalar/(distV1*distV2))*180)/Math.PI).toFixed(2);
        
        if (zR1 === zR2){
            console.log("\nAs retas são concorrentes e se interceptam no ponto:(" + ponto1[0] + "," + ponto1[1]+ ","+zR1 +")\n");
            console.log("Ângulo:" + angulo+"º\n\n")
            
        }else{
            ///////////////RETAS REVERSAS//////////////
            console.log("\nAs retas 1 e 2 são reversas\n\n")
        }
    }
}


function plano(ponto,vetor,pontoIntersecao,vetorIntersecao){
            //[x2,y2,z2], [abc],[x0,y0,z0],[def]
    let pontoDoPlano = ["x","y","z"]
    
    /////////DEFINIÇÃO DOS VALORES PASSADOS//////////////
   
    console.log("O ponto A é:("+ponto+ ")")
    console.log("O ponto no plano é:("+pontoDoPlano+ ")")
    console.log("\nO vetor é:("+vetor+ ")")
    console.log("\nA equação do plano é: ax + by + cz + d = 0")
   
   ////////////EQUAÇÃO DO PLANO////////////////
   
    const AP = (pontoDoPlano[0] + "-" + ponto[0] + ","+ pontoDoPlano[1] +"-" +ponto[1] +","+ pontoDoPlano[2]+"-" + ponto[2]);
    console.log ("AP = "+ AP)
    var d = -(vetor[0]*ponto[0] + vetor[1] * ponto[1] + vetor[2] * ponto[2]);
    console.log(`A variável d é igual a = ${d}`)
    const aX = vetor[0]*ponto[0]
    const bY = vetor[0]*ponto[1]
    const cZ = vetor[0]*ponto[2]
    const valorFinalD = (-aX + (-bY)+ (-cZ) + d)
    const equacao = (vetor[0]+"x + "+vetor[1]+"y + " + vetor[2]+"z " + valorFinalD +" = 0");
    console.log("A equação do plano é :" + equacao+"\n")
    
    ////////////CALCULO DA INTERSEÇÃO////////////////
    const retaX = pontoIntersecao[0]+"+"+vetorIntersecao[0]+"t"
    const retaY = pontoIntersecao[1]+"+"+vetorIntersecao[1]+"t"
    const retaZ = pontoIntersecao[2]+"+"+vetorIntersecao[2]+"t"
    console.log("r:\t|X = " + retaX + "\n\t|Y = "+retaY+"\n\t|Z = "+retaZ+"\n")
    
    ////////////CALCULO DO VALOR DE T////////////////
    var t = (-vetor[0] * pontoIntersecao[0] - vetor[1] * pontoIntersecao[1] - vetor[2] * pontoIntersecao[2] - valorFinalD) / (vetor[0] * vetorIntersecao[0] + vetor[1] * vetorIntersecao[1] + vetor[2] * vetorIntersecao[2]);
    console.log("Valor de t é:"+t+"\n")
    
    ////////////CALCULO DOS NOVOS PONTOS////////////////
    const pontoX0 = pontoIntersecao[0]+vetorIntersecao[0]*t
    const pontoY0 = pontoIntersecao[1]+vetorIntersecao[1]*t
    const pontoZ0 = pontoIntersecao[2]+vetorIntersecao[2]*t
    console.log(`A interseção da reta com o plano é no ponto (${pontoX0},${pontoY0},${pontoZ0})`)
    
    ////////////CALCULO DO ANGULO////////////////    
    var cos = Math.acos(Math.abs((vetorIntersecao[0] * vetor[0] + vetorIntersecao[1] * vetor[1] + vetorIntersecao[2]* vetor[2]) / (Math.sqrt(Math.pow(vetorIntersecao[0],2)+  Math.pow(vetorIntersecao[1],2) + Math.pow(vetorIntersecao[2],2)) * Math.sqrt(Math.pow(vetor[0],2) + Math.pow(vetor[1],2)+ Math.pow(vetor[2],2)))));
    var angulo = (90 - (cos * 180 / Math.PI)).toFixed(2);
    console.log(`Ângulo de:${angulo}º`)

}

console.log("---------------Calculo da equação da reta---------------\n")
retas([2,5,0],[0,0,0],[2,2,2],[1,3,2])
// [x0,y0,z0], [x1,y1,z1], [abc], [def]


console.log("\n\n---------------Calculo do plano---------------\n")
plano([1,0,0],[2,-1,3],[-1,5,3],[2,3,-1])
    //[x2,y2,z2], [abc],[x0,y0,z0],[def]
