import { AbsoluteFill, Img, staticFile } from 'remotion'
import { Logo } from '../components/Logo'
import { Title } from '../components/Title'

export function Outro() {
  const bgImage = staticFile('images/bg-archive.png')

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img style={{ width: '100%' }} src={bgImage} />
      </AbsoluteFill>

      <AbsoluteFill className="items-center justify-center">
        <div className="m-10" />
        <Logo />
        <div className="m-10" />
        <Title title="Thank you" />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
