const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));


// Función que retorna los datos de provincias
const obtenerPcias = async() => {
    await retrasar(1800);

    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
        const jsonResp = await consulta.json().then(resp=>resp.provincias);
        return jsonResp;
    } catch (error) {
        return error
    }
}


// Función que retorna los datos de departamentos
const obtenerDptos = async() => {
    await retrasar(1391);

    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos?campos=completo&max=1000');
        const jsonResp = await consulta.json().then(resp=>resp.departamentos);
        return jsonResp;
    } catch (error) {
        return error
    }
}


// Función que retorna los datos de localidades
const obtenerLocalidades = async() => {
    await retrasar(900);

    try {
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades?campos=completo&max=5000');
        const jsonResp = await consulta.json().then(resp=>resp.localidades);
        return jsonResp;
    } catch (error) {
        return error
    }
}

export {
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades
}