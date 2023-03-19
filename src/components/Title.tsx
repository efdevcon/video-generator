import * as SpaceMono from '@remotion/google-fonts/SpaceMono'
import { interpolate } from 'remotion'
import { useCurrentFrame } from 'remotion'

const { fontFamily } = SpaceMono.loadFont()

interface Props {
  title: string
}

export function Title(props: Props) {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <div style={{ opacity, fontFamily }} className="text-gray-700 text-5xl font-bold leading-relaxed">
      {props.title}
    </div>
  )
}
