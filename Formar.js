import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Formar = () => {

    const [rotate, setRotate] = useState(false)

    const parentDiv = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        height: "100vh",
        width: "100vw"
    }

    const childDiv = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "300px",
        width: "300px",
        color: "white"
    }

    return (
        <div style={parentDiv} >
            {/* <motion.div animate={{ x: 100 }}   style={childDiv}>  
      Animated
    </motion.div> */}
            {/*  try this   animate={{ x: -100 }} animate={{ y: 100 }} animate={{ y: -100 }}  */}

            {/* <motion.div animate={{ x: 100, scale: 1 }} initial={{ scale: 0 }}   style={childDiv}>  
      Animated
    </motion.div> */}

            {/* <motion.div animate={{ rotate: rotate ? 360 : 0 }}   style={childDiv} onClick={() => setRotate(!rotate) }>  
      Animated
    </motion.div> */}

            {/* <motion.div animate={{ x: rotate ? 200 : -200 }}   style={childDiv} onClick={() => setRotate(!rotate) }>  
      Animated
    </motion.div> */}

            {/*   delay of transition means which after that seconds  */}
            {/* <motion.div animate={{ x: rotate ? 200 : -200 }}  transition={{ delay: 1 }}  style={childDiv} onClick={() => setRotate(!rotate) }>  
      Animated
    </motion.div> */}

            {/*  three type of transition || type, duration   */}
            {/* <motion.div animate={{ x: rotate ? 200 : -200 }} transition={{ type: "tween", duration: 5 }} style={childDiv} onClick={() => setRotate(!rotate)}>
                Animated
            </motion.div> */}

            {/* <motion.div animate={{ x: rotate ? 200 : -200 }} transition={{ type: "spring", bounce: 50 }} style={childDiv} onClick={() => setRotate(!rotate)}>
                Animated
            </motion.div> */}


            {/* <motion.div animate={{ x: rotate ? 200 : -200 }} transition={{ type: "inertia", velocity: 20 }} style={childDiv} onClick={() => setRotate(!rotate)}>
                Animated
            </motion.div> */}

            {/* <motion.div drag whileDrag={{ scale: 2 }} style={childDiv} >Animated</motion.div> */}

            {/* <motion.div drag="x" dragConstraints={{ left: 50, right: 50 }} style={childDiv} >Animated</motion.div> */}

            <motion.div animate={{ rotate: [0, 200, 200, 0], x: [0, 200, 200, 0, -200, -200, 0] }} transition={{ repeat: Infinity, duration: 1 }} style={childDiv} >Animated</motion.div>


        </div>

    )
}

export default Formar
