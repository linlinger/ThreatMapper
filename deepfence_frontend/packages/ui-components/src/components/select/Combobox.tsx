import './input.css';

import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import {
  Combobox as HUICombobox,
  ComboboxOptionProps as HUIComboboxOptionProps,
  ComboboxProps as HUIComboboxProps,
  Transition,
} from '@headlessui/react';
import cx from 'classnames';
import { cva } from 'cva';
import { ElementType, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIntersection } from 'react-use';
import { twMerge } from 'tailwind-merge';

import HelperText from '@/components/input/HelperText';
import { CircleSpinner } from '@/main';
import { dfTwMerge } from '@/utils/twmerge';

export type SizeType = 'md';
export type ColorType = 'default' | 'error';

const inputCva = cva(
  [
    'df-button relative w-full',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'pl-1.5 pt-1.5 pb-[5px]',
    'border-b',
    'dark:bg-transparent',
    // text font
    'dark:text-p4',
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
          'w-full relative cursor-default rounded-lg',
          // text
          'text-red-600 placeholder-red-600 dark:text-red-500',
          'py-2 pl-3 pr-10 text-left ring-1',
          // bg
          'bg-red-50 dark:bg-red-100',
          // focus
          'focus:outline-none ring-red-400 dark:ring-red-500  focus-visible:border-red-400 dark:focus-visible:border-red-500',
          'focus-visible:ring-1 focus:ring-red-400  dark:focus:ring-red-500',
        ],
      },
    },
    defaultVariants: {
      color: 'default',
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
    <span className={cx('pointer-events-none', 'dark:text-text-text-and-icon')}>
      <CaretIcon />
    </span>
  );
};

type ComboboxProps<
  TValue,
  TNullable extends boolean | undefined,
  TMultiple extends boolean | undefined,
  TTag extends ElementType,
> = HUIComboboxProps<TValue, TNullable, TMultiple, TTag> & {
  children?: React.ReactNode;
  sizing?: SizeType;
  color?: ColorType;
  label?: string;
  placeholder?: string;
  onEndReached?: () => void;
  loading?: boolean;
  getDisplayValue?: (item: TValue) => string;
  onQueryChange: (query: string) => void;
  helperText?: string;
};

let DEFAULT_COMBOBOX_TAG: React.ExoticComponent<{
  children?: React.ReactNode;
}>;

export function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(
  props: ComboboxProps<TValue, true, true, TTag>,
): JSX.Element;
export function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(
  props: ComboboxProps<TValue, true, false, TTag>,
): JSX.Element;
export function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(
  props: ComboboxProps<TValue, false, false, TTag>,
): JSX.Element;
export function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>(
  props: ComboboxProps<TValue, false, true, TTag>,
): JSX.Element;
export function Combobox<TValue, TTag extends ElementType = typeof DEFAULT_COMBOBOX_TAG>({
  children,
  sizing,
  color,
  label,
  onEndReached,
  loading,
  placeholder,
  getDisplayValue,
  onQueryChange,
  helperText,
  disabled,
  ...props
}: ComboboxProps<TValue, boolean | undefined, boolean | undefined, TTag>) {
  const intersectionRef = useRef<RefObject<HTMLElement> | null>(null);
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
  // eslint-disable-next-line
  const intersection = useIntersection(intersectionRef as RefObject<HTMLElement>, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && intersection?.intersectionRatio > 0) {
      onEndReached?.();
    }
  }, [intersection]);

  return (
    <HUICombobox {...(props as any)} disabled={disabled}>
      <div className="flex flex-col">
        <HUICombobox.Label
          className={cx('text-p3 text-gray-900 dark:text-text-text-and-icon pb-[10px]', {
            'dark:text-gray-600': disabled,
          })}
        >
          {label}
        </HUICombobox.Label>
        <div className="relative">
          <HUICombobox.Input
            ref={(ele) => refs.setReference(ele)}
            placeholder={placeholder || 'Select...'}
            className={inputCva({
              color,
            })}
            defaultValue={props.value}
            displayValue={getDisplayValue as any}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <HUICombobox.Button
            className={twMerge(cx('absolute inset-y-0 right-0 flex items-center pr-1.5'))}
          >
            {props.multiple && Array.isArray(props.value) && (
              <span
                className={twMerge(cx('pr-1.5 dark:text-accent-accent'))}
              >{`${props.value.length}`}</span>
            )}

            <SelectArrow />
          </HUICombobox.Button>
        </div>

        {helperText && (
          <div className="pt-1.5">
            <HelperText color={color} text={helperText} />
          </div>
        )}
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
            <HUICombobox.Options
              className={twMerge(
                cx(
                  // bg
                  'dark:bg-bg-card',
                  'text-p7',
                  'overflow-auto',
                  // border
                  'border dark:border dark:border-bg-left-nav',
                  'focus:outline-none select-none',
                  'max-h-60 w-full select-none',
                ),
              )}
            >
              {children}
              {loading ? (
                <CircleSpinner size="sm" className="ml-1.5" />
              ) : (
                <span ref={intersectionRef as RefObject<HTMLElement>}></span>
              )}
            </HUICombobox.Options>
          </Transition>
        </Portal>
      </div>
    </HUICombobox>
  );
}

interface ComboBoxOptionProps<TType> extends HUIComboboxOptionProps<'li', TType> {
  sizing?: SizeType;
}

export function ComboboxOption<TType>({ sizing, ...props }: ComboBoxOptionProps<TType>) {
  return (
    <HUICombobox.Option
      className={({ active, selected }) => {
        return twMerge(
          cx(
            'relative select-none',
            'px-1.5 pt-2 pb-1',
            'cursor-pointer',
            // text
            'text-gray-500 dark:text-text-text-and-icon',
            'dark:hover:bg-bg-grid-header dark:focus:text-text-text-and-icon',
            {
              'dark:bg-bg-active-selection dark:text-text-input-value': selected,
            },
          ),
        );
      }}
      {...props}
    />
  );
}

function Portal(props: { children: ReactNode }) {
  const { children } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
