export const loadState = () => {
    try {
        const serializedData = localStorage.getItem("state");
        if(serializedData == null) return undefined;
        return JSON.parse(serializedData);
    } catch (e){
        console.log("Error al cargar el state "+e);
        return undefined;
    }
}

export const saveData = (data) => {
    try {
        const serializedDataSave = JSON.stringify(data);
        localStorage.setItem("state", serializedDataSave);
    } catch (e){
        console.log("Error al guardar el state "+e);
    }
}