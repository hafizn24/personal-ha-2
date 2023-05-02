import React from 'react'
import { Grid, Box, } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';

function Main() {
    const heightVar = '92vh'
    // parallex components
    const ref = useRef()
    return (
        <>
            <Parallax pages={6} ref={ref} style={{ overflow: 'hidden' }}>
                <ParallaxLayer offset={0} speed={1}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >

                        <Box sx={{ height: heightVar, pt: '75%', mx: 4 }}>
                            <h3>God created the sky always blue,</h3>
                            <h3>I started to forget the days without you,</h3>
                        </Box>
                        <Box><ArrowDownwardIcon onClick={() => { ref.current.scrollTo(1) }} /></Box>
                    </Grid>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >

                        <Box sx={{ height: heightVar, pt: '75%', mx: 4 }}>
                            <h3>Like a lighthouse fading into grey,</h3>
                            <h3>Now my heart feels heavy, lost in rue</h3>
                        </Box>
                        <Box><ArrowDownwardIcon onClick={() => { ref.current.scrollTo(2) }} /></Box>
                    </Grid>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >

                        <Box sx={{ height: heightVar, pt: '75%', mx: 4 }}>
                            <h3>You may call it the end, but I call it a test,</h3>
                            <h3>To see how far I can go to love you,</h3>
                        </Box>
                        <Box><ArrowDownwardIcon onClick={() => { ref.current.scrollTo(3) }} /></Box>
                    </Grid>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >

                        <Box sx={{ height: heightVar, pt: '75%', mx: 4 }}>
                            <h3>You are the only one. All I need,</h3>
                            <h3>The reason I am the best I have been,</h3>
                        </Box>
                        <Box><ArrowDownwardIcon onClick={() => { ref.current.scrollTo(4) }} /></Box>
                    </Grid>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={1}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >

                        <Box sx={{ height: heightVar, pt: '75%', mx: 4 }}>
                            <h3>There is no rainbow without rain, no joy without pain,</h3>
                            <h3>I hope the feeling you have for me will be the same,</h3>
                        </Box>
                        <Box><FavoriteIcon sx={{ color: 'red' }} onClick={() => { ref.current.scrollTo(0) }} /></Box>
                    </Grid>
                </ParallaxLayer>

            </Parallax>
        </>
    )
}

export default Main