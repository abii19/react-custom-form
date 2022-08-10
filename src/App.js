import { useState } from "react";
import FormInput from "./components/common/forms/FormInput";
import FormSelect from "./components/common/forms/FormSelect";
// import { Counter } from './features/counter/Counter';

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    subject: ""
  });

  const inputs = [
    {
      component: "input",
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: `${
        !values.username
          ? "Fill username"
          : "Username should be 3-16 characters and shouldn't include any special character!"
      }`,
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      component: "input",
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      component: "input",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      component: "input",
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      component: "input",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    },
    {
      component: "select",
      label: "Select Subject",
      name: "subject",
      placeholder: "Select Subject",
      errorMessage: "Select a subject.",
      required: true,
      keys: [
        {
          name: "One",
          value: "one"
        },
        {
          name: "Two",
          value: "two"
        },
        {
          name: "Three",
          value: "three"
        }
      ]
    }
  ];

  const select = {
    label: "Select Subject",
    name: "subject",
    placeholder: "Select Subject",
    errorMessage: "Select a subject.",
    required: true,
    keys: [
      {
        name: "One",
        value: "one"
      },
      {
        name: "Two",
        value: "two"
      },
      {
        name: "Three",
        value: "three"
      }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Test Form</h1>
        <FormSelect
          {...select}
          value={values.subject}
          onChange={handleChange}
        />
        {inputs.map((input) => {
          switch (input.component) {
            case "input":
              return (
                <FormInput
                  key={input.name}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
              );
            case "select":
              return (
                <FormSelect
                  {...select}
                  value={values.subject}
                  onChange={handleChange}
                />
              );
          }
        })}

        <button type="submit">Submit</button>
      </form>

      {/* <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </>
  );
};

export default App;
