import { join } from 'path'
import { bundle } from '@remotion/bundler'
import { getCompositions, renderMedia } from '@remotion/renderer'
import { webpackOverride } from '../webpack-override'

const start = async () => {
  console.log('Render all compositions..')

  const bundled = await bundle({
    entryPoint: join(process.cwd(), 'src', 'index.ts'),
    webpackOverride: (config) => webpackOverride(config),
  })

  const compositions = await getCompositions(bundled)
  for (const composition of compositions) {
    console.log(`Rendering ${composition.id}...`)
    await renderMedia({
      codec: 'h264',
      composition,
      serveUrl: bundled,
      outputLocation: `out/${composition.id}.mp4`,
    })
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
