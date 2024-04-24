import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt'
import Camera from './Camera'
import Backdrop from './Backdrop'

function CanvasModel() {
  return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />

        {/* <Camera> */}
            {/* <Backdrop> */}
                <Center>
                    <Shirt />
                </Center>
            {/* </Backdrop> */}
        {/* </Camera> */}
    </Canvas>
)
}

export default CanvasModel