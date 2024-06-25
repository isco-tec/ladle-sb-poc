import type { GlobalProvider } from '@ladle/react'
import '../src/index.css'

export const Provider: GlobalProvider = ({ children, globalState }) => (
    <div className='flex flex-col gap-4'>{children}</div>
)