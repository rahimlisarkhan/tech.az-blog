import { useRef } from "react";

interface MoveContentType {
  onDown: () => void;
  onUp: () => void;
  onMove: () => void;
}

export const useMoveContent = ({
  onDown,
  onUp,
  onMove,
}: Partial<MoveContentType>) => {
  let ref = useRef(null);
  let contentMove = useRef(false);

  let moveStyle = {
    position: "absolute",
    zIndex: 99999999,
  };
  const onMouseDown = () => {
    contentMove.current = true;
    ref.current.style.cursor = `grab`;

    onDown?.();
  };

  const onMouseUp = () => {
    contentMove.current = false;
    ref.current.style.cursor = `default`;

    onUp?.();
  };

  const onMouseMove = ({ pageY, pageX }) => {
    if (contentMove.current) {
      ref.current.style.top = pageY - 40 + "px";
      ref.current.style.left = pageX - 50 + "px";
      onMove?.();
    }
  };

  let listener = {
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };

  return { ref, listener, moveStyle };
};
