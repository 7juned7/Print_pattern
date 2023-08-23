const genratePattern = document.querySelector(".genrate-pattern");

input = document.querySelector("input")
selectedPattern = document.querySelector(".selected-pattern")


let funcsArr = [rightTriangleStarPattern,invertedRightTriangleStarPattern,mirroredTriangleStarPattern,invertedTriangleStarPattern,pyramidStarPattern,invertedPyramidStarPattern];

const patterns = document.querySelectorAll(".patterns");


pat_array = [...patterns];

pat_array.forEach(element=>{
    element.addEventListener("click",()=>{
      const id =  element.id;
       let func =  mapFunction(id);
       func();
       
       
       
    })
})
function mapFunction(id){
    const func = funcsArr[id];
   return func;
}





 
    function rightTriangleStarPattern(){
        console.log("RTSP");
        clear();
        alignItemsremove()
        const userRow = document.querySelector('input').value ;
    
        for( row = 0;row<userRow;row++){
            const el = document.createElement("div");
            el.classList.add('star');
            for(let col = 0; col<=row ; col++){
               
                
               const para = document.createElement("div");
               para.innerText= "★";
                   el.appendChild(para)
                   
                   
                genratePattern.appendChild(el)
            }
            
           
            
               
           
        }
       console.log("done")
       clearTimeout();
       
    }



    
    function invertedTriangleStarPattern(){
        console.log("ITSP");
        clear();
        alignItemsremove()
        const userRow = document.querySelector('input').value ;
        
            for( row = userRow;row>0;row--){
                const el = document.createElement("div");
                el.classList.add('star');
               el.style.justifyContent="flex-end"
                for(let col = 0; col<row ; col++){
                   
                    
                   const para = document.createElement("div");
                   para.innerText= "★";
                       el.appendChild(para)
                       
                       
                    genratePattern.appendChild(el)
                }
               
                
                   
               
            }
          
    }


function invertedRightTriangleStarPattern(){
    alignItemsremove()
    clear();
    console.log("IRTSP");
    const userRow = document.querySelector('input').value ;
    
        for( row = userRow;row>0;row--){
            const el = document.createElement("div");
            el.classList.add('star');
           
            for(let col = 0; col<row ; col++){
               
                
               const para = document.createElement("div");
               para.innerText= "★";
                   el.appendChild(para)
                   
                   
                genratePattern.appendChild(el)
            }
           
            
               
           
        }
       
}

function mirroredTriangleStarPattern(){
    console.log("MTSP");
   clear();
   alignItemsremove()
    const userRow = document.querySelector('input').value ;
    
        for( row = 0;row<userRow;row++){
            const el = document.createElement("div");
            el.classList.add('star');
            el.style.justifyContent = "flex-end"
            for(let col = 0; col<=row ; col++){
                
                
               const para = document.createElement("div");
               para.innerText= "★";
                   el.appendChild(para)
                   
                   
                genratePattern.appendChild(el)
            }
           
            
               
           
        }
        return;
}

function pyramidStarPattern(){
    console.log("PSP");

    clear();
    justifyContentCenter()
   
   
    const userRow = document.querySelector('input').value ;

    for( row = 0;row<userRow;row++){
        const el = document.createElement("div");
        el.classList.add('star');
        
        for(let col = 0; col<=row ; col++){
        
            
           const para = document.createElement("div");
           para.innerText= "★";
               el.appendChild(para)
               
               
            genratePattern.appendChild(el)
            

        }
        
       
        
           
       
    }
    return;
}
function invertedPyramidStarPattern(){
    console.log("IPSP");

    clear();
justifyContentCenter();
    
   
   
    const userRow = document.querySelector('input').value ;

    for( row = userRow;row>0;row--){
        const el = document.createElement("div");
        el.classList.add('star');
        
        for(let col = row; col>0 ; col--){
           
            
           const para = document.createElement("div");
           para.innerText= "★";
               el.appendChild(para)
               
               
            genratePattern.appendChild(el)
            

        }
        
       
        
           
       
    }
    return;
}


function clear(){
  genratePattern.innerText = "";
 

   
}
function justifyContentCenter(){
    
genratePattern.style.alignItems = "center";
   return;
}
function alignItemsremove(){
    genratePattern.style.alignItems = "";
}