const db = [
  {
    imgUrl : 'https://cf.shopee.ph/file/65468098864b3c9214eee0fbba7b9606',
    type: 'Ropa',
    price: 2000,
    detail: 'Remera con soldados',
    name: 'Remera Modelo 1',
    stock: 5
  },
  {
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nTDAf0HeW20Zym4atrow2DXJaudKn05v-A&usqp=CAU',
    type: 'Ropa',
    price: 1500,
    detail: 'Remera con números',
    name: 'Remera Modelo 2',
    stock: 3
  },
  {
    imgUrl : 'https://m.media-amazon.com/images/I/51YASTF6vmL._AC_UL1057_.jpg',
    type: 'Merchandising',
    price: 700,
    detail: 'Llavero de soldados',
    name: 'Llavero',
    stock: 12
  },
]

const fetchSimulator = (info = false) => {
  return new Promise((resolve) => {
    setTimeout(function() {
      if (info) resolve(info)
      else resolve(db)
    }, 3000)
  })
}

export default fetchSimulator;