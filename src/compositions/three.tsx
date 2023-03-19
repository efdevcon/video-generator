import { ThreeCanvas } from '@remotion/three'
import { interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion'
import { useGLTF } from '@react-three/drei'

export function Three() {
  const { width, height } = useVideoConfig()
  const frame = useCurrentFrame()
  const rotation = interpolate(frame, [0, 90], [0, Math.PI * 2])
  const modelPath = staticFile('models/casette.glb')
  const model: any = useGLTF(modelPath)

  const bgImage = staticFile('images/bg-archive.png')

  return (
    <ThreeCanvas
      orthographic={false}
      width={width}
      height={height}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      camera={{ fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight args={[undefined, 0.4]} position={[0, 0, 0]} />

      <mesh
        geometry={model.nodes.uploads_files_1020431_SM_Video_Tape.geometry}
        material={model.materials['Default OBJ']}
        rotation={[Math.PI / 2, 0, rotation]}
        position={[0, 0, 0]}
        scale={[0.3, 0.3, 0.3]}
      />
    </ThreeCanvas>
  )
}
