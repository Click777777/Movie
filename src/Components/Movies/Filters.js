import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { useState, Fragment } from "react";
import { CategoriesData } from "../../Data/CategoryData";

const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2020" },
];

const TimeData = [
  { title: "Sort By Hour" },
  { title: "1 - 5 Hour" },
  { title: "5 - 10 Hour" },
  { title: "10 - 15 Hour" },
  { title: "15 - 20 Hour" },
];

const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

const Filters = () => {
  const [category, setCategory] = useState(CategoriesData[0]);
  const [year, setYear] = useState(YearData[0]);
  const [time, setTime] = useState(TimeData[0]);
  const [rate, setRate] = useState(RatesData[0]);

  const FilterData = [
    { value: category, onChange: setCategory, items: CategoriesData },
    { value: year, onChange: setYear, items: YearData },
    { value: time, onChange: setTime, items: TimeData },
    { value: rate, onChange: setRate, items: RatesData },
  ];

  return (
    <div className=" my-6 bg-dry border border-gray-800 text-dryGray grid grid-cols-1 xs:grid-cols-2 gap-2 rounded p-6 md:grid-cols-4 lg:gap-12">
      {FilterData.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className=" relative w-full border text-white border-gray-800 bg-main cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon className="h-5 w-5 " aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="bg-white border border-gray-800 text-dryGray absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {item.items.map((itemData, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={itemData}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-bold" : "font-normal"
                          }`}
                        >
                          {itemData.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-main font-bold">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
