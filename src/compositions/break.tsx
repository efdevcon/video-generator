import { AbsoluteFill, Img, staticFile } from 'remotion'
import { Logo } from '../components/Logo'

export function Break() {
  const bgImage = staticFile('images/bg-archive.png')

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img style={{ width: '100%' }} src={bgImage} />
      </AbsoluteFill>

      <AbsoluteFill className="items-center justify-center">
        <Logo />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
