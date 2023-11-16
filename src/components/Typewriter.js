import { TypeAnimation } from 'react-type-animation';

export const TypeWriter = () => {
    return(
<TypeAnimation
  sequence={[
    'Software',
    500,
    'Software Developer',
    500,
    'Software',
    500,
    '',
    500,
  ]}
  repeat={Infinity}
/>
    )
}