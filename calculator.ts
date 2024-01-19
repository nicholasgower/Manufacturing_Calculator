// @ts-check

let rpm = (sfm: number, D: number) => sfm*3.82/D ;
let ipr = (IPM: number, RPM:number) => IPM/ RPM;
let IPM = (RPM:number, IPT:number, Z:number) => RPM*IPT*Z;
let IPT= (IPM:number, RPM:number, Z:number) => IPM/ RPM/Z;

function materialProperties(material: string){
    
    let materialStats: number[]=[];
    switch(material){
        // Material stats: min_sfm, max_sfm, min_ipt, max_ipt
        case "Aluminum":
            materialStats=[400,600,0.001,0.006];
            break;
        case "Low_Carbon_Steel":
            materialStats=[50,80,0.001,0.004];
            break;
        case "Alloy_Steel":
            materialStats=[40,60,0.001,0.004];
            break;
        case "Stainless":
            materialStats=[30,60,0.0005,0.004];
            break;
        default:
            break;
   
    }
    return materialStats;
}

function calculateValues(D: number, teeth: number,material: string){
    let materialStats: number[]=materialProperties(material);
    let min_sfm: number=materialStats[0];
    let max_sfm: number=materialStats=[1];
    let min_ipt: number=materialStats[2];
    let max_ipt: number=materialStats[3];

    let rpm_val=rpm(max_sfm,D);


    return 
}