import React from 'react';
import video from '../../assets/video.mp4';
import LottieAnimation from '../../components/LottieAnimation/LottieAnimation';
import RandomTextGenerator from '../../components/TextGenerator/TextGenerator';
import { Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMusicNote } from 'react-icons/md';
import { MdMusicOff } from 'react-icons/md';
import { VscDebugStart } from 'react-icons/vsc';
import { IoIosPause } from 'react-icons/io';
import {
  Dialog,
  Flex,
  TextField,
  Text,
  Card,
  Inset,
  Slider,
} from '@radix-ui/themes';
import { IoOptionsSharp } from 'react-icons/io5';
import soundFile from '../../assets/music.mpeg';
const ExercisePage = () => {
  const [music, setMusic] = React.useState(true);
  const [animationPlaying, setAnimationPlaying] = React.useState(false);
  const [stresslevel, setstressLevel] = React.useState(2);
  const [exercise, setExercise] = React.useState('infinite meditation');
  const [exerciseValue, setExerciseValue] = React.useState(1);
  const [durationRounds, setDurationRounds] = React.useState(99);
  const audioRef = React.useRef(null);
  let audio = new Audio(soundFile);

  const navigate = useNavigate();
  const navigateToApp = () => {
    navigate('/app');
  };

  const handleStartClick = () => {
    setAnimationPlaying(!animationPlaying);
  };

  const playSound = () => {
    audio.play();
  };

  const stopSound = () => {
    audio.pause();
  };

  return (
    <Dialog.Root>
      <div className="exercise-page">
        <Button
          onClick={navigateToApp}
          style={{
            position: 'absolute',
            left: 20,
            top: 10,
            zIndex: 20,
          }}
          color="teal"
        >
          GO BACK
        </Button>
        <video
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            overflow: 'hidden',
          }}
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="exercise-content">
          {exercise !== 'completed' ? (
            <RandomTextGenerator />
          ) : (
            <div className="completed"></div>
          )}

          <LottieAnimation
            isPlaying={animationPlaying}
            setIsPlaying={setAnimationPlaying}
            selectedExerciseValue={exerciseValue}
            durationRounds={durationRounds}
            setDurationRounds={setDurationRounds}
            selectedExercise={exercise}
            setExercise={setExercise}
          />

          <audio ref={audioRef} loop>
            <source src={soundFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <Dialog.Trigger>
            <IoOptionsSharp
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '75%',
                left: '52%',
                margin: 'auto',
                cursor: 'pointer',
                zIndex: 30,
              }}
              fill="#333"
            />
          </Dialog.Trigger>
          {!animationPlaying ? (
            <VscDebugStart
              className="start"
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '75%',
                left: '49%',
                margin: 'auto',
                cursor: 'pointer',
                zIndex: 30,
              }}
              onClick={handleStartClick}
              fill="#333"
            />
          ) : (
            <IoIosPause
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '75%',
                left: '49%',
                margin: 'auto',
                cursor: 'pointer',
                zIndex: 30,
              }}
              onClick={handleStartClick}
              fill="#333"
            />
          )}

          {music ? (
            <MdOutlineMusicNote
              className="music"
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '75%',
                left: '46%',
                margin: 'auto',
                cursor: 'pointer',
                zIndex: 30,
              }}
              fill="#333"
              onClick={() => {
                setMusic(!music);
                playSound();
              }}
            />
          ) : (
            <MdMusicOff
              className="music"
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '75%',
                left: '46%',
                margin: 'auto',
                cursor: 'pointer',
                zIndex: 30,
              }}
              fill="#333"
              onClick={() => {
                setMusic(!music);
                stopSound();
              }}
            />
          )}
        </div>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Breathing Exercises</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Choose Your Stress Level: {stresslevel}
          </Dialog.Description>
          <Slider
            defaultValue={[stresslevel]}
            max={10}
            min={0}
            onValueChange={(e) => {
              setstressLevel(e[0]);
            }}
          />
          <Flex
            direction="row"
            justify={'between'}
            width={'100%'}
            align={'baseline'}
          >
            <p>0</p>

            <p>10</p>
          </Flex>

          <Flex direction="column" gap="3" style={{ marginTop: '30px' }}>
            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Close>
                  <img
                    src="https://images.pexels.com/photos/2111997/pexels-photo-2111997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                      objectPosition: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setExercise('better sleep');
                      setExerciseValue(0.5);
                      setDurationRounds(4);
                    }}
                  />
                </Dialog.Close>
              </Inset>
              <Text as="p" size="3">
                Better Sleep (4 Minute Exercise )
              </Text>
            </Card>

            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Close>
                  <img
                    src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                      objectPosition: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setExercise('relieve stress');
                      setExerciseValue(2);
                      setDurationRounds(6);
                    }}
                  />
                </Dialog.Close>
              </Inset>
              <Text as="p" size="3">
                Relieve Stress (6 Minute Exercise)
              </Text>
            </Card>

            <Card variant="classic">
              <Inset clip="padding-box" side="top" pb="current">
                <Dialog.Close>
                  <img
                    src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Bold typography"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      width: '100%',
                      height: 160,
                      objectPosition: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setExercise('infinite meditation');
                      setExerciseValue(1);
                      setDurationRounds(99);
                    }}
                  />
                </Dialog.Close>
              </Inset>
              <Text as="p" size="3">
                Infinite Meditation
              </Text>
            </Card>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="red">
                Cancel
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </div>
    </Dialog.Root>
  );
};

export default ExercisePage;
