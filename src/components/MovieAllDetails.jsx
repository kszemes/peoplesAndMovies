import React from 'react';
import {getData, getMovieById, getMovieImageSize500, getMovieVideo, imgUnavailable} from "../utils/dbUtils.js";
import {useQuery} from "react-query";
import './PeopleAllDetails.css'
import {Backdrop, Button, Fade, Modal} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from "@mui/material/Box";
import {Carousel} from "./Carousel.jsx";

const style = {
    position: 'absolute',
    float: 'left',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -65%)',
    width: '100%',
    maxWidth: '800px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontFamily: 'Motserrat',
    marginTop: 10,
};
export const MovieAllDetails = ({children, id}) => {
    const [open, setOpen] = React.useState(false);
    const {data: movie, status: movieDetailStatus} = useQuery(['movie', getMovieById(id)], getData);
    const {data: video, status: videoDetailStatus} = useQuery(['video', getMovieVideo(id)], getData);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen}>{children}</button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{backdrop: {timeout: 500,},}}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {movieDetailStatus === 'success' &&
                            <div className="content-modal">
                                <img src={movie.backdrop_path ? getMovieImageSize500(movie.backdrop_path) : imgUnavailable} alt={movie?.name || movie?.title}/>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <div>
                                        <b>{movie?.name || movie?.title}</b> ({movie?.release_date || movie?.first_air_date})
                                    </div>
                                    <div className="tagline"><i>{movie?.tagline}</i></div>
                                    <div className='overview'>{movie?.overview}</div>
                                </Box>
                            </div>
                        }
                        <div><Carousel id={id}/></div>
                        {videoDetailStatus === 'success' && video.results.length > 0 &&
                            <Button
                                className='video'
                                variant='contained'
                                color='secondary'
                                startIcon={<YouTubeIcon/>}
                                target='_blank'
                                href={`https://www.youtube.com/watch?v=${video.results[0].key}`}
                            >
                                Watch the trailer
                            </Button>
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};