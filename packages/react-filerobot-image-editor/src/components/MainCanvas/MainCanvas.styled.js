/** External Dependencies */
import styled from 'styled-components';

const CanvasContainer = styled.div`
  width: 100%;
  position: relative;
  height: calc(
    100% - 112px - 12px
  ); // 112px, 12px = toolsbar's maxheight, app container padding.
  background: ${({ theme }) => theme.palette['bg-primary']};
  overflow: hidden;

  [data-phone='true'] & {
    /* TODO: Remove this fixed height and also the above one and make the container display: flex and use flex-grow here
      but after making sure that crop won't affect by changing the height of the canvas cuz of flex-grow when changing tools */
    height: calc(
      100% - 140px
    ); // 140px, 12px = height of the tabs + tools bars in phone screen.
  }
`;

const StyledOrignalImage = styled.img`
  max-width: 98%;
  max-height: 98%;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export { CanvasContainer, StyledOrignalImage };