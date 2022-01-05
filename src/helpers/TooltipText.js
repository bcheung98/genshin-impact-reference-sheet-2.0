export const formatTalents = (talent) => {
    switch (talent) {
        case "Freedom":
        case "Prosperity":
        case "Transience":
            talent += " (Mon/Thu)";
            break;
        case "Resistance":
        case "Diligence":
        case "Elegance":
            talent += " (Tue/Fri)"
            break;
        case "Ballad":
        case "Gold":
        case "Light":
            talent += " (Wed/Sat)"
            break;
        default:
            talent += "";
    }
    return talent;
}

export const formatBossMats = (material) => {
    switch (material) {
        case "Dvalin's Claw":
        case "Dvalin's Plume":
        case "Dvalin's Sigh":
            material += " (Stormterror)";
            break;
        case "Ring of Boreas":
        case "Spirit Locket of Boreas":
        case "Tail of Boreas":
            material += " (Andrius)";
            break;
        case "Shadow of the Warrior":
        case "Shard of a Foul Legacy":
        case "Tusk of Monoceros Caeli":
            material += " (Childe)";
            break;
        case "Bloodjade Branch":
        case "Dragon Lord's Crown":
        case "Gilded Scale":
            material += " (Azhdaha)";
            break;
        case "Ashen Heart":
        case "Hellfire Butterfly":
        case "Molten Moment":
            material += " (Signora)";
            break;
        default:
            return material;
    }
    return material;
}

export const formatCommonMats = (material) => {
    switch (material) {
        case "Arrow":
            material = "Hilichurl Arrow";
            break;
        case "Handguard":
            material = "Nobushi Handguard";
            break;
        case "Mask":
            material = "Hilichurl Mask";
            break;
        case "Nectar":
            material = "Whopperflower Nectar";
            break;
        case "Scroll":
            material = "Samachurl Scroll";
            break;
        case "Specter":
            material = "Specter Core";
            break;
        default:
            return material;
    }
    return material;
}

export const formatAscensionMats = (material) => {
    switch (material) {
        case "Basalt Pillar":
            material += " (Geo Hypostasis)";
            break;
        case "Cleansing Heart":
            material += " (Oceanid)";
            break;
        case "Crystalline Bloom":
            material += " (Cryo Hypostasis)";
            break;
        case "Everflame Seed":
            material += " (Pyro Regisvine)";
            break;
        case "Hoarfrost Core":
            material += " (Cryo Regisvine)";
            break;
        case "Hurricane Seed":
            material += " (Anemo Hypostasis)";
            break;
        case "Juvenile Jade":
            material += " (Primo Geovishap)";
            break;
        case "Lightning Prism":
            material += " (Electro Hypostasis)";
            break;
        case "Marionette Core":
            material += " (Maguu Kenki)";
            break;
        case "Perpetual Heart":
            material += " (Perpetual Mechanical Array)";
            break;
        case "Smoldering Pearl":
            material += " (Pyro Hypostasis)";
            break;
        case "Storm Beads":
            material += " (Thunder Manifestation)";
            break;
        case "Dew of Repudiation":
            material += " (Hydro Hypostasis)";
            break;
        case "Riftborn Regalia":
            material += " (Golden Wolflord)";
            break;
        case "Dragonheir's False Fin":
            material += " (Bathysmal Vishap Herd)";
            break;
        default:
            return material;
    }
    return material;
}

export const formatGemstone = (material) => {
    switch (material) {
        case "Pyro":
            material = "Agnidus Agate Gemstone";
            break;
        case "Hydro":
            material = "Varunada Lazurite Gemstone";
            break;
        case "Electro":
            material = "Vajrada Amethyst Gemstone";
            break;
        case "Cryo":
            material = "Shivada Jade Gemstone";
            break;
        case "Anemo":
            material = "Vayuda Turquoise Gemstone";
            break;
        case "Geo":
            material = "Prithiva Topaz Gemstone";
            break;
        default:
            return material;
    }
    return material;
}