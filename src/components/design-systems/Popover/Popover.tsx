import { Popover as HedlessUIPopover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type ReusablePopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
};

const Popover = ({
  trigger,
  children,
  className = "",
}: ReusablePopoverProps) => {
  return (
    <HedlessUIPopover className={`relative ${className}`}>
      <HedlessUIPopover.Button>{trigger}</HedlessUIPopover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <HedlessUIPopover.Panel className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg p-4">
          {children}
        </HedlessUIPopover.Panel>
      </Transition>
    </HedlessUIPopover>
  );
};

export default Popover;
