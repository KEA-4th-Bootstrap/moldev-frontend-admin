/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { buttonType } from '../../data/type';
import { Common } from '../../styles/Common';

const RectButton = ({
  type,
  text,
  onClick,
  fontSize = 18,
  w,
  h,
}: {
  type: buttonType;
  text: string;
  onClick: () => void;
  fontSize?: number;
  h?: string;
  w?: string;
}) => {
  return (
    <button
      css={[
        tw`rounded-rectButton px-10 py-8 font-medium`,
        {
          backgroundColor:
            type === 'cancel'
              ? Common.color.gray[100]
              : Common.color.admin.gray.button,
          color:
            type === 'cancel'
              ? Common.color.admin.gray.button
              : Common.color.white,
          height: h ? `${h}` : 'auto',
          width: w ? `${w}` : 'auto',
          fontSize: `${fontSize}px`,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default RectButton;
