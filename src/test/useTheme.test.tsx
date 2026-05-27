import {renderHook, act} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProviders } from '../providers/ThemeProvider'
import { useTheme } from '../hook/useTheme'

describe('useTheme', ()=>{
    it('deve iniciar com o tema light', ()=>{
        const {result} = renderHook(()=> useTheme(),{
            wrapper: ThemeProviders
        })

        expect(result.current.theme).toBe('light')
    })

    it('Deve alternar para dark ao chamar toggleTheme', ()=>{
        const {result} = renderHook(()=> useTheme(),{
            wrapper: ThemeProviders
        })

        act(()=>{
            result.current.toggleTheme()
        })

        expect(result.current.theme).toBe('dark')
    })

    it('Deve lançar erro se usado fora do ThemeProvider', ()=>{
        expect(()=>{
            renderHook(()=> useTheme())
        }).toThrow('UseTheme deve ser usado dentro de um ThemeProvider')
    })
    
})