const initialState = {
    element: [],
    weapon: [],
    rarity: [],
    talent: [],
    bossMat: [],
    localMat: [],
    nation: []
}

const filterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined) {
        let targetButton;
        if (target === "4" || target === "5") {
            targetButton = document.getElementById(`${target}-button`);
        }
        else {
            targetButton = document.getElementById(`${target.toLowerCase()}-button`);
        }
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        case "SET_ELEMENT_FILTERS":
            let tempElement = [...state.element];
            !state.element.includes(target) ? tempElement.push(target) : tempElement.splice(tempElement.indexOf(target), 1);
            return {
                ...state,
                element: tempElement
            }
        case "SET_WEAPON_FILTERS":
            let tempWeapon = [...state.weapon];
            !state.weapon.includes(target) ? tempWeapon.push(target) : tempWeapon.splice(tempWeapon.indexOf(target), 1);
            return {
                ...state,
                weapon: tempWeapon
            }
        case "SET_RARITY_FILTERS":
            let tempRarity = [...state.rarity];
            !state.rarity.includes(parseInt(target)) ? tempRarity.push(parseInt(target)) : tempRarity.splice(tempRarity.indexOf(parseInt(target)), 1);
            return {
                ...state,
                rarity: tempRarity
            }
        case "SET_TALENT_FILTERS":
            let tempTalent = [...state.talent];
            !state.talent.includes(target) ? tempTalent.push(target) : tempTalent.splice(tempTalent.indexOf(target), 1);
            return {
                ...state,
                talent: tempTalent
            }
        case "SET_BOSS_MAT_FILTERS":
            let tempBossMat = [...state.bossMat];
            !state.bossMat.includes(target) ? tempBossMat.push(target) : tempBossMat.splice(tempBossMat.indexOf(target), 1);
            return {
                ...state,
                bossMat: tempBossMat
            }
        case "SET_LOCAL_MAT_FILTERS":
            let tempLocalMat = [...state.localMat];
            !state.localMat.includes(target) ? tempLocalMat.push(target) : tempLocalMat.splice(tempLocalMat.indexOf(target), 1);
            return {
                ...state,
                localMat: tempLocalMat
            }
        case "SET_NATION_FILTERS":
            let tempNation = [...state.nation];
            !state.nation.includes(target) ? tempNation.push(target) : tempNation.splice(tempNation.indexOf(target), 1);
            return {
                ...state,
                nation: tempNation
            }
        default:
            return state
    }
}

export default filterReducer;