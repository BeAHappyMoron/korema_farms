import React, {Suspense} from 'react'
import './Crops.css'
import Cucumber from "../../models/Cucumber.jsx";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import cropbg from "../../assets/cropbg.mp4";

const Crops = () => {
    return (
        <div className="crops">
            <div className="gradient-overlay"></div>
            <div className='video-container'>
                <video className='videobg' src={cropbg} autoPlay muted loop/>
            </div>
            <div className="crops-container">
                <Canvas>
                    {/* Brighter Ambient Light */}
                    <ambientLight intensity={1.3} />

                    {/* Stronger Directional Light */}
                    <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

                    {/* Additional Point Lights for More Even Lighting */}
                    <pointLight position={[-5, 5, 5]} intensity={1.5} />
                    <pointLight position={[5, -5, -5]} intensity={1.2} />

                    {/* Spotlight for Extra Highlights */}
                    <spotLight position={[10, 10, 10]} angle={0.4} penumbra={1} intensity={3} castShadow />

                    <Suspense fallback={null}>
                        <Cucumber/>
                    </Suspense>

                    <OrbitControls enableZoom={false}/>
                </Canvas>
                <div className="crops-text text-white">
                    <h1>NATURE MEETS GROUNDBREAKING TECHNOLOGY<span className="full-stop">.</span></h1>
                    <p>Explore the world of cucumbers with our interactive 3D model, showcasing the crisp and vibrant
                        essence of this healthy vegetable. Dive into the details and enjoy the perfect blend of nature and
                        technology right at your fingertips.</p>
                </div>
                <div className="tech-box"></div>


                <div className="instructions-text text-white">
                    <p>Use your mouse to rotate the cucumber</p>
                </div>

            </div>
        </div>

    )
}
export default Crops
