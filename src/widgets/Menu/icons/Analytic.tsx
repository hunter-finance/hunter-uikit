import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
      <path d="M 950 25C 964 25 975 36 975 50C 975 50 975 950 975 950C 975 964 964 975 950 975C 950 975 850 975 850 975C 836 975 825 964 825 950C 825 950 825 50 825 50C 825 36 836 25 850 25C 850 25 950 25 950 25M 750 450C 764 450 775 461 775 475C 775 475 775 950 775 950C 775 964 764 975 750 975C 750 975 650 975 650 975C 636 975 625 964 625 950C 625 950 625 475 625 475C 625 461 636 450 650 450C 650 450 750 450 750 450M 550 650C 564 650 575 661 575 675C 575 675 575 950 575 950C 575 964 564 975 550 975C 550 975 450 975 450 975C 436 975 425 964 425 950C 425 950 425 675 425 675C 425 661 436 650 450 650C 450 650 550 650 550 650M 350 750C 364 750 375 761 375 775C 375 775 375 950 375 950C 375 964 364 975 350 975C 350 975 250 975 250 975C 236 975 225 964 225 950C 225 950 225 775 225 775C 225 761 236 750 250 750C 250 750 350 750 350 750M 150 800C 164 800 175 811 175 825C 175 825 175 950 175 950C 175 964 164 975 150 975C 150 975 50 975 50 975C 36 975 25 964 25 950C 25 950 25 825 25 825C 25 811 36 800 50 800C 50 800 150 800 150 800" />
    </Svg>
  );
};

export default Icon;
