import { Composition, Folder } from 'remotion'
import { Break } from './break'
import { Intro } from './intro'
import { Outro } from './outro'
import { Talk } from './talk'

export function Compositions() {
  return (
    <>
      <Folder name="General">
        <Composition id="Intro" component={Intro} width={1920} height={1080} durationInFrames={240} fps={30} />
        <Composition id="Outro" component={Outro} width={1920} height={1080} durationInFrames={120} fps={30} />
        <Composition id="Break" component={Break} width={1920} height={1080} durationInFrames={120} fps={30} />
      </Folder>
      <Folder name="Talks">
        <Composition id="Talk" component={Talk} width={1920} height={1080} durationInFrames={240} fps={30} />
      </Folder>
    </>
  )
}
