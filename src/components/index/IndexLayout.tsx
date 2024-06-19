import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

function IndexLayout({children}: Props) {
  return (
    <main className='index-layout'>
        { children }
    </main>
  )
}

IndexLayout.propTypes = {}

export default IndexLayout
