const initialState = {
    element: [],
    weapon: [],
    talent: [],
    bossMat: []
}

const filterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined) {
        let targetButton = document.getElementById(`${target.toLowerCase()}-button`);
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
        default:
            return state
    }
}

export default filterReducer;