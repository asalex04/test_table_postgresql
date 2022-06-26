export const FILTERS = {
    'равно': (data, search) => data == search,
    'больше': (data, search) => data > search,
    'меньше': (data, search) => data < search,
    'содержит': (data, search) => String(data).includes(search),
}
export const RENAME = {
    Название: 'title',
    Количество: 'quantity',
    Расстояние: 'distance'
}
