import { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Button,
  Label,
  Chevron,
  Menu,
  Item,
} from "./DropDownMenu.style";

const OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export const DropDownMenu = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = OPTIONS.find((data) => data.value === value) ?? OPTIONS[0];

  // 바깥 클릭 닫기
  useEffect(() => {
    const onMouseDown = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const handleSelect = (next) => {
    console.log(next);
    onChange(next);
    setOpen(false);
  };

  return (
    <Wrapper ref={ref}>
      <Button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Label>{selected.label}</Label>
        <Chevron open={open} />
      </Button>

      {open && (
        <Menu role="listbox">
          {OPTIONS.map((opt, idx) => (
            <Item
              key={opt.value}
              role="option"
              aria-selected={opt.value === selected.value}
              isLast={idx === OPTIONS.length - 1}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </Item>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
};
