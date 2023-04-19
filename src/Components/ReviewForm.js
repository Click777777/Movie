export const Select = ({ label, option, onChange, value }) => {
  return (
    <>
      <label htmlFor="rating" className=" text-border font-semibold">
        {label}
      </label>
      <select
        name="rating"
        id="rating"
        className="w-full bg-main text-text text-sm px-6 py-4 mt-2 border border-border rounded"
        onChange={onChange}
        defaultValue={value}
      >
        <option label="Please Select Rating" disabled value={value}></option>
        {option.map((arrMap, index) => (
          <option
            key={index}
            value={arrMap.value}
            className=" bg-white text-main"
          >
            {index + 1}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;
            {arrMap.title}&nbsp;&nbsp;)
          </option>
        ))}
      </select>
    </>
  );
};

export const Message = ({ label, placeholder }) => {
  return (
    <div className=" w-full text-base">
      <label htmlFor="message" className=" text-border font-semibold">
        {label}
      </label>
      <textarea
        name="message"
        id="message"
        rows="10"
        className=" w-full border bg-main text-text border-border rounded text-sm mt-2  p-6"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const LoginForm = ({ label, placeholder, type, bg }) => {
  return (
    <div className=" text-sm w-full">
      <label htmlFor={label} className=" text-border font-semibold">
        {label}
      </label>
      <input
        required
        placeholder={placeholder}
        type={type}
        className={`${
          bg ? "bg-main" : "bg-dry"
        } w-full text-sm text-white border border-border rounded mt-2 p-4 `}
      />
    </div>
  );
};
