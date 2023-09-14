import { useState, useRef, useEffect } from 'react';

export default function Addgoal({ addGoal }) {
  const inputRef = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addGoal(title, description);
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white border-2 p-4 shadow-lg rounded mx-auto my-4"
      style={{ maxWidth: '800px' }}
    >
      <fieldset className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Insert goal title"
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title" className="text-secondary">
          Goal Title
        </label>
      </fieldset>

      <fieldset className="form mb-3">
        <textarea
          className="form-control"
          placeholder="Describe your goal here"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </fieldset>
      <button className="btn btn-primary">Add goal</button>
    </form>
  );
}
