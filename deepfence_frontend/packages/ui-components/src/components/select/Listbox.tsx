import './input.css';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import {
  Listbox as HUIListbox,
  ListboxOptionProps as HUIListboxOptionProps,
  ListboxProps as HUIListboxProps,
  Transition,
} from '@headlessui/react';
import cx from 'classnames';
import { cva } from 'cva';
import { isNil } from 'lodash-es';
import { ReactNode, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

import { dfTwMerge } from '@/utils/twmerge';
export type SizeType = 'md';
export type ColorType = 'default' | 'error';

const optionCva = cva([], {
  variants: {
    size: {
      md: 'text-sm px-2.5 py-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const buttonCva = cva(
  [
    'df-button relative',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'pl-1.5 pt-1.5 pb-[5px]',
    'border-b',
    'dark:bg-transparent',
    'transition-[background-size] duration-[0.2s] ease-[ease]',
  ],
  {
    variants: {
      color: {
        default: [
          dfTwMerge(
            cx(
              // border
              'dark:border-text-text-and-icon',
              // bg styles
              // 'bg-gray-50',
              // placeholder styles
              'placeholder-gray-500 disabled:placeholder-gray-400',
              'dark:placeholder-gray-400 dark:disabled:placeholder-gray-500',
              // text font
              'dark:text-p4',
              // text styles
              'text-gray-900 dark:text-text-input-value',
              // disabled text color
              'disabled:text-gray-700 dark:disabled:text-gray-600',
              // focus style
              'dark:bg-[length:0%_100%] dark:focus:bg-[length:100%_100%]',
              'dark:focus:border-b-accent-accent',
              // dark and bg styles
              'dark:bg-no-repeat',
              'dark:focus:bg-no-repeat',
              // 'dark:focus:bg-[linear-gradient(to_bottom,_transparent_95%,_#489CFF_95%)]',
              // 'dark:bg-[linear-gradient(to_bottom,_transparent_95%,_#489CFF_95%)]',
            ),
          ),
        ],
        error: [
          // ring styles
          'ring-red-200 focus:ring-red-500',
          'dark:ring-red-800 dark:focus:ring-red-500',
          // bg styles
          'bg-red-50',
          'dark:bg-gray-700',
          // placeholder styles
          'placeholder-red-400 disabled:placeholder-red-300',
          'dark:placeholder-red-700 dark:disabled:placeholder-red-800',
          // text styles
          'text-red-700 disabled:text-red-500',
          'dark:text-red-500 dark:disabled:text-red-700',
        ],
      },
      size: {
        md: '',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
    },
  },
);
const CaretIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.79999 3.74445L4.99999 7.05556L8.19999 3.74445C8.38102 3.55652 8.37542 3.25742 8.18749 3.07639C7.99956 2.89536 7.70046 2.90096 7.51944 3.08889L4.99999 5.69722L2.47777 3.08889C2.29674 2.90096 1.99764 2.89536 1.80971 3.07639C1.62178 3.25742 1.61619 3.55652 1.79721 3.74445H1.79999Z"
        fill="black"
      />
      <mask
        id="mask0_10866_516"
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="8"
        height="6"
      >
        <path
          d="M1.79999 3.74445L4.99999 7.05556L8.19999 3.74445C8.38102 3.55652 8.37542 3.25742 8.18749 3.07639C7.99956 2.89536 7.70046 2.90096 7.51944 3.08889L4.99999 5.69722L2.47777 3.08889C2.29674 2.90096 1.99764 2.89536 1.80971 3.07639C1.62178 3.25742 1.61619 3.55652 1.79721 3.74445H1.79999Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_10866_516)">
        <rect
          x="10"
          y="10"
          width="10"
          height="10"
          transform="rotate(-180 10 10)"
          fill="#B2C0C9"
        />
      </g>
    </svg>
  );
};
const SelectArrow = () => {
  return (
    <span
      className={cx(
        'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1.5',
      )}
    >
      <CaretIcon />
    </span>
  );
};
interface ListboxProps<TType, TActualType>
  extends HUIListboxProps<
    React.ExoticComponent<{
      children?: React.ReactNode;
    }>,
    TType,
    TActualType
  > {
  sizing?: SizeType;
  color?: ColorType;
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
  getDisplayValue?: (value?: TType) => string;
  required?: boolean;
  id?: string;
}
export function Listbox<TType, TActualType>({
  sizing,
  color,
  children,
  value,
  label,
  placeholder,
  getDisplayValue,
  required,
  id,
  ...props
}: ListboxProps<TType, TActualType>) {
  const internalId = useId();
  const _id = id ? id : internalId;
  const { x, y, strategy, refs } = useFloating({
    strategy: 'fixed',
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      offset({
        mainAxis: 4,
      }),
      size({
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${elements.reference.getBoundingClientRect().width}px`,
            maxHeight: `min(${availableHeight}px, 350px)`,
          });
        },
      }),
    ],
  });
  return (
    <HUIListbox {...props} value={value}>
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <HUIListbox.Label
            htmlFor={_id}
            className={'text-p3 text-gray-900 dark:text-text-text-and-icon pb-[10px]'}
          >
            {required && <span>*</span>}
            {label}
          </HUIListbox.Label>
        )}

        <HUIListbox.Button
          id={_id}
          ref={(ele) => refs.setReference(ele)}
          className={buttonCva({
            size: sizing,
            color,
          })}
        >
          <span className="truncate text-start block">
            {getPlaceholderValue(value, getDisplayValue, placeholder)}
          </span>
          <SelectArrow />
        </HUIListbox.Button>
        <Portal>
          <Transition
            as={'div'}
            enter="transition ease-out duration-1200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-1200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
            ref={(ele) => refs.setFloating(ele)}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
          >
            <HUIListbox.Options
              className={dfTwMerge(
                cx(
                  'shadow-sm bg-white dark:bg-gray-700 w-full',
                  'rounded-md',
                  'border border-gray-200 dark:border-gray-600',
                  'focus:outline-none select-none',
                  'max-h-60 overflow-y-auto',
                ),
              )}
            >
              {children}
            </HUIListbox.Options>
          </Transition>
        </Portal>
      </div>
    </HUIListbox>
  );
}
interface ListBoxOptionProps<TType> extends HUIListboxOptionProps<'li', TType> {
  sizing?: SizeType;
}
export function ListboxOption<TType>({ sizing, ...props }: ListBoxOptionProps<TType>) {
  return (
    <HUIListbox.Option
      className={({ active, selected }) => {
        return dfTwMerge(
          cx(
            'relative select-none py-2 pl-3 pr-3',
            'text-gray-500 dark:text-gray-300 cursor-pointer',
            // text
            'text-gray-500 dark:text-gray-300',
            {
              'bg-gray-100 dark:bg-gray-600': active,
              'text-blue-600 dark:text-blue-400': selected,
            },
            optionCva({
              size: sizing,
            }),
          ),
        );
      }}
      {...props}
    />
  );
}
function getPlaceholderValue<T extends unknown | unknown[]>(
  value?: T,
  getDisplayValue?: (value?: T) => string,
  defaultPlaceholder?: string,
) {
  if (isNil(value) || (Array.isArray(value) && !value.length)) {
    return (
      <span className="text-gray-500 dark:text-gray-400 block">
        {defaultPlaceholder ?? 'Select...'}
      </span>
    );
  } else if (getDisplayValue) {
    return getDisplayValue?.(value);
  } else if (Array.isArray(value)) {
    return `${value.length} selected`;
  }
  return '1 item selected';
}

function Portal(props: { children: ReactNode }) {
  const { children } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
