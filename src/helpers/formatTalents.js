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