import React, { useRef } from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';

function Camera({ children }) {
  const grp = useRef();
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    //set positions
    let targetPosition = [-0.4, 0, 2]
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2]
      if(isMobile) targetPosition = [0, 0.2, 2.5]
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
    }

    //set camera
    easing.damp3(state.camera.position, targetPosition, 2, delta)

  //rotation
    easing.dampE(
      grp.current.rotation,
      [state.pointer.y / 2, -state.pointer.x / 3, 0],
      2,
      delta
    )
  })

  return (
    <group ref={grp}>
      {children}
    </group>
)
}

export default Camera