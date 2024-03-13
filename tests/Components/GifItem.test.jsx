import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/Components/GifItem"

describe('Pruebas en <GifItem/>', () => { 

    const url = 'https://www.link.com/snapacshotasdafdkm123213'
    const title = 'Titulo'

    test('Debe recibir title y url obligatoriamente', () => { 

        render( <GifItem url={ url } title={ title }/> )

     })

     test('Debe hacer match con el snapshot', () => { 

        const { container } = render(<GifItem url={url} title={title}/>)

        expect( container ).toMatchSnapshot()

      })

      test('Debe mostrar URL y ALT correctos', () => { 

        render(<GifItem url={url} title={title}/>)
        
        // expect(screen.getByRole('img').src).toBe( url )

        const { src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

      })

      test('Debe mostrar el titulo en el componente', () => { 

        render(<GifItem url={url} title={title}/>)
        expect( screen.getByText( title )).toBeTruthy()

       })
 })