import { Composition, Folder } from 'remotion'
import { Break } from './break'
import { Intro } from './intro'
import { Outro } from './outro'
import { Session } from './session'

export function Compositions() {
  return (
    <>
      <Folder name="General">
        <Composition id="intro" component={Intro} width={1920} height={1080} durationInFrames={240} fps={30} />
        <Composition id="outro" component={Outro} width={1920} height={1080} durationInFrames={120} fps={30} />
        <Composition id="break" component={Break} width={1920} height={1080} durationInFrames={120} fps={30} />
      </Folder>
      <Folder name="Sessions">
        <Composition
          id="session"
          component={Session}
          width={1920}
          height={1080}
          durationInFrames={240}
          fps={30}
          defaultProps={{
            id: 'opening-ceremonies-vitalik',
          }}
        />
      </Folder>
    </>
  )
}
