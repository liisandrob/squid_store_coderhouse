import db from "db/productos";

const fetchSimulator = (params = false, time = false) => {
  const timeout = time ? time : 2000;
  const { categoryName, itemId } = params;
  let res
  if (categoryName) res = db.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
  else if (itemId)  res = db.find(item => item.id === parseInt(itemId))
  else res = db;
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if((categoryName && res.length > 0) || (itemId && res) || (res.length === db.length)) resolve(res)
      else reject('Error en parámetros enviados')
    }, timeout)
  })
}

export default fetchSimulator;