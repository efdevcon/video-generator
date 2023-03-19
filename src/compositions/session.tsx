import { useCallback, useEffect, useState } from 'react'
import { AbsoluteFill, continueRender, delayRender } from 'remotion'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'

interface Props {
  id: string
}

export function Session(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any | undefined>()
  const [handle] = useState(() => delayRender())

  const fetchData = useCallback(async () => {
    const response = await fetch(`https://api.devcon.org/sessions/${props.id}`)
    const body = await response.json()
    setSession(body.data)

    continueRender(handle)
  }, [props.id, handle])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!session) return null

  return (
    <AbsoluteFill className="bg-gray-200 items-center justify-center">
      <Title title={session.title} />
      <Subtitle title={session.description} />
    </AbsoluteFill>
  )
}
