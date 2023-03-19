import { AbsoluteFill } from 'remotion'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'

export function Talk() {
  return (
    <AbsoluteFill className="bg-gray-200 items-center justify-center">
      <Title title="Ethereum in 30 mins" />
      <Subtitle title="Vitalik Buterin" />
    </AbsoluteFill>
  )
}
