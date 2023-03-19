import { join } from 'path'
import { bundle } from '@remotion/bundler'
import { getCompositions, renderMedia } from '@remotion/renderer'
import { webpackOverride } from '../webpack-override'

const sessions = ['devcon-6-opening-video', 'FRJHPL', '9MVQCE']

const start = async () => {
  console.log('Find compositions...')
  const bundled = await bundle({
    entryPoint: join(process.cwd(), 'src', 'index.ts'),
    webpackOverride: (config) => webpackOverride(config),
  })

  const compositions = await getCompositions(bundled)
  const sessionComposition = compositions.find((c) => c.id === 'session')

  console.log('General compositions...')
  for (const composition of compositions) {
    console.log(`- ${composition.id}`)

    if (composition.id !== sessionComposition?.id) {
      await renderMedia({
        codec: 'h264',
        composition,
        serveUrl: bundled,
        outputLocation: `out/${composition.id}.mp4`,
      })
    }
  }

  if (sessionComposition) {
    console.log('Session compositions...')

    for (const id of sessions) {
      console.log(`- ${id}`)
      await renderMedia({
        codec: 'h264',
        composition: sessionComposition,
        serveUrl: bundled,
        outputLocation: `out/sessions/${id}.mp4`,
        inputProps: { id },
      })
    }
  }
}
start()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
