import React from 'react'
import { interpolate, useCurrentFrame } from 'remotion'

interface Props {
  title: string
}

export function Subtitle(props: Props) {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <div className="text-gray-400 text-3xl mt-2" style={{ opacity }}>
      {props.title}
    </div>
  )
}
