import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import Camera from './Camera'
import Backdrop from './Backdrop'

function CanvasModel() {
  return (
    <Canvas  style={{ width: '100%', height: '90vh'}}>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />

        <Camera>
            {/* <Backdrop /> */}
                <Center>
                    <Shirt/>
                </Center>
        </Camera>
    </Canvas>
)
}

export default CanvasModel