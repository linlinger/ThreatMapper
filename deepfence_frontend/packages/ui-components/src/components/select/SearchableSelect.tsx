import * as LabelPrimitive from '@radix-ui/react-label';
import * as Portal from '@radix-ui/react-portal';
import cx from 'classnames';
import { useCombobox, UseComboboxPropGetters, useMultipleSelection } from 'downshift';
import React, { useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { TextInput } from '@/components/input/TextInput';
import { fetchData } from '@/components/select/dummy';
import { CircleSpinner } from '@/main';

type SelectItem = { id: number; name: string };
export interface SearchableSelectProps {
  asMulti: boolean;
  name: string;
  label?: string;
  selectedItems: SelectItem[];
  required?: boolean;
  id?: string;
}

type SelectItemType = { label: string; value: string };

type SelectItemProps = {
  item: SelectItemType;
  className?: string;
  key?: string;
};

declare type SelectStateValue = string | string[];
declare type MutableValue<T extends SelectStateValue = SelectStateValue> =
  T extends string ? string : T;
interface SelectState extends UseComboboxPropGetters<SelectItemType> {
  value: SelectStateValue;
}

const SelectStateContext = React.createContext<SelectState | null>(null);

export const SelectItem = ({ item, key, className }: SelectItemProps) => {
  const internalId = useId();
  const _key = key ? key : internalId;

  const selectStateContext = useContext(SelectStateContext);
  const { getItemProps } = selectStateContext as SelectState;

  const isSelected = useMemo(() => {
    if (Array.isArray(selectStateContext?.value) && item.value) {
      return selectStateContext?.value.includes(item.value);
    } else if (selectStateContext?.value === item?.value) {
      return true;
    }
    return false;
  }, [selectStateContext?.value, item.value]);

  const classes = twMerge(
    cx(
      'flex px-4 py-2 items-center gap-3 text-gray-500 dark:text-gray-300 cursor-pointer',
      'focus:outline-none dark:focus:bg-gray-600 focus:bg-gray-100',
      'data-active-item:dark:bg-gray-600 data-active-item:bg-gray-100',
      'data-focus-visible:dark:bg-gray-600 data-focus-visible:bg-gray-100',
      'text-sm',
      'font-medium',
      {
        [`text-blue-600 dark:text-blue-400 font-semibold`]: isSelected,
      },
    ),
    className,
  );

  return (
    <li className={classes} key={_key} {...getItemProps({ item })}>
      <span
        className={cx('text-sm text-gray-700', {
          'text-blue-600 dark:text-blue-400': isSelected,
        })}
      >
        {item.label}
      </span>
    </li>
  );
};

export const SearchableSelect = ({
  id,
  label,
  required,
  name,
}: SearchableSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [offset, setOffset] = useState(1);
  const [selectItems, setSelectItems] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);

  const intersectionRef = useRef(null);

  const loadObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setOffset((_offset) => _offset + 1);
      }
    },
    {
      threshold: 1,
    },
  );

  const text = useMemo(() => {
    if (selectedItems.length === 0) {
      return null;
    }
    return selectedItems.length > 1
      ? `${selectedItems.length} items selected`
      : `${selectedItems.length} item selected`;
  }, [selectedItems]);

  useEffect(() => {
    if (intersectionRef.current) {
      loadObserver.observe(intersectionRef.current);
    }
    return () => {
      if (intersectionRef.current) {
        loadObserver.unobserve(intersectionRef.current);
      }
    };
  }, [intersectionRef.current]);

  const getApiData = (input: string) => {
    fetchData(offset, input).then((res: any[]) => {
      setSelectItems(res);
    });
  };

  useEffect(() => {
    fetchData(offset, searchText).then((res) => {
      setSelectItems((oldItems) => [...oldItems, ...res]);
    });
  }, [searchText, offset]);

  const getNewSelectItems = (newSelectedItem: SelectItem | null | undefined) => {
    const found = selectedItems.find((item) => item.id == newSelectedItem?.id);
    if (newSelectedItem) {
      if (!found) {
        return [...selectedItems, newSelectedItem];
      } else {
        return selectedItems.filter((item) => item.id !== newSelectedItem?.id);
      }
    }
    return selectedItems;
  };

  const { getDropdownProps } = useMultipleSelection({
    selectedItems,
  });

  const { isOpen, getMenuProps, getInputProps, getItemProps } = useCombobox({
    items: selectItems,
    itemToString(item) {
      return item ? item.name : '';
    },
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type, inputValue } = actionAndChanges;

      if (inputValue) {
        setSearchText(inputValue);
      } else {
        setSearchText('');
      }
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
        default:
          return changes;
      }
    },
    onStateChange({ inputValue: newInputValue, type, selectedItem: newSelectedItem }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          setSelectedItems(getNewSelectItems(newSelectedItem));
          break;

        case useCombobox.stateChangeTypes.InputChange:
          getApiData(newInputValue ?? '');

          break;
        default:
          break;
      }
    },
  });

  const internalId = useId();
  const _id = id ? id : internalId;

  return (
    <SelectStateContext.Provider
      value={{
        value: selectItems,
        getItemProps,
      }}
    >
      <div>
        <div className="flex flex-col gap-1">
          {label && (
            <LabelPrimitive.Root
              htmlFor={_id}
              className="text-sm font-medium text-gray-900 dark:text-white"
            >
              {required && <span>*</span>}
              {label}
            </LabelPrimitive.Root>
          )}
          <div className="shadow-sm bg-white inline-flex gap-2 items-center flex-wrap p-1.5">
            <div className="flex gap-0.5 grow">
              <TextInput
                {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                sizing="sm"
                name={name}
                value={text}
              />
            </div>
          </div>
        </div>
        <Portal.Root>
          <ul
            className={`absolute w-inherit bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${
              !(isOpen && selectItems.length) && 'hidden'
            }`}
            {...getMenuProps()}
          >
            {isOpen &&
              selectItems.map((item, index) => (
                <div key={index}>
                  <li
                    className={cx('py-2 px-3 shadow-sm flex flex-col')}
                    key={`${item.id}${index}`}
                    {...getItemProps({ item, index })}
                  >
                    <span
                      className={cx('text-sm text-gray-700', {
                        'text-blue-600 dark:text-blue-400': selectedItems.includes(item),
                      })}
                    >
                      {item.name}
                    </span>
                  </li>
                </div>
              ))}
            <li ref={intersectionRef}>
              <CircleSpinner size="xs" />
            </li>
          </ul>
        </Portal.Root>
      </div>
    </SelectStateContext.Provider>
  );
};

export default SearchableSelect;
