import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        d="M9.08 30a8.3 8.3 0 01-4.48-1.55 8.39 8.39 0 01-3.52-5.53 3.32 3.32 0 01.39-2.58 1.37 1.37 0 011.66-.43c1.31.52 2.76 3 3.33 4.09.62 1.21 1.24 1.58 1.62 1.55S9 25 9.33 23.69a4.7 4.7 0 00-.15-2.08l-.09-.41c-.15-.73-.35-1.41-.54-2.07A11.88 11.88 0 017.89 14c.47-3.82 2-6.19 4.62-7.24a4 4 0 011.05-.2.76.76 0 01.71.35.8.8 0 010 .79 8.12 8.12 0 00-.74 6.12v.05a8 8 0 002.86 4.21.77.77 0 01-.32 1.37 2.75 2.75 0 00-1.64.9 3.27 3.27 0 00-.73 2.69 16.14 16.14 0 01-.05 2.13c-.24 2.69-1.53 3.84-2.56 4.34a4.7 4.7 0 01-2.01.49zm-6.45-8.62a2.66 2.66 0 000 1.3 7 7 0 002.85 4.49c1.83 1.2 3.75 1.57 5 1 1-.47 1.55-1.51 1.7-3.09a16.9 16.9 0 000-2 4.71 4.71 0 011.08-3.69 3.74 3.74 0 011.19-1 9.48 9.48 0 01-2.38-4.1v-.05a9.72 9.72 0 01.13-5.63c-1.55 1-2.45 2.78-2.79 5.56A10.43 10.43 0 0010 18.7c.2.69.41 1.4.57 2.19l.08.39a5.77 5.77 0 01.14 2.79c-.46 1.78-1.39 2.88-2.57 3-.69.07-2-.12-3.16-2.36a10.23 10.23 0 00-2.43-3.33zm-.56-.57l.6.48z"
      />
      <path
        d="M21.38 21.31a9.7 9.7 0 01-5.88-2 9.48 9.48 0 01-3.4-5v-.05A9.71 9.71 0 0113 7v-.06A9.64 9.64 0 1124 21a9.9 9.9 0 01-2.62.31zm-7.82-7.48v.05a8 8 0 002.86 4.21A8.08 8.08 0 1014.3 7.71a8.12 8.12 0 00-.74 6.12zm.07-6.5z"
      />
      <path
        d="M23.53 6.18a4.17 4.17 0 01.88 8.24 4.58 4.58 0 01-.89.1 4.17 4.17 0 01-.88-8.25 4.48 4.48 0 01.89-.09m0-1.55a6.24 6.24 0 00-1.22.13 5.73 5.73 0 00-4.37 6.8 5.74 5.74 0 005.58 4.5 6.24 6.24 0 001.22-.13 5.72 5.72 0 00-1.21-11.3z"
      />
      <ellipse
        cx={24.81}
        cy={9.23}
        rx={1.38}
        ry={1.85}
        transform="rotate(-54.16 24.812 9.232)"
      />
      <ellipse
        cx={23.1}
        cy={11.88}
        rx={0.47}
        ry={0.65}
        transform="rotate(-54.16 23.103 11.874)"
      />
    </Svg>
  );
};

export default Icon;