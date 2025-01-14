import { Fira_Code, Roboto } from '@next/font/google'
import localFont from '@next/font/local'

const firaCode = Fira_Code({ variable: '--fira-code' })
const roboto = Roboto({
  variant: '100-italic',
  display: 'swap',
  preload: true,
  variable: '--roboto-100-italic',
})
const myFont = localFont({
  src: '../fonts/my-font.woff2',
  preload: false,
  variable: '--my-font',
})

export default function WithFonts() {
  return (
    <>
      {/* Fira Code Variable */}
      <div
        id="variables-fira-code"
        className={firaCode.variable}
        style={{ fontFamily: 'var(--fira-code)' }}
      >
        With variables
      </div>
      <div
        id="without-variables-fira-code"
        style={{ fontFamily: 'var(--fira-code)' }}
      >
        Without variables
      </div>

      {/* Roboto 100 Italic */}
      <div
        id="variables-roboto-100-italic"
        className={roboto.variable}
        style={{ fontFamily: 'var(--roboto-100-italic)' }}
      >
        With variables
      </div>
      <div
        id="without-variables-roboto-100-italic"
        style={{ fontFamily: 'var(--roboto-100-italic)' }}
      >
        Without variables
      </div>

      {/* Local font */}
      <div
        id="variables-local-font"
        className={myFont.variable}
        style={{ fontFamily: 'var(--my-font)' }}
      >
        With variables
      </div>
      <div
        id="without-variables-local-font"
        style={{ fontFamily: 'var(--my-font)' }}
      >
        Without variables
      </div>
    </>
  )
}
