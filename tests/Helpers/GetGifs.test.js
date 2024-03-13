import { getGifs } from "../../src/Helpers/GetGifs"

describe('Pruebas en getGifs Helper', () => { 

    test('La funcion debe retornar un objeto con las propiedades correctas', async () => { 

        const category = 'One Punch'
        const gifs = await getGifs(category)

        expect(gifs.length).toBeGreaterThan(0)

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

     })
 })