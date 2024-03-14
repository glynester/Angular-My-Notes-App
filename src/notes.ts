export interface Note {
  id: number;
  title: string;
  text: string;
}

export const NOTES: Note[]=[
  {
    id: 1,
    title: 'Mad Max',
    text: 'I\'m a fuel-injected suicide machine! I am a rocker! I am a roller! I am the out-of-controller! I am the Nightrider!',
  },
  {
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be: that is the question.',
  },
  {
    id: 3,
    title: 'Freddie Krueger',
    text: 'Welcome to my world, b*tch.',
  },
  {
    id: 4,
    title: 'A Clockwork Orange',
    text: 'I woke up. The pain and sickness all over me like an animal. Then I realized what it was. The music coming up from the floor was our old friend, Ludwig Van, and the dreaded Ninth Symphony.',
  },
]