const fecha = new Date()

export const fechaHoy = () => {
  const dia = `${fecha.getDate()}`.padStart(2, 0);
  const mes = `${fecha.getMonth() + 1}`.padStart(2, 0);
  const año = fecha.getFullYear();
  return `${dia}/${mes}/${año}`
}

export const fechaUTC = () => {
  const max = 5;
  const fechaUTC = new Date(fecha.getFullYear(), fecha.getUTCMonth(), 0);
  const diaUTC = `${fecha.getUTCDate() - 1}`.padStart(2, 0);
  const mesUTC = `${fecha.getUTCMonth()}`.padStart(2, 0);
  const añoUTC = fecha.getUTCFullYear();
  const fechaHoy = `${añoUTC}-${mesUTC}-${diaUTC}`;

  if (fecha.getUTCDate() - max > 0) {
    const diaUTCEnd = `${fecha.getDate() - max}`.padStart(2, 0);
    return {
      start: `${añoUTC}-${mesUTC}-${diaUTCEnd}`,
      end: fechaHoy
    }
  }

  const diaUTCEnd = fechaUTC.getUTCDate() - Math.abs(fecha.getUTCDate() - max);
  const mesUTCEnd = `${fechaUTC.getUTCMonth()}`.padStart(2, 0);
  return {
    start: `${añoUTC}-${mesUTCEnd}-${diaUTCEnd}`,
    end: fechaHoy,
  };
}