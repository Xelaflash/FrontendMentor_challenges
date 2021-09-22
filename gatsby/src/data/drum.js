import clap from '../assets/sounds/clap.wav';
import hihat from '../assets/sounds/hihat.wav';
import kick from '../assets/sounds/kick.wav';
import openhat from '../assets/sounds/openhat.wav';
import boom from '../assets/sounds/boom.wav';
import ride from '../assets/sounds/ride.wav';
import snare from '../assets/sounds/snare.wav';
import tom from '../assets/sounds/tom.wav';
import drum from '../assets/sounds/huge-drum.wav';

export const drumPads = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'clap',
    sound: `${clap}`,
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'hihat',
    sound: `${hihat}`,
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'kick',
    sound: `${kick}`,
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'openhat',
    sound: `${openhat}`,
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'boom',
    sound: `${boom}`,
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'ride',
    sound: `${ride}`,
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'snare',
    sound: `${snare}`,
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'tom',
    sound: `${tom}`,
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'drum',
    sound: `${drum}`,
  },
];
