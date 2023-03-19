import { AbsoluteFill, Audio, Img, staticFile } from 'remotion'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'
import { Logo } from '../components/Logo'

export function Intro() {
  const bgImage = staticFile('images/bg-archive.png')

  return (
    <AbsoluteFill>
      <Audio src={staticFile('audio/cinematic.wav')} />
      <AbsoluteFill>
        <Img style={{ width: '100%' }} src={bgImage} />
      </AbsoluteFill>

      <AbsoluteFill className="items-center justify-center">
        <div className="m-10" />
        <Logo />
        <div className="m-10" />
        <Title title="Devcon Bogota" />
        <Subtitle title="Default generated video intro" />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
