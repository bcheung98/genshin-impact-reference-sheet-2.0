export const formatTalents = (talent) => {
    switch (talent) {
        case "Freedom":
        case "Prosperity":
            talent += " (Mon/Thu)";
            break;
        case "Resistance":
        case "Diligence":
            talent += " (Tue/Fri)"
            break;
        case "Ballad":
        case "Gold":
            talent += " (Wed/Sat)"
            break;
        default:
            talent += "";
    }
    return talent;
}

export const formatBossMats = (bossMat) => {
    switch (bossMat) {
        case "Dvalin's Claw":
        case "Dvalin's Plume":
        case "Dvalin's Sigh":
            bossMat += " (Stormterror)";
            break;
        case "Ring of Boreas":
        case "Spirit Locket of Boreas":
        case "Tail of Boreas":
            bossMat += " (Andrius)";
            break;
        case "Shadow of the Warrior":
        case "Shard of a Foul Legacy":
        case "Tusk of Monoceros Caeli":
            bossMat += " (Childe)";
            break;
        case "Bloodjade Branch":
        case "Dragon Lord's Crown":
        case "Gilded Scale":
            bossMat += " (Azhdaha)";
            break;
    }
    return bossMat;
}