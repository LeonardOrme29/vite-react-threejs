
import {Canvas} from '@react-three/fiber'
import { Mascara } from '../components3d/mascara'
import { Environment,OrbitControls, useEnvironment } from '@react-three/drei'


//dpr={[1, 2]} orthographic camera={{ position: [-10, 10, 10], zoom: 100 }}

function Img3d() {
  const envMap=useEnvironment({files:'../src/images/envTex.hdr'})
  return (
    <>
      <Canvas camera={{zoom: 1}}>
        <ambientLight />
        <Environment map={envMap} background />
        <Mascara/>
        <OrbitControls makeDefault rotateSpeed={1.5} minPolarAngle={0} maxPolarAngle={Math.PI/1.5} />
      </Canvas>
      
    </>
  )
}

export default Img3d